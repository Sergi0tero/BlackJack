describe('juego', function(){
    beforeEach(function(){
        model = new model();
        PKR = value => currency(value, { precision: 2, symbol: '♠' });
    });
    it('Deberia pasarse', function(){
        var money = model.changeToCurrency(1000000, PKR)
        expect(money).toBe("♠1.00M");
    });
})