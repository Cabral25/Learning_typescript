
let usuarios_: Usuario[] = [];


interface Usuario {
    id: number;
    nome: string;
    email: string;
    ativo: boolean;
}


function adicionarUsuario(usuario: Usuario) {
    for (let users of usuarios_) {
        if (users.email === usuario.email) {
            return 'Este e-mail já está sendo usado';
        }
    }
    usuarios_.push(usuario)
    return 'Usuário criado com sucesso!';
}


function listarUsuarios() {
    for (let users of usuarios_) {
        console.log(users.nome);
    }
}


function buscarUsuario_(id: number) {
    for (let user of usuarios_) {
        if (user.id === id) {
            return user;
        }
    }
    return 'Usuário não encontrado';
}


function removerUsuario(id: number) {
    const index = usuarios_.findIndex(user => user.id == id);
    if (index === -1) {
        return 'Usuário não encontrado';
    }
    usuarios_.splice(index, 1);
    return 'User deleted successfully!';
}


function listarUsuariosAtivos() {
    console.log('Usuários ativos: ')
    for (let user of usuarios_) {
        if (user.ativo) {
            console.log(user.nome);
        }
    }
}


let user0 = {id: 0, nome: 'nome', email: 'ouiui@gmail.com', ativo: true};
let user1 = {id: 1, nome: 'ouiu', email: 'gfgf@gmail.com', ativo: false};
let user2 = {id: 2, nome: 'aerd', email: 'hghyrtr', ativo: true};
let user3 = {id: 3, nome: 'bbvccz', email: 'hghghgh', ativo: false};
let user4 = {id: 4, nome: 'oiouttwq', email: 'gfgf@gmail.com', ativo: true};


let res1 = adicionarUsuario(user0);
console.log(res1); // Usuário criado com sucesso!

let res2 = adicionarUsuario(user1);
console.log(res2); // Usuário criado com sucesso!

let res3 = adicionarUsuario(user2);
console.log(res3); // Usuário criado com sucesso!

let res4 = adicionarUsuario(user4);
console.log(res4); // Este e-mail já está sendo usado

let res5 = adicionarUsuario(user3);
console.log(res5);

listarUsuariosAtivos();

let findUser = buscarUsuario_(0);
console.log(findUser); // { id: 0, nome: 'nome', email: 'ouiui@gmail.com', ativo: true }

let findUserNotFound = buscarUsuario_(6);
console.log(findUserNotFound); // Usuário não encontrado

let deleteUser = removerUsuario(3);
console.log(deleteUser); // User deleted successfully!

let deleteUserNotFound = removerUsuario(7);
console.log(deleteUserNotFound); // Usuário não encontrado

listarUsuarios();

console.log(usuarios_);