
import { KeystoneContext } from '@keystone-next/types';
import { CartItemCreateInput } from '../.keystone/schema-types';
import { Session } from '../types';

async function addToCart(
    root: any,
    { productId }: { productId: string },
    context: KeystoneContext
): Promise<CartItemCreateInput> {
    console.log('ADDING TO CART');
    //1.Query the current user to see if they are logged in.
    const sesh = context.session as Session;
    if (!sesh.itemId) {
        throw new Error('You must be logged in to do this!');
    }
    //2.Query the current user cart.
    const allCartItems = await context.lists.CartItem.findMany({
        where: { user: { id: sesh.itemId }, product: { id: productId } },
        resolveFields: 'id,quantity',
    });
    //3.See if the current item is in their cart.
    //4.If it is increment by 1,
    const [existingCartItem] = allCartItems;
    if (existingCartItem) {
        console.log(existingCartItem);
        console.log(`There are already ${existingCartItem.quantity},increment it by 1!`);
        return await context.lists.CartItem.updateOne({
            id: existingCartItem.id,
            data: { quantity: existingCartItem.quantity + 1, },
            resolveFields: false,
        })
    }
    //5.If it isn't create a new cart item!
    return await context.lists.CartItem.createOne({
        data: {
            product: { connect: { id: productId } },
            user: { connect: { id: sesh.itemId } },
        },
        resolveFields: false,
    })
}
export default addToCart;



//Note:
// For client side we have graphQL api to get all the data we want.:
//ex: currently logged in user and it's cart with : authenticatedItem query  rem?
//>> user.cart and user.cart.product.name.......

// But here in back end all the data available in context api.Ex:logged in user >> context.session

//console.log('add to cart') , console.log(sesh) or run addToCart mutation in graphql end point

//>> look into backend terminal and Admin UI for result and test logs just like that reset pass email.Little bit slow though.

/*

1. Check
---------------------------------
console.log('ADDING TO CART');

//1.Query the current user to see if they are logged in.
const sesh = context.session as Session;
console.log(sesh);
if (!sesh.itemId) {
    throw new Error('You must be logged in to do this!');
}
console.log('yes i am logged in');

---------------------------------
run at http://localhost:3000/api/graphql

mutation{
  addToCart(productId:"abc"){
    id
  }
}
---------------------------------

>> Terminal response:

ADDING TO CART
{
    listKey: 'User',
    itemId: '60a690c82...........',
    data: [Object: null prototype] {
      id: '60a690c82d........',
      name: 'Mahendra',
      email: 'mahendra......@gmail.com'
    }
  }   >> this is our sesh data


  yes i am logged in   >> we are logged in all right but if we were not then ? >> error(but how to check that?)
---------------------------------
CheckOut : https://next.keystonejs.com/apis/context
*/

