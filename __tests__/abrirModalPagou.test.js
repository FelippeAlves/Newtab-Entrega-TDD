const abrirModalPagou = require('../core/abrirModalPagou.js');

describe('Testando abrirModalPagou', () => {
    it('Testando valorDinheiro válido e valorCartao válido', () => {
        let valorCartao = '1';
        let valorDinheiro = '1200';

        expect(abrirModalPagou(valorDinheiro, valorCartao)).toEqual(true)
    });
    it('Testando valorDinheiro inválido e valorCartao inválido', () => {
        let valorCartao = '2'
        let valorDinheiro = '';

        expect(abrirModalPagou(valorDinheiro, valorCartao)).toEqual(false)
    });
    it('Testando valorDinheiro inválido e valorCartao válido', () => {
        let valorCartao = '1';
        let valorDinheiro = '';

        expect(abrirModalPagou(valorDinheiro, valorCartao)).toEqual(false)
    });
    it('Testando valorDinheiro válido e valorCartao inválido', () => {
        let valorCartao = '2';
        let valorDinheiro = '1200';

        expect(abrirModalPagou(valorDinheiro, valorCartao)).toEqual(false)
    });
});