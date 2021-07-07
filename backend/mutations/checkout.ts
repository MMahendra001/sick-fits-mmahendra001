
import { KeystoneContext } from '@keystone-next/types';
import { CartItemCreateInput, OrderCreateInput } from '../.keystone/schema-types';
import stripeConfig from '../lib/stripe';

interface Arguments {
  token: string,
}

const graphql = String.raw;

async function checkout(
  root: any,
  { token }: Arguments,
  context: KeystoneContext
): Promise<OrderCreateInput> {

  console.log('You can checkout');
  //1.Make sure they are logged in
  const userId = context.session.itemId;

  if (!userId) {
    throw new Error('Sorry ! You must be signed in to create an order!');
  }
  //1.2 Query the current user
  const user = await context.lists.User.findOne({
    where: { id: userId },
    resolveFields: graphql`
    id
    name
    email
    cart{
      id
      quantity
      product{
        name
        price
        description
        photo{
          id
          image{
            id
            publicUrlTransformed
          }
        }
      }
    }
    `
  });

  // console.dir(user, { depth: null });

  //2.calc the total price for their order

  const cartItems = user.cart.filter(cartItem => cartItem.product);

  const amount = cartItems.reduce(function (tally: number, cartItem: CartItemCreateInput) {
    return tally + cartItem.quantity * cartItem.product.price;
  }, 0);
  console.log(amount);
  //3.Create a charge with stripe library

  const charge = await stripeConfig.paymentIntents.create({
    amount,
    currency: 'USD',
    confirm: true,
    payment_method: token,
    //As per Indian regulations export transactions require a description,customer name and address
    //TODO: Do some work here and update this with dynamic data : https://stripe.com/docs/india-accept-international-payments
    description: 'Shopping from sick-fits.',
    shipping: {
      name: user.name,
      address: {
        line1: '510 Townsend St',
        postal_code: '98140',
        city: 'San Francisco',
        state: 'CA',
        country: 'US',
      },
    },
  }).catch(err => {
    console.log(err);
    throw new Error(err.message);
  }
  );

  console.log(charge);

  //4.Convert the cartItems to orderItems
  const orderItems = cartItems.map(cartItem => {
    const orderItem = {
      name: cartItem.product.name,
      description: cartItem.product.description,
      price: cartItem.product.price,
      quantity: cartItem.quantity,
      photo: { connect: { id: cartItem.product.photo.id } },
    }
    return orderItem;
  })
  //5. Create the order and return it.
  const order = await context.lists.Order.createOne({
    data: {
      total: charge.amount,
      charge: charge.id,
      items: { create: orderItems },
      user: { connect: { id: userId } },
    }
  });
  //6. Clean up any old cart  items
  const cartItemIds = user.cart.map(cartItem => cartItem.id);

  await context.lists.CartItem.deleteMany({
    ids: cartItemIds,
  });
  return order;
}
export default checkout;


//notes :

//Check in three places : frontend ui console, backend cli , stripe dashboard

//FrontENd
//first: create payment method at frontEnd then add cartItems in cart
//second:click the check out btn and get the token : console log it.If it's working move on to third.

//BackEnd
//third : .go through 1 , 2 and 3 in this checkout mutation, up until you create paymentIntent : charge, save and run npm dev again.

//FrontEnd
// four : get the token

//BackEnd
//five : go to keystone graphQL api : run checkout mutation in graphqlApi and check the console.log(charge) in backend cli and stripe dashboard

//FrontEnd
//six : if five is successful then take this mutation to frontend and implement it,On click everything will be done.

//BackEnd
//seven : be done with with 4,5 and 6 here (check the keystone data types : order, orderItems and empty cart ) and return mutation result : order

// FrontEnd
//Eight : take order data and make a page,
  //cart count > fix nav code and (backend cartItems.map > user.cart.map : use non filter ids to delete : no 6 )
  //-change the page when the order is created
  //-close the cart
  //-refetch the user cart when they buy something.


//we are done here , great job.

