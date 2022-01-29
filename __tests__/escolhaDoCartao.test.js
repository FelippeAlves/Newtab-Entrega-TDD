const cartao = require('../core/escolhaDoCartao.js')

var cards = [
    // cartão válido
    {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
    },
    // cartão inválido
    {
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20',
    },
];

describe('Testando Escolha do cartão', () => {
    it('Testando cartão válido', () => {
        expect(cartao(cards[0].card_number)).toBe('1111111111111111')
    });
    it('Testando cartão inválido', () => {
        expect(cartao(cards[1].card_number)).toEqual('4111111111111234')
    }); 
});