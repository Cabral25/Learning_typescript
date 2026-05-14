
let products: Product[] = [];

interface Product {
    id: number;
    nome: string;
    preco: number;
    estoque: number;
}


function adicionarProduto(produto: Product) {
    products.push(produto);
    return 'Produto criado com sucesso!';
}


function atualizarEstoqueProduto(id: number, valor: number): 'Estoque atualizado com sucesso!' | 'Produto não encontrado' {
    for (let product of products) {
        if (product.id === id) {
            product.estoque += valor;
            return 'Estoque atualizado com sucesso!';
        }
    }
    return 'Produto não encontrado';
}


function removerProduto(id: number) {
    const index = products.findIndex(product => product.id == id);
    if (index === -1) {
        return 'Produto não encontrado';
    }
    products.splice(index, 1);
    return 'Produto removido com sucesso!';
}


function calcularEstoque() {
    //
}