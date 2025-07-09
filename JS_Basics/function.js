function addTwoNumbers(number1, number2){ //this is parameter

    console.log(number1 + number2);
    }

    //addTwoNumbers(3,4) // when argument 3 and 4 is passed 7

    // let sum =0;
    // function calculateCartPrice(...num1){ //...is rest operator which gets added in array
    //    console.log(num1);
    //   sum= sum +num1;
    //     console.log(sum);
        

      
    // }

    // console.log(calculateCartPrice(200, 400, 500, 2000))



    const user = {
        username: "Samuel",
        price: 999,

        welcomeMessage: function() {
            console.log(`${this.username} , welcome to website`); //this refers to current context
            console.log(this);
        }

    }

    // user.welcomeMessage()
    // user.username = "sam" //context got chnaged
    // user.welcomeMessage()


    // function randomFun(){
    //     let username = "Saim"
    //     console.log(this.username); // undefined as this does not work in fn but only in obj
    // }

    //randomFun()



//another way we can write function

const randomFun = function () {
    let username = "Saim"
    console.log(this.username); //again undefined
}

randomFun()


myList.array.forEach(element => {
    
});

myList.array.forEach((eachElement)=>{
    eachElement
})


//arrow function
const randomFun1 =  () => {
    let username = "hitesh"
    //console.log(this);
}


// randomFun()



// const addTwo = (num1, num2) => {
//     return num1 + num2 //explicit return
// }

// const addTwo = (num1, num2) =>  num1 + num2 //implicit return

// const addTwo = (num1, num2) => ( num1 + num2 )//implicit return

  */  