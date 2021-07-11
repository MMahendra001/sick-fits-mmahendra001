import { integer, relationship, select, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { isSignedIn, rules } from '../access';

export const Product = list({
  access: {
    create: isSignedIn,
    read: rules.canReadProducts,
    update: rules.canManageProducts,
    delete: rules.canManageProducts,
  },
  fields: {
    name: text({ isRequired: true }),
    description: text({ ui: { displayMode: 'textarea' } }),
    photo: relationship({
      ref: 'ProductImage.product',
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'altText'],
        inlineCreate: { fields: ['image', 'altText'] },
        inlineEdit: { fields: ['image', 'altText'] },
      },
    }),
    status: select({
      options: [
        { label: 'Draft', value: 'DRAFT' },
        { label: 'Available', value: 'AVAILABLE' },
        { label: 'Unavailable', value: 'UNAVAILABLE' },
      ],
      defaultValue: 'DRAFT',
      ui: {
        displayMode: 'segmented-control',
        createView: { fieldMode: 'hidden' },
      },
    }),
    price: integer(),
    user: relationship({
      ref: 'User.products',
      defaultValue: ({ context }) => ({
        connect: { id: context.session.itemId }, //read note1
      }),
    }),
  },
});


/*
note1:

whenever product will be created it will connect this user field to whomever that logged in at that time.

Read : https://keystonejs.com/docs/apis/fields#relationship-type

connect example : addToCart step 5

-----
Now that means when user create the product they own them.

so we will update access of update and delete to only those users
who have permission to do that or they own the product by rules.canManageProducts


🤔 : update: rules.canManageProducts  ~ update : { user: { id: session.itemId } }
// where filter like graphql but at access level


-it will check and filter all the product with product user id and if it will match
with the currently logged in user id (session.itemId)
then it will allow only those products to update and delete

- now update access > read with product status
> if user have permission or if it's in "AVAILABLE" mode only then they can read it.

- test all of this in admin ui or at frontend or at graphql api with two different logged in users.

*/