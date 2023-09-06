var user = "admin"

switch (user) {
    case "admin":
        console.log("You get full access");
        break;
    
    case "subadmin":
        console.log("get access to create/delete courses");
        break;
    
    case "testrep":
        console.log("get access to create/delete tests");
        break;
    
    case "user":
        console.log("get access to consume content");
        break;

    default:
        console.log("Trial User");
        break;
}