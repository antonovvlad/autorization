document.querySelector('submit').onclick = autorizationClick;

function autorizationClick(){

    let nameValue = document.querySelector(".name").value;
    let ageValue = document.querySelector(".age").value;

if (ageValue === 0) {
    alert("enter something");
} else if (ageValue < 18) {
    alert("too young");
} else if (ageValue >= 80) {
    alert("too old");
} else if (ageValue >= 18 || age <= 78) {
    if (nameValue === "" || nameValue === null) {
        alert("you need to enter your name");
    } else {
        alert("Welcome " + nameValue +"!"); 
    }
} else {
    alert("its may be a number")
}
}