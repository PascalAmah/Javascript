var name = "pascal";

console.log("Line number 3", name);

function sayName() {
    var name = "MR. CHI";
    console.log("Line number 7", name);

    sayNameTwo();
    function sayNameTwo() {
        var name = "MR. P";
        console.log("Line number 11", name);
    }
    
}

sayName();