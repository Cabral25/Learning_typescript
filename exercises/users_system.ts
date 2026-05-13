
let usuarios_: Usuario[] = [];


interface Usuario {
    id: number;
    nome: string;
    email: string;
    ativo: boolean;
}


interface UsuarioSanitized {
    id: number;
    nome: string;
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


function buscarUsuario_(id: number): UsuarioSanitized | 'Usuário não encontrado' {
    for (let users of usuarios_) {
        if (users.id === id) {
            return users;
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
    //
}