// Basics of typescript


function greet(person: string, date: Date){
    console.log(`Hello, ${person}, today is ${date.toDateString()}`);
}

greet('otto', new Date());

let arrayNumber: number[] = [1, 2, 3];
let arrayString: string[] = ['oi', 'eu'];
let arrayDate: Date[] = [new Date(), new Date()];
let arrayBool: boolean[] = [true, false];

// TypeScript also has a special type, any, that you can use
// whenever you don’t want a particular value to cause typechecking errors.

let obj: any = {x:0};
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
obj.foo()
obj()
obj.bar = 100