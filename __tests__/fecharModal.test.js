
const fecharModal = require('../core/fecharModal.js')


describe('Testando fecharModal', () => {
    it('String deve ser igual', () => {
        expect(fecharModal()).toEqual('none');
    });
    
});