function abrirModalPagar(name) {
    let pegarUsuario = name;
    if (pegarUsuario){
        return pegarUsuario;
    } else {
        return false;
    }
}

module.exports = abrirModalPagar;