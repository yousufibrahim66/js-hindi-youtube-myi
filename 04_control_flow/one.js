const balance = 1000

// if (balance < 500 ){
//     console.log("less then 500");
// } else if (balance < 750) {
//     console.log("less the 750");
// } else if (balance < 900) {
//      console.log("less the 900");   
// } else {
//      console.log("less then 1200");
// }

const userLoggedIn = true 
const debitCard = true 
const loggedInFromGoogle = false
const loggedInFromEmail = true
// && for And condition 
if (userLoggedIn && debitCard) {

    console.log("Allow to buy course ");
    
}
// || for OR condition
if (loggedInFromGoogle || loggedInFromEmail ) {
    console.log("User logged in");
}


