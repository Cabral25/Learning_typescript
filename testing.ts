function odd_even(number: number): string {
    if (number % 2 == 0) {
        return 'even'
    }
    return 'odd'
}

let test = odd_even(92)
console.log(test)

const list = [1, 2, 3];
console.log(typeof list); // object

const array: Array<number> = [2, 7, 9]

const names = ['ana', 'sara', 'lia']

names.forEach((name) => {
    console.log(name.toUpperCase());
});

for (let name of names) {
    console.log(name.toUpperCase());
}

for (let i=0; i < names.length; i++) {
    console.log(names[i].toUpperCase());
}

function printId_(id: number | string = 0) {
    console.log(id)
}

printId_(0)


type Point = {
    x: number;
    y: number;
}

// Usando type aliases
function printCoord(pt: Point) {
    console.log('The coordinate x value is ' + pt.x);
}

printCoord({x: 100, y: 100});


type Info = [
    isLogged: boolean,
    age: number
]

function getInfo(info: Info) {
    console.log()
}

const z = 'z' as string


let users = {user1: {'nome': 'otto', 'idade': 25}, user2: {nome: 'sara', idade: 23}};

let newUsers = {
    user1: {nome: 'otto', idade: 55, pertences: ['celular', 'boné', 'caneta']},
    user2: {nome: 'sara', idade: 22, pertences: ['chiclete', 'brincos', 'lixa']}
}

console.log(users.user1.nome);
for (let pertences of newUsers.user2.pertences) {
    console.log(pertences); // chiclete brincos lixa
}

console.log(newUsers.user1.pertences); // [ 'celular', 'boné', 'caneta' ]


let pedidos_ = [
    {id: 0, produto: 'tv', valor: 999, pago: true},
    {id: 1, produto: 'computer', valor: 9999, pago: false},
    {id: 2, produto: 'wardrobe', valor: 299, pago: false}
]

for (let i = 0; i < pedidos_.length; i++) {
    console.log(pedidos_[i].pago);
}

const objeto = {
    nome: 'any', 
    idade: 9
}

// iterando sobre as chaves
for (let chave in objeto) {
    console.log(chave); // nome idade
}

// iterando sobre os valores
for (let chave of Object.values(objeto)) {
    console.log(chave); // any 9
}


let arrayObjects = [
    {id: 0, nome: 'hvhv', email: 'jhjh', ativo: true},
    {id: 1, nome: 'hjghff', email: 'awae', ativo: true},
    {id: 2, nome: 'nbmn,', email: '@gmail.com', ativo: true}
]


console.log(arrayObjects);

function removeUser(id: number) {
    const index = arrayObjects.findIndex(user => user.id === id);
    if (index === -1) {
        return 'User not found';
    }

    arrayObjects.splice(index, 1);
    return 'User deleted successfully!';
}


let res = removeUser(0);

console.log(res);
console.log(arrayObjects);

// filter
let arrayNumbers = [9, 6, 3, 2, 4, 8];

let evenNumbers = arrayNumbers.filter(num => num % 2 == 0);
console.log(evenNumbers); // [ 6, 2, 4, 8 ]

function returnOddNumbers(n: number) {
    return n % 2 !== 0;
}

let oddNumbers = arrayNumbers.filter(returnOddNumbers);
console.log(oddNumbers); // [ 9, 3 ]


// reduce
let lista = [9, 0, 7, 5, 3];

let resultReduce = lista.reduce((previous, current) => previous + current);
console.log(resultReduce); // 24

function somaArray(acumulador: number, elemento: number): number {
    return acumulador + elemento;
}

let resReduce = lista.reduce(somaArray);
console.log(resReduce); // 24

