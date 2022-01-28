
const valorInput = require('../core/valorInput')


describe('Testando valorInput', () => {
    it('Valor deve ser igual', () => {
        expect(valorInput('89')).toEqual('0.89');
    });
    it('Valor deve ser igual', () => {
        expect(valorInput('1000')).toEqual('10.00');
    });
});