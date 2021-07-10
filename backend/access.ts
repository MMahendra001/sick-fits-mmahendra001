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

export const permission = {
    ...generatedPermissions,
    isAwesome({ session }: ListAccessArgs) {
        return session.data.name.includes('mahi');
    }
}

//TODO: Rule based functions
