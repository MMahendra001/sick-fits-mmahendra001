import { checkbox } from '@keystone-next/fields';

export const permissionFields = {
    canManageProducts: checkbox({
        defaultValue: false,
        label: 'User can update and delete any product',
    }),
    canSeeOtherUsers: checkbox({
        defaultValue: false,
        label: 'Users can see other users',
    }),
    canManageUsers: checkbox({
        defaultValue: false,
        label: 'User can edit other users',
    }),
    canManageRoles: checkbox({
        defaultValue: false,
        label: 'User can CRUD roles',
    }),
    canMangeCart: checkbox({
        defaultValue: false,
        label: 'User can see and manage cart and cartItems',
    }),
    canManageOrders: checkbox({
        defaultValue: false,
        label: 'User can see and manage orders',
    }),
};
