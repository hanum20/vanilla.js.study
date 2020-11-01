// Function 01 - backtick
function sayHello(name, age) {
    console.log(`hello ${name} you are ${age} years old`);
}

sayHello("hanum", 15);

// Function 02
const cal =  {
    sum: function(a, b){
        return a + b;
    },
    plus: function(a, b){
        return a + b;
    }
}

console.log(cal.plus(2,4));
console.log(cal.sum(4,4));