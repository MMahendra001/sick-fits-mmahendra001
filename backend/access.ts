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
        if (!isSignedIn({ session })) {
            return false;
        }  // read note3
        //1.Do they have the permission of canManageProducts
        if (permissions.canManageProducts({ session })) {
            return true;
        }
        //2.If not, do they own this item?
        return { user: { id: session.itemId } }  //read note1
    },
    canOrder({ session }: ListAccessArgs) {
        if (!isSignedIn({ session })) {
            return false;
        }
        //1.Do they have the permission of canMangeCart
        if (permissions.canMangeCart({ session })) {
            return true;
        }
        //2.If not, do they own this item?
        return { user: { id: session.itemId } }  //read note3
    },
    canManageOrderItem({ session }: ListAccessArgs) {
        if (!isSignedIn({ session })) {
            return false;
        }
        //1.Do they have the permission of canMangeCart
        if (permissions.canMangeCart({ session })) {
            return true;
        }
        //2.If not, do they own this item?
        return { order: { user: { id: session.itemId } } } // read note2
    },
    canReadProducts({ session }: ListAccessArgs) {
        if (!isSignedIn({ session })) {
            return false;
        }
        if (permissions.canManageProducts({ session })) {
            return true; // They can read everything.
        }
        //They should only see available products ( based on the status field )
        return { status: 'AVAILABLE' }
    },
    canManageUsers({ session }: ListAccessArgs) {
        if (!isSignedIn({ session })) {
            return false;
        }
        //1.Do they have the permission of canManageUsers
        if (permissions.canManageUsers({ session })) {
            return true;
        }
        //2.Otherwise they may only update themselves!
        return { id: session.itemId } //read note4
    },
}


/*
-----------------------------------------
note1:
-----------------------------------------

🤔 > you are 🏃‍♂️ this at Product schema

it's like graphQL query :

allProducts(where:{name:"Yeti Hondo"}){
     name
    price
}

but at access level.

todo: create a relationship between the Product and User >

so you can use > where:{user:{id:session.itemId}}
(
futureNote:

rem:whatever you filtering through,it's common sense that
you need to have that field on that schema : user

later:
Product > read > canReadProducts > { status: 'AVAILABLE' }
)

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
  ..
  read Products.ts note1

-----------------------------------------
note2:
-----------------------------------------

If the filed doesn't exit at that level you can do deeper
with current lever field if it has what you need.

similar to :
query{
    allUsers(where:{role:{name:"Admin"}}){
        name
        email
    }
}

In our case at orderItem level we don't have user id
to match with session so we can't verify current
logged in user as owner of that item,

In order to do that,
we can create relationship right away like :

at OrderItem > user:"User.orderItem" and

at User > orderItem:"OrderItem.user" .

but we don't have to do that because we can also query that data
from OrderItem's current "order" field
which has relationship with Order schema and
it's has further relationship with the "User".

similar to graphql query :

query{
  allOrderItems(where:{order:{user:{id:"60a690c82d93332250f099fd"}}}){
    name
  }
}

but at access level we wrote it like this :

return { order: { user: { id: session.itemId } } }

got it? easy pizzy right?

-----------------------------------------
note3:
-----------------------------------------

now when we user this rules based function and when user try
to access the data in logged in state ,
it will prevent and allow their access of
create,read,update and delete
as we programmed it to.

//when user is logged in state

query{
    allOrder{
        id
    }
} // as per rule this will give as
    right access or prevent access
    to the data or will give us error
    of "You don't have access to..." > which is perfect.

but

//when user is in logged out state

query{
    allOrder{
        id
    }
} // as per rule this will give as right access or
    prevent access to the data > that's great but
    if their is a case where it has error then it has to
    be like "You don't have access to..."
    but it is giving us the wrong error of
    something like : "Can not read property
    of ItemId of undefined.."

// which make sense right ? it doesn't have id,
so yeah we understand that but it's not right either..

// we have isSignedIn fun right?
so use that to return a "false" value to
our rule based function if the user is not signed in.

// put that if statement on top of every rule based function
so which will give us "false" right away
in logged out state or continue if logged in.

// that false will lead us to more informative access error
> "You don't have access to..."  > which is perfect.

-----------------
subNote:

did you notice how we just use one single rule based function
"canOrder" with "canMangeCart" permission to program access of :

1.CartItem,
2.OrderItem and
3.Order
(in that order)

because "cartItem" relates to  "OrderItem"
which relates to "Order" and
at the end all of them belongs to
one single "user" who have created them.

that's how roles and permissions works,
you have to look deeper why they are their
and how they relates to each other,
then create access rules around that.

some access can be given with only permissions
: Role.ts >  permissions.canManageRoles

and you also have to program their adminUI too
: hideCreate,hideDelete ...

at the end, access needs yes or no.
all it needs is tell is true or false,
you want to give access or not, it's boolean.
(even those filters are iterating through all items
to get yes or no from them.)
now how you program this thing is up to you,
no matter how big your project is.

(Rem. and understand all process and code your way thought it :
    login flow >
            product flow >
                        pagination >
                                addToCart flow >
                                    stripe checkOut flow >
                                                        Order

-----------------------------------------
note4:
-----------------------------------------

diff:
permissions > only have to have that checkbox
rules > either checkbox or yourself

Role.ts >
-you have to have permission to access this.
-update adminUI access too.

User.ts >
You can add access to whole schema types and also
you can add access to it's individual fields too.
check: User.ts access , User.role

ProductImage >
-permissions

-in some cases you need to give direct access,
 regardless of they have permission or  not
 regardless of they have to have some kind of rule or not
 regardless of they are logged in or not or just a regular user.

it's like globally known access control,where no further logic needed,
just provide direct yes or no,right there at access level:

Ex:
User > access > read : () => true
ProductImage > access > read : () => true
OrderItem > access > {update : () => false,delete:() => false}


// why i am writing this ? idKnow,is it fun? may be,who cares :)

okay go and test it now.

*/