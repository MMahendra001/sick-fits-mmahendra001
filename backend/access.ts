import { KeystoneContext } from "@keystone-next/types";
import { permissionList } from "./schemas/fields";
import { ListAccessArgs } from "./types";

export function isSignedIn({ session }: ListAccessArgs) {
    return !!session;
}

const generatedPermissions = Object.fromEntries(
    permissionList.map((permission) => [
        permission,
        function ({ session }: ListAccessArgs) {
            return !!session?.data.role?.[permission];
        },
    ])
);

// Permission check if someone needs a criteria - yes or no.

export const permissions = {
    ...generatedPermissions,
    isAwesome({ session }: ListAccessArgs) {
        return session.data.name.includes('mahi');
    }
}

// Rule based functions
// Rules can return the boolean - yes or no - or a filter which limits which products they can CRUD.

export const rules = {
    canManageProducts({ session }: ListAccessArgs) {
        //1.Do they have the permission of canManageProducts
        if (permissions.canManageProducts({ session })) {
            return true;
        }
        //2.If not, do they own this item?
        return { user: { id: session.itemId } }  //read note1
    },
    canReadProducts({ session }: ListAccessArgs) {
        if (permissions.canManageProducts({ session })) {
            return true; // They can read everything.
        }
        //They should only see available products ( based on the status field )
        return { status: 'AVAILABLE' }
    },
}


/*
note1:

🤔 > you are 🏃‍♂️ this at Product schema

it's like graphQL query :

allProducts(where:{name:"Yeti Hondo"}){
     name
    price
}

but at access level.

todo: create a relationship between the Product and User >

so you can use > where:{user:{id:session.itemId}}

at Product Schema to filter the products

like:

export const Product = list({
  access: {
    create: isSignedIn,
    read: isSignedIn,
    update: rules.canManageProducts,    >> this one
    delete: rules.canManageProducts,    >> this one
  },
  .
  .
  .
  .
  read Products.ts note1

*/