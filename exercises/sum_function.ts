
function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(5, 5));


let arrayTipado: number[] = [];

arrayTipado.push(1, 2, 3, 4);

console.log(arrayTipado);
console.log(typeof arrayTipado); // object


let usuario: {nome: string, idade: number}; // object type (objeto tipado)


let _id: number | string;


function mostrarMensagem(mensagem: string) {
    console.log(mensagem);
}


type Produto = {
    nome: string;
    preco: number;
    disponivel: boolean;
}

let produto: Produto;

function getProduct(product: Produto) {
    console.log(`O produto '${product.nome}' custa ${product.preco}`);
}

getProduct({nome: 'celular', preco: 999, disponivel: true});


interface Pessoa {
    nome: string;
    idade: number;
}

let pessoa: Pessoa;


type TuplePessoa = [string, number];


function identidade<Type>(nome: Type, pertences: Type[]) {
    console.log(`Olá, ${nome}, seus pertences são: ${pertences}`);
}

identidade('célia', ['carro', 'celular', 0, true]);