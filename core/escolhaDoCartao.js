function escolhaDoCartao(numero, cvv, date) {

    var cartao = {
        numero:numero,
         cvv: cvv, 
         date: date
        }
    
    if (cartao.numero === '1111111111111111') {
        return '1111111111111111'
    } else {
        return '4111111111111234'
    }
}

module.exports = escolhaDoCartao;