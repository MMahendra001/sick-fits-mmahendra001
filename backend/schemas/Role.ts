import { relationship, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { permissionFields } from './fields';

export const Role = list({
    // access:,
    fields: {
        name: text({ isRequired: true }),
        ...permissionFields,
        assignedTo: relationship({
            ref: 'User.role',
            many: true,
            ui: {
                itemView: { fieldMode: 'read' },
            },
        }),
    },
});
