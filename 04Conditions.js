// AND &&

var isLoggedIn = true;
var isEmailVerified = true;
var cardInfo = true;

// if ("isLoggedIn") {
//     console.log("Logged IN Success");
//     if ("isEmailVerified") {
//         console.log("Email ia verified");
//     }
// }

if (isLoggedIn && isEmailVerified && cardInfo) {
    console.log("Allow user to make purchase");
} else {
    console.log("You are not allowed to do that");
}
