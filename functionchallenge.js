console.log("Hello Challenge");

// first function
// - create a fortune teller function
// call it fortune teller
// i expect to call it :
// fortuneTeller("roger", "bali", "29", "tesla", "purple", "6")
// expect to return a fortune using all arguments


let person = prompt("Please enter your name");
let personAge = prompt("Please enter your age");
let personPlace = prompt("Please enter your Favorite place");
let personCar = prompt("Please enter your favorite car");
let personColor = prompt("Please enter your favorite color");
let personNumber = prompt("Please enter your favotie number");

fortuneTeller( person , personAge , personPlace, personCar, personColor, personNumber)

function fortuneTeller(name, age, place, car, color, favnum){

    let fortune = name + " is a gamer, he is " + age + ", he was swimming in a " + place + ", he will win a " + car + ". his wife's eyes will be " + color + ", he's gonna have " + favnum + " million dollars."

    return alert(fortune)
}


fortuneTeller
