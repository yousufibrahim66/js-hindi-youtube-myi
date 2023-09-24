const user = {
    username: "yousuf",
    price: 999,
    
    welcomeMessage: function() {
        console.log(`$this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "yousuf"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//         let username = "yousuf"
//         console.log(this.username);
// }

// chai()

// const chai = () => {
//     let username = "yousuf"
//     console.log(this.username);
// }

// chai()

// const addTwo = (num1, num2) => {
//       return num1 + num2
// }

// Implecit Return 

// const addTwo = (num1, num2) => num1 + num2

//  const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "yousuf"})

console.log(addTwo(3, 4));