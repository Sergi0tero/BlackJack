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

var init = function () {
    localStorage.availableCards = JSON.stringify(availableCards);
    actualProfile = JSON.parse(localStorage.actualProfile);

    this.availableCardsKeys = Object.keys(availableCards);
    this.profileName = actualProfile.name;
    this.imgSrc = actualProfile.imgSrc;
    this.money = actualProfile.money;
    this.cardsInTable = ko.observableArray();

    const PKR = value => currency(value, { precision: 2, symbol: '♠' });

    changeToCurrency = function(){
        if(this.money > 999 && money < 1000000){
            return PKR(this.money/1000).format() + 'K'; // convert money into Thousands
        }else if(this.money >= 1000000){
            return PKR(this.money/1000000).format() + 'M'; // convert money into Millions
        }else if(this.money >= 1000000000){
            return PKR(this.money/1000000000).format() + 'B'; // convert money into Billions
        }else if(this.money >= 1000000000000){
            return PKR(this.money/1000000000000).format() + 'T'; // convert money into Trillions
        }
        return PKR(this.money).format();
    }

    prueba = function(){
        console.log(availableCardsKeys);
    }

    añadirCarta = function(){
        //Saca un tipo de carta al azar
        newCard = availableCardsKeys[Math.floor(Math.random()*availableCardsKeys.length)];
        //verifica que todavia queden cartas de ese tipo
        if (availableCards[newCard]["available"] == 1){
            availableCardsKeys.splice(availableCardsKeys.indexOf(newCard), 1);
        }
        availableCards[newCard]["available"] -= 1;
        //Saca una carta del tipo seleccionado al azar
        urlIndex = Math.floor(Math.random()*availableCards[newCard]["availableURL"].length);
        newCardUrl = availableCards[newCard]["availableURL"][urlIndex];
        availableCards[newCard]["availableURL"].splice(urlIndex, 1);
        this.cardsInTable.push({card : newCard, cardSrc : newCardUrl});
        console.log(cardsInTable);
    }
}

ko.applyBindings(init());