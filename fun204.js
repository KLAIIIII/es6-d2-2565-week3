// Declaration Annonymous function
function sayHello(){
    // console.log("Hello")
    return "Hello"
}

// Declaration Generic function
function greeting(sayHello,name){
    return `${sayHello()},${name}`
}

// Call Function
let message = greeting(sayHello,"Mark Zakerberg")
console.log(message)