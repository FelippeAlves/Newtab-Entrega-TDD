const abrirModalPagar = require('../core/abrirModalPagar.js')

describe('Testando envio do nome ao modal', () => {
    it('Encaminhando um nome válido', () => {
        expect(abrirModalPagar('Felippe')).toEqual('Felippe')
    });
    it('Encaminhando um nome inválido', () => {
        expect(abrirModalPagar('')).toEqual(false)
    });
});