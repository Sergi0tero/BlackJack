
model = new model();
describe('Currency', function(){
    beforeEach(function(){
        PKR = value => currency(value, { precision: 2, symbol: '♠' });
    });

    it('Deberia Cambiar a Miles', function(){
        var money = model.changeToCurrency(1000, PKR);
        expect(money).toBe("♠1.00K");
    });

    it('Deberia Cambiar a Millones', function(){
        var money = model.changeToCurrency(1000000, PKR);
        expect(money).toBe("♠1.00M");
    });

    it('Deberia Cambiar a Billones', function(){
        var money = model.changeToCurrency(1000000000, PKR);
        expect(money).toBe("♠1.00B");
    });

    it('Deberia Cambiar a Trillones', function(){
        var money = model.changeToCurrency(1000000000000, PKR);
        expect(money).toBe("♠1.00T");
    });

});
describe('Cards', function(){
    beforeEach(function(){
        availableCards = {
            "A": { "value" : [1, 11], "available": 4, "availableURL": ["../img/cards/png/A_Corazon.png", "../img/cards/png/A_Diamante.png", "../img/cards/png/A_Picas.png", "../img/cards/png/A_Trebol.png"] },
            "2": { "value" : [2], "available": 4, "availableURL": ["../img/cards/png/2_Corazon.png", "../img/cards/png/2_Diamante.png", "../img/cards/png/2_Picas.png", "../img/cards/png/2_Trebol.png"] },
            "3": { "value" : [3], "available": 4, "availableURL": ["../img/cards/png/3_Corazon.png", "../img/cards/png/3_Diamante.png", "../img/cards/png/3_Picas.png", "../img/cards/png/3_Trebol.png"] },
            "4": { "value" : [4], "available": 4, "availableURL": ["../img/cards/png/4_Corazon.png", "../img/cards/png/4_Diamante.png", "../img/cards/png/4_Picas.png", "../img/cards/png/4_Trebol.png"] },
            "5": { "value" : [5], "available": 4, "availableURL": ["../img/cards/png/5_Corazon.png", "../img/cards/png/5_Diamante.png", "../img/cards/png/5_Picas.png", "../img/cards/png/5_Trebol.png"] },
            "6": { "value" : [6], "available": 4, "availableURL": ["../img/cards/png/6_Corazon.png", "../img/cards/png/6_Diamante.png", "../img/cards/png/6_Picas.png", "../img/cards/png/6_Trebol.png"] },
            "7": { "value" : [7], "available": 4, "availableURL": ["../img/cards/png/7_Corazon.png", "../img/cards/png/7_Diamante.png", "../img/cards/png/7_Picas.png", "../img/cards/png/7_Trebol.png"] },
            "8": { "value" : [8], "available": 4, "availableURL": ["../img/cards/png/8_Corazon.png", "../img/cards/png/8_Diamante.png", "../img/cards/png/8_Picas.png", "../img/cards/png/8_Trebol.png"] },
            "9": { "value" : [9], "available": 4, "availableURL": ["../img/cards/png/9_Corazon.png", "../img/cards/png/9_Diamante.png", "../img/cards/png/9_Picas.png", "../img/cards/png/9_Trebol.png"] },
            "10":{ "value" : [10], "available": 4, "availableURL": ["../img/cards/png/10_Corazon.png", "../img/cards/png/10_Diamante.png", "../img/cards/png/10_Picas.png", "../img/cards/png/10_Trebol.png"] },
            "J": { "value" : [10], "available": 4, "availableURL": ["../img/cards/png/J_Corazon.png", "../img/cards/png/J_Diamante.png", "../img/cards/png/J_Picas.png", "../img/cards/png/J_Trebol.png"] },
            "Q": { "value" : [10], "available": 4, "availableURL": ["../img/cards/png/Q_Corazon.png", "../img/cards/png/Q_Diamante.png", "../img/cards/png/Q_Picas.png", "../img/cards/png/Q_Trebol.png"] },
            "K": { "value" : [10], "available": 4, "availableURL": ["../img/cards/png/K_Corazon.png", "../img/cards/png/K_Diamante.png", "../img/cards/png/K_Picas.png", "../img/cards/png/K_Trebol.png"] },
        }
        availableCardsKeys = Object.keys(availableCards);
    }); 

    it('Deberia sumar puntos', function(){
        newCard = availableCardsKeys[Math.floor(Math.random()*availableCardsKeys.length)];
        var points = model.pointsQuantity([0], availableCards, newCard);
        expect(points[0] > 0).toBe(true);
    });
    it('Deberia sumar un As', function(){
        newCard = "A";
        var points = model.pointsQuantity([0], availableCards, newCard);
        expect(points[0] == 1 && points[1] == 11).toBe(true);
    });
})