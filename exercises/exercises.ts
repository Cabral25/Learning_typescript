
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


type Tipos = [string, string, number?];


function formatarId(id: string | number) {
    console.log(`ID: ${id}`);
}

formatarId(5);


interface _Produto {
    nome: string;
    preco: number;
    estoque: number;
}


interface _Usuario {
    nome: string;
    ativo: boolean;
}

function getActiveUsers(user: _Usuario) {
    if (user.ativo) {
        return user;
    }
    return false;
}

console.log(getActiveUsers({nome: 'otto', ativo: true}));
let _user = getActiveUsers({nome: 'júlia', ativo: false});
console.log(_user);


function funcaoGenerica<Type>(array: Type[]) {
    return array[0];
}

console.log(funcaoGenerica([1, 8, 5])); // 1
console.log(funcaoGenerica(['a', 'b', 'c'])); // a
console.log(funcaoGenerica([true, false, true])); // true


interface Empregado {
    nome: string;
    telefone?: number;
}

let usuarios = {
    user1: {id: 0, nome: 'otto', 'idade': 25},
    user2: {id: 1, nome: 'sara', 'idade': 35}
}


// PS: preciso aprender a iterar sobre objetos



async function buscarUsuario(usuario: _Usuario) {
    let user = await usuario;
    return user;
}

type _Status = {
    status: 'ativo' | 'inativo' | 'pendente';
}


interface Pedido {
    id: number;
    produto: string;
    valor: number;
    pago: boolean;
}

let pedidos = [
    {id: 0, produto: 'tv', valor: 999, pago: true},
    {id: 1, produto: 'computer', valor: 9999, pago: false},
    {id: 2, produto: 'wardrobe', valor: 299, pago: false}
]

function returnPaidOrders(orders: Pedido[]) {
    let pedidosPagos = [];
    for (let order of orders) {
        if (order.pago) {
            pedidosPagos.push(order);
        }
    }
    return pedidosPagos;
}

let result = returnPaidOrders(pedidos);
console.log(result);