var name = prompt("Your name", "name");
if (typeof name === 'string' || myVar instanceof String){
    var age = parseInt(prompt("Your age", "0"));
    if (age < 18) {
        console.log("too young");
    } else if (age >= 80) {
        console.log("too old");
    } else if (age === "" || age === null || age === NaN || age === undefined) {
        console.log("acess denided");
    } else {
        console.log("Welcome " + name +"!"); 
    }    
} else if (name === null || name == undefined) {
    console.log("acess denided");
} else {
    console.log("acess denided");
}



var age = parseInt(prompt("Your age", "0"));

if (age == 0) {
    console.log("enter something");
} else if (age < 18) {
    console.log("too young");
} else if (age >= 80) {
    console.log("too old");
} else if (age >= 18 || age <= 78) {
    var name = prompt("Your name", "name");
    if (name === "" || name === null) {
        console.log("you need to enter your name");
    } else {
    console.log("Welcome " + name +"!"); 
    }
} else {
    console.log("its may be a number")
}