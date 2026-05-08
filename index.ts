// Diferenças entre Javascript e Typescript:

// A diferença central: typescript adiciona tipagem estática ao javascript
// Também adiciona um sistema de tipos MUITO mais avançado.
// Typescript verifica erros em tempo de compilação (erros no JS só aparecem em runtime)
// Typescript precisa ser compilado (todo código typescript vira javascript no final)
// Tem melhor suporte a projetos grandes


// Basics of typescript



// Primitive Types


// Os primitivos em Typescript são exatamente os mesmos que em Javascript

// number
const num = 1;

// string
const str = 'oi';

// boolean
const bool = true;

let arrayNumber: number[] = [1, 2, 3]; // array de number, também pode ser escrito Array<number>
let array_: Array<number> = [1, 8, 0, 8]
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



// Enums are a feature added to JavaScript by TypeScript 
// which allows for describing a value which could be one 
// of a set of possible named constants. Unlike most 
// TypeScript features, this is not a type-level addition 
// to JavaScript but something added to the language and 
// runtime. Because of this, it’s a feature which you 
// should know exists, but maybe hold off on using unless you are sure.


enum Status {
    Ativo,
    Inativo
}



// Union Type



// TypeScript’s type system allows you to build 
// new types out of existing ones using a large 
// variety of operators.
// The first way to combine types you might see 
// is a union type. A union type is a type formed from 
// two or more other types, representing values that may be 
// any one of those types. We refer to each of these types as the union’s members.


let id: string | number;

function printId(id: number | string = 0) {
    console.log('Your ID is: ' + id);
}



// Literal types



// Literal types são tipos que permitem valores exatos,
// não apenas o tipo geral


let _status_: string; // isso aceita QUALQUER string, ou seja, pode representar qualquer string


// com literal types:
let estado: "success"; // Apenas aceita "success" como valor, ou seja, só pode representar uma única string
let status_: 'ativo' | 'inativo'


// Literal types quase sempre aparecem com union types


function printText(s: string, alignment: "left" | "right") {
    console.log(s, alignment);
}

printText('hello, world', 'left');
// Argument of type '"center"' is not assignable to parameter of type '"left" | "right"'
// printText('olá, mundo', 'center');


// numeric literal types work the same way


function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
}


// Of course, you can combine these with non-literal types


interface Options {
    width: number;
}

function configure(x: Options | "auto") {
    console.log(`Width: ${x}`);
}

configure({width: 100});
configure("auto");
// Argument of type '"automatic"' is not assignable to parameter of type 'Options | "auto"'
// configure("automatic");



// Object types



// In JavaScript, the fundamental way that we group and pass 
// around data is through objects. In TypeScript, we represent 
// those through object types.
// Apart from primitives, the most common sort of type you’ll
// encounter is an object type. This refers to any JavaScript
// value with properties, which is almost all of them!


// Object types can be anonymous:
function cumprimentar(person: { name: string; age: number}) {
    return "Hello, " + person.name;
}

// Or they can be named by using either an interface:
interface Humano {
    nome: string; // property nome
    idade: number; // property idade
}

// or a type alias:
type Animal = {
    nome: string; // property nome
    raça: string; // property raça
    sexo?: string;
}


let user: { nome: string; idade: number};


function printCoords(pt: { x: number; y: number}){
    console.log(`The coordinate's x value is ${pt.x}`);
}

printCoords({ x: 0, y: 7}); // , or ; can be used to separate the properties


// Object types can also specify that some or all of their properties are optional.
// To do this, add a ? after the property name:


function printName(obj: { first: string; last?: string}) {
    // ...
}

printName({ first: 'Ana'});
printName({ first: 'Sara', last: 'rizzo'});



// (Object Type) Type aliases



type Usuario = {
    nome: string;
    idade: number;
};

function validateUser(usuario: Usuario) {
    console.log(`Usuário ${usuario.nome} tem ${usuario.idade} anos de idade`);
}

type ID = number | string;



// (Object Type) Interfaces (muito importante)



// An interface declaration is another way to name an object type
interface Usuario_ {
    nome: string;
    idade: number;
}

function getUser(user: Usuario_) {
    console.log(`Hello, ${user.nome}, you're ${user.idade}`);
}

getUser({nome: 'otto', idade: 7})


// Type aliases and interfaces are very similar,
// and in many cases you can choose between them freely.
// Almost all features of an interface are available in type,
// the key distinction is that a type cannot be re-opened to
// add new properties vs an interface which is always extendable.



// (Object Type) Generics (nível mais alto)



