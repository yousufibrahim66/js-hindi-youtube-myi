// const userEmail = "myi@mail.com"

// if (userEmail) {
//     console.log("Got User Email");
// } else {
//     console.log("Dont have user Email");
// }


// const userEmail = ""

// if (userEmail) {
//     console.log("Got User Email");
// } else {
//     console.log("Dont have user Email");
// }

const userEmail = []

if (userEmail) {
    console.log("Got User Email");
} else {
    console.log("Dont have user Email");
}


// falsely Values ( false )

// false, 0, -0, BigInt 0n, "", null, undefinded, NaN

// truthly Values ( True )

// "0", 'fales', " ", [], {}, function (){} (empty function ), 


// how to fine empty Array
if (userEmail.length === 0) {
    console.log("Array is empty");
}

// how to find empty Object

const emptyObj = {}

    if (Object.keys(emptyObj).length === 0) {
        
        console.log("Object is Empty");
    }


    // Nullish Coalescing Operator (??): null undefined

    let val1;
    // val1 = 5 ?? 10
    // val1 = null ?? 10 
    // val1 = undefined ?? 15
       val1 = null ?? 10 ?? 20



    console.log(val1);

    // Terniary Operater 

    // condition ? true : false

    const iceTeaPrice = 100 

    iceTeaPrice <= 80 ? console.log("less then 80") : console.log("more then 80");