/**
 * All newly registered users will be assigned a basic role.
 * Prime users are assigned prime role upon privilege escalation action.
 * Prime users can be downgraded to basic role.
 * Anonymous role is a default role.
 */
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

// Valid User roles
const roles: string[] = ['anonymous', 'basic', 'prime', 'admin'];

exports.initBasicRole = functions.auth.user().onCreate((user) => {
    return grantUserRole('basic', user).then(() => {
        return {
            result: `New user is registered with a basic role.`
        }
    });
})

exports.userRole = functions.https.onCall((data, context) => {
    if (context.auth && (context.auth.token.userRole !== 'admin')) {
        return {
            error: "Request not authorized.  User must be an administrator to fulfill request."
        }
    }

    const email = data.email;
    const role = data.role;

    if (!(email && role)) {
        return {
            error: "Request missing email or desired role data."
        }
    }

    return grantRole(role, email).then(() => {
        return {
            result: `Request fullfilled! ${email} is now has a ${role} role.`
        }
    });
})

async function grantRole(role: string, email: string): Promise<void> {
    const user = await admin.auth().getUserByEmail(email);
    if (user.customClaims && (user.customClaims as any).userRole === role) {
        return;
    }
    if (roles.includes(role)) {
        return admin.auth().setCustomUserClaims(user.uid, {
            userRole: role,
        });
    } else {
        return admin.auth().setCustomUserClaims(user.uid, {
            userRole: roles[0],
        });
    }
}

async function grantUserRole(role: string, user: admin.auth.UserRecord): Promise<void> {
    if (user.customClaims && (user.customClaims as any).userRole === role) {
        return;
    }
    if (roles.includes(role)) {
        return admin.auth().setCustomUserClaims(user.uid, {
            userRole: role,
        });
    } else {
        return admin.auth().setCustomUserClaims(user.uid, {
            userRole: roles[0],
        });
    }
}
