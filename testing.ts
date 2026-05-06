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