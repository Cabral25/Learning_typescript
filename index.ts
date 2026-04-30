// Basics of typescript



// Primitive Types


// Os primitivos em Typescript são exatamente os mesmos que em Javascript

// number
const num = 1;

// string
const str = 'oi';

// boolean
const bool = true;

let arrayNumber: number[] = [1, 2, 3]; // array de number
let arrayString: string[] = ['oi', 'eu']; // array de string
let arrayDate: Date[] = [new Date(), new Date()]; // array de objetos Date
let arrayBool: boolean[] = [true, false]; // array de boolean


// Outros tipos básicos


// TypeScript also has a special type, any, that you can use
// whenever you don’t want a particular value to cause typechecking errors.
// When a value is of type any, you can access any properties of it (which will 
// in turn be of type any), call it like a function, assign it to (or from) a value 
// of any type, or pretty much anything else that’s syntactically legal


let obj: any = {x:0}; // 'desliga' o Typescript
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;

// unknown

let valor: unknown = 10;

// void

function logar(): void { // função que não retorna nada
    console.log('logged in')
}


// never


function erro(): never {
    throw new Error('erro');
}


// Enums


enum Status {
    Ativo,
    Inativo
}

// Union


let id: string | number


// Literal types


let status_: 'ativo' | 'inativo'


// Objetos tipados


let user: { nome: string; idade: number}


// Type aliases


type Usuario = {
    nome: string
    idade: number
}


// Interafaces (muito importante)


interface Usuario_ {
    nome: string
    idade: number
}


// Generics (nível mais alto)


function identidade<T>(valor: T): T {
    return valor;
}


// null e undefined


let x: null = null
let y: undefined = undefined



// Type annotations os variables


// When you declare a variable using const, var, or let, 
// you can optionally add a type annotation to explicitly specify the type of the variable:


let myName: string = 'Otoo';


// In most cases, though, this isn’t needed. Wherever possible, 
// TypeScript tries to automatically infer the types in your code. 
// For example, the type of a variable is inferred based on the type of its initializer:


let myName_ = 'Otto';



// Functions


// Functions are the primary means of passing data around in JavaScript. 
// TypeScript allows you to specify the types of both the input and output values of functions.


function greet(name: string) {
    console.log(`Hello, ${name}!`)
}


// Return type annotations
function getFavoriteNumber(): number {
    return 26;
}


// Much like variable type annotations, you usually don’t need 
// a return type annotation because TypeScript will infer the function’s 
// return type based on its return statements. The type annotation in 
// the above example doesn’t change anything. Some codebases will explicitly 
// specify a return type for documentation purposes, to prevent accidental changes, 
// or just for personal preference.