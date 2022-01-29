function abrirModalPagou(valorDinheiro, valorCartao) {
    if (valorDinheiro === "") {
        return false;
    } else 
        {
        if (valorCartao === "1") {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = abrirModalPagou;