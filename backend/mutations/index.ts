import { graphQLSchemaExtension } from '@keystone-next/keystone/schema';
import addToCart from './addToCart';
// make a fake graphql tagged template literal
const graphql = String.raw;

export const extendGraphqlSchema = graphQLSchemaExtension({
  typeDefs: graphql`
    type Mutation {
      addToCart(productId: ID): CartItem
    }
  `,
  resolvers: {
    Mutation: {
      addToCart,
    },
  },
});

// Notes:
// In our project we will have two custom mutation :

// 1.custom addToCart mutation (this one.)
// 2.custom checkOut mutation

// Always remember why we are here,for addToCart we take product as cartItem and add it in to cart.

// We would have done it with existing CartItemCreateInput mutation provided in our graphQL api.
// But in that mutation we have problem : it will add product as  new cart item even if it is the same product.

// We don't want that: that's why we are here to create custom mutation
// which will simply increment the cart item quantity by 1 every time that product item is the same.
// and if it's different it will add it as new cart item in our cart.
