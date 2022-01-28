function valorInput(event) {

    var valorDinheiro = event; 
    
    if (valorDinheiro.length <= 2) {
        valorDinheiro = "0." + ("00" + valorDinheiro).slice(-2)
        return valorDinheiro;
    } else {
        valorDinheiro = (valorDinheiro).slice(0, -2) + '.' + (valorDinheiro).slice(-2)
        return valorDinheiro;
    }

}

module.exports = valorInput;