// *
// Define a function that can answer the role of a user.
// A user can be on following roles;
// admin - with all access
// subadmin - with access to create/delete courses
// testrep - with access to create/delete tests
// user - consume all content
// other - trial user.

// Input: getUserRole(name, role)

function getUserRole(name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin with all access` 
            break;
        
        case "subadmin":
            return `${name} is sub-admin with access to create/delete courses` 
            break;
        
        case "testrep":
            return `${name} is test rep with access to create/delete test` 
            break;
            
        case "user":
            return `${name} is user to consume content` 
            break;

        default:
            return `${name} is a trial user`
            break;
    }
}

// console.log(getUserRole("Leo", "subadmin"));

var getRole = getUserRole("James", "user");

console.log(getRole);