/*
2 check
---------------------------------
    //2.Query the current user cart.


    const allCartItems = await context.lists.CartItem.findMany({
        where: { user: { id: sesh.itemId }, product: { id: productId } }
    }); //Here we are asking for only product which match the productId we pass in our mutation
    //and user id has to match with sesh id(only logged in user) >> so result will be singular


    console.log(allCartItems);
    const allProducts = await context.lists.Product.findMany({
        query: 'id name',
    });   // we didn't pass any args here to filter out somerhing so it'll give us all ids and name
    console.log(allProducts);

---------------------------------
run:

mutation{
  addToCart(productId:"60a8d83ccb499926043a80d3"){
    id
  }
}
---------------------------------
ADDING TO CART
{
  listKey: 'User',
  itemId: '60a690c82d93332250f099fd',
  data: [Object: null prototype] {
    id: '60a690c82d93332250f099fd',
    name: 'Mahendra',
    email: 'mahendra....com'
  }
}
yes i am logged in
[ [Object: null prototype] { id: '60c33674d7dc7a21e8204ee1' } ]  >. singular result

[
  [Object: null prototype] { id: '60a8d83ccb499926043a80d3' },
  [Object: null prototype] { id: '60a8d83dcb499926043a80d5' },
  [Object: null prototype] { id: '60a8d83dcb499926043a80d7' },
  .
  .
  .
] >> all products ids

Note: we can use first one :
    const allCartItems = await context.lists.CartItem.findMany({
        where: { user: { id: sesh.itemId }, product: { id: productId } }
    });

    to find out if user is logged in and the single product they asking for is in cart or not.

    Rem: this is cartItem at the end of the day which has : quantity,product and user as field.

    if this array has anything in it means that product is already in cart so we can increment that cartItem quantity by one.

    if array is [] that means product is not in cart so let's add it to cart.

    now move on to 3 to implement this logic.

    before that look at our allCartItem query fetch in our graphql:

        query{
        allCartItems{
            id
            quantity
            product{
            id
            name
            }
            user{
            id
            name
            }
        }
        }

        {
  "data": {
    "allCartItems": [
      {
        "id": "60c33674d7dc7a21e8204ee1",  >>>both match then: this is our existingCartItem if
        "quantity": 1,   >> existingCartItem? > this is what we want to increment.
        "product": {
          "id": "60a8d83ccb499926043a80d3",  >> this is productId we passed to match
          "name": "Yeti Hondo"
        },
        "user": {
          "id": "60a690c82d93332250f099fd",  >> this is the user id : checked logged in ? !
          "name": "Mahendra"
        }
      },
      {
        "id": "60c33f3a6967f72264ccb219",  >> then this not we jave to move on to 5
        "quantity": 5,
        "product": {
          "id": "60a8d83dcb499926043a80d7",  >> if it's not match productId
          "name": "KITH Hoodie"
        },
        "user": {
          "id": "60a690c82d93332250f099fd", >> if it's not match userId
          "name": "Mahendra"
        }
      },
      .
      .
      .
    }

---------------------------------
checkout:https://next.keystonejs.com/apis/list-items  >> read about those lists

we did use this

await context.lists.CartItem.findMany  >> which did act like our regular query fetch in client slide ::
    query{
        allCartItems{
            id
            quantity  .... with some where () like functionality we used to.We are using it every single time
                            when we are adding any product in our cart.

            // like hey there look for this specific product is already there in cart or !.

if it is...then
we will use below one to make increment logic:

context.lists.CartItem.updateOne  >> this one will act like mutation ::
                                     which will take id and data just like our updateProduct
                                     mutation as we did in our client side.

// it's similar but we are just doing it with context here.

---------------------------------
Check : 3 and 4 ::

    console.log('ADDING TO CART');
    //1.Query the current user to see if they are logged in.
    const sesh = context.session as Session;
    if (!sesh.itemId) {
        throw new Error('You must be logged in to do this!');
    }
    //2.Query the current user cart.
    const allCartItems = await context.lists.CartItem.findMany({
        where: { user: { id: sesh.itemId }, product: { id: productId } }
        query: 'id quantity',
    });

    //3.See if the current item is in their cart.
    //4.If it is increment by 1,

    const [existingCartItem] = allCartItems;

    if (existingCartItem) {
        console.log(`There are already ${existingCartItem.quantity},increment it by 1!`);
        return await context.lists.CartItem.updateOne({
            id: existingCartItem.id,
            data: {
                quantity: existingCartItem.quantity + 1,
            }
        })
    }



    note ::  query: 'id quantity', >> don't forget to tell what you want in return from findMany

---------------------------------
// to test this we will only pass the productId which is already in cart
        "id": "60c33674d7dc7a21e8204ee1",
        "quantity": 1,
        "product": {
          "id": "60a8d83ccb499926043a80d3",
          "name": "Yeti Hondo"
        },... let's test with Yeti Hondo :: note : look it has only 1 in quantity

---------------------------------

ADDING TO CART
There are already undefined,increment it by 1!


note ::  query: 'id quantity', >> don't forget to tell what you want in return from findMany

update:     //2.Query the current user cart.
    const allCartItems = await context.lists.CartItem.findMany({
        where: { user: { id: sesh.itemId }, product: { id: productId } },
        query: 'id quantity',  >> this one
    });


        query: 'id quantity',  >> this one  >> not working as doc >>

        // query > resolveField

-----------
        export const extendGraphqlSchema = graphQLSchemaExtension({
  typeDefs: graphql`
    type Mutation {
      addToCart(productId: ID!): CartItem  >> removed that !mark  >> not fixed
    }

-------
    resolveField: 'id quantity',  >> forgot ,

    resolveField: 'id ,quantity',  >> not fixed
-------
    ::Fixed it
    resolveFields: 'id,quantity',  >> it's friking 's' >>  resolveFields ! resolveField

--------------------------------
run
mutation{
  addToCart(productId:"60a8d83ccb499926043a80d3"){
    id
    quantity
  }
}

console:

ADDING TO CART
[Object: null prototype] {
  id: '60c33674d7dc7a21e8204ee1',
  quantity: 1
}
There are already 1,increment it by 1!

run same mutation again :

ADDING TO CART
[Object: null prototype] {
  id: '60c33674d7dc7a21e8204ee1',
  quantity: 2
}
There are already 2,increment it by 1!


--------------------------------
//5.If it isn't create a new cart item!
-----
    console.log('ADDING TO CART');
    //1.Query the current user to see if they are logged in.
    const sesh = context.session as Session;
    if (!sesh.itemId) {
        throw new Error('You must be logged in to do this!');
    }
    //2.Query the current user cart.
    const allCartItems = await context.lists.CartItem.findMany({
        where: { user: { id: sesh.itemId }, product: { id: productId } },
        query: 'id quantity',
    });
    //3.See if the current item is in their cart.
    //4.If it is increment by 1,
    const [existingCartItem] = allCartItems;
    if (existingCartItem) {
        console.log(`There are already ${existingCartItem.quantity},increament it by 1!`);
        return await context.lists.CartItem.updateOne({
            id: existingCartItem.id,
            data: {
                quantity: existingCartItem.quantity + 1,
            }
        })
    }
    //5.If it isn't create a new cart item!
    return await context.lists.CartItem.createOne({
        data: {
            product: { connect: { id: productId } },  >> our cartItem has relationship with product
            user: { connect: { id: sesh.itemId } } , >> our cartItem has relationship with product
        }
    })

-----------
    //note :: context.lists.CartItem.createOne act like our creatProduct mutation we need to pass data here...

    // but unlike product our cart we are dealing with cartItem fields that have relationship with other datatype so
    >> we have this "connect" thing here to create relationship thingy : (not in the doc yet: tx wes )

---------------
run: new prdocut id which is not in carts yet.

mutation{
  addToCart(productId:"60a8d840cb499926043a80e3"){
    id
    quantity
  }
}

console.log>>


ADDING TO CART   >> first time
ADDING TO CART  >> second time it's shows up here because it was in cart from now on so 1+1 = 2
[Object: null prototype] {
  id: '60c62e5114f0c219e8036122',
  quantity: 1  >> it's shows a but it's two
}
There are already 1,increment it by 1!

ADDING TO CART   >> third time 2 + 1
[Object: null prototype] {
  id: '60c62e5114f0c219e8036122',
  quantity: 2  >> it's show 2 here but if you check adminUI it will be three.(it's fine that's how it's suppose to work.)
}
There are already 2,increment it by 1!

--------------------------------
Set updateOne and createOne >>  resolveFields: false, :: if you are not returning  anything from them or you will
get error when you run those addCart mutation on client side.

All done this was fun : works like charm.

*/


//TypeScript Note :
// args types : productId:string
// return types : CartItemCreateInput > look into graphQL api already available for createCart mutation
// sesh as Session > take look into types.ts