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