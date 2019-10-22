console.log("loops connected");

let products = [ "cereal","milk", "waterbottle", "cheese", "soap"]
let cart = [];

let userSelection = prompt("please shop our products:" + products)

cart.push(userSelection);

let indexToRemove;





for (let index = 0; index < 6; index++) {
     console.log(products [index]);
     debugger
     if(userSelection === products[index]) {
         indexToRemove = index
     }
     products.splicer (indexToRemove, 0);
 }




// if(userSelection === "milk") {
//     indexToRemove = 1;
// } else if(userSelection === "cereal") {
//     indexToRemove = 0;
// } else if(userSelection === "waterbottle") {
//     indexToRemove = 2;
// } else if(userSelection === "soap") {
//     indexToRemove = 4;
// } else if(userSelection === "cheese") {
//     indexToRemove = 3;
// } else {
//     alert("we don't have what you want at the moment.")
// }

// products.splice( indexToRemove, 1)

// alert(prompt("Please shop out products:"
//  + products));


 