// Imagine a Box type that can contain any value - strings, 
// numbers, whatever

interface Box {
    contents: any;
}

// Right now, the contents property is typed as any, 
// which works, but can lead to accidents down the line.
// We can make a generic Box type which declares a type parameter:

interface Box_<Type> {
    contents: Type;
}

interface Fruit {
    //..
}

// You might read this as “A Box of Type is something 
// whose contents have type Type”. Later on, when we 
// refer to Box, we have to give a type argument in place of Type.

let box_string: Box_<string> = {contents: 'a'};
let box_number: Box_<number> = {contents: 999};
let box_boolean: Box_<boolean> = {contents: true};
let box_array: Box_<number[]> = {contents: [1, 2, 3]};
let box_fruits: Box_<Fruit>;

// Think of Box as a template for a real type, where Type 
// is a placeholder that will get replaced with some other 
// type. When TypeScript sees Box<string>, it will replace 
// every instance of Type in Box<Type> with string, 
// and end up working with something like { contents: string }. 
// In other words, Box<string> and our earlier StringBox work identically.


// Type aliases can also be generic:

type Bag<Type> = {
    contents: Type;
}

function updateContent<Type>(box: Box_<Type>, new_contents: Type) {
    return box.contents = new_contents;
}



// Tuple types



// A tuple type is another sort of Array type that knows exactly
// how many elements it contains, and exactly which types it contains at specific positions.


type StringNumberPair = [string, number, number?];

// Here, StringNumberPair is a tuple type of string, number and number
// To the type system, StringNumberPair describes arrays whose 0 index
// contains a string and whose 1 index contains a number.

function _doSomething(pair: [string, number]) {
    const [inputString, hash] = pair;
    const a = pair[0];
    const b = pair[1];
    return pair.length;
}

console.log(_doSomething(['a', 2]));

// Tuples can also have rest elements, which have to be an array/tuple type.
type StringNumberBooleans = [string, number, ...boolean[]]; // two first elements are string and number, but may have any number of booleans following
type StringBooleanNumbers = [...boolean[], string, number];

// A tuple with a rest element has no set “length” - it 
// only has a set of well-known elements in different positions.

type Coords = [number, number];

function setCoordinate(coords: Coords) {
    const [x, y] = coords;
    return
}





// null e undefined



// JavaScript has two primitive values used to signal absent 
// or uninitialized value: null and undefined.
// TypeScript has two corresponding types by the same names. 
// How these types behave depends on whether you have the strictNullChecks option on.



let x: null = null
let y: undefined = undefined


// strictNullChecks off


// With strictNullChecks off, values that might be null or undefined
// can still be accessed normally, and the values null and undefined can
// be assigned to a property of any type. This is similar to how languages
// without null checks (e.g. C#, Java) behave. The lack of checking for these
// values tends to be a major source of bugs; we always recommend people turn 
// strictNullChecks on if it’s practical to do so in their codebase.


// strictNullChecks on


// With strictNullChecks on, when a value is null or undefined, 
// you will need to test for those values before using methods 
// or properties on that value. Just like checking for undefined 
// before using an optional property, we can use narrowing to check 
// for values that might be null:

function doSomething(x: string | null) {
    if (x === null) {
        // do nothing
    } else {
        console.log(`Hello, ${x.toUpperCase()}`);
    }
}


// Non-null Assertion Operator (Postfix !)

// TypeScript also has a special syntax for 
// removing null and undefined from a type without 
// doing any explicit checking. Writing ! after 
// any expression is effectively a type assertion 
// that the value isn’t null or undefined:

function liveDangerously(x?: number | null) {
    // no error
    console.log(x!.toFixed());
}

// Just like other type assertions, this doesn’t change 
// the runtime behavior of your code, so it’s important 
// to only use ! when you know that the value can’t be null or undefined.



// Type annotations on variables



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



// Type assertions



// Sometimes you will have information about the type of a value that TypeScript can’t know about.
// For example, if you’re using document.getElementById, 
// TypeScript only knows that this will return some kind of 
// HTMLElement, but you might know that your page will always 
// have an HTMLCanvasElement with a given ID.
// In this situation, you can use a type assertion to specify a more specific type:


const myCanvas  = document.getElementById('main_canvas') as HTMLCanvasElement;

const _myCanvas = <HTMLCanvasElement> document.getElementById('my_canvas');


// TypeScript only allows type assertions which convert to a more specific or
// less specific version of a type. This rule prevents “impossible” coercions like:
// const a = 'hello' as number;
