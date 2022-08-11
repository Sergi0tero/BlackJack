availableCards = {
    "A": { "value" : [1, 11], "available": 4, "availableURL": ["../img/cards/A_Corazon", "../img/cards/A_Diamante", "../img/cards/A_Picas", "../img/cards/A_Trebol"] },
    "2": { "value" : [2], "available": 4, "availableURL": ["../img/cards/2_Corazon", "../img/cards/2_Diamante", "../img/cards/2_Picas", "../img/cards/2_Trebol"] },
    "3": { "value" : [3], "available": 4, "availableURL": ["../img/cards/3_Corazon", "../img/cards/3_Diamante", "../img/cards/3_Picas", "../img/cards/3_Trebol"] },
    "4": { "value" : [4], "available": 4, "availableURL": ["../img/cards/4_Corazon", "../img/cards/4_Diamante", "../img/cards/4_Picas", "../img/cards/4_Trebol"] },
    "5": { "value" : [5], "available": 4, "availableURL": ["../img/cards/5_Corazon", "../img/cards/5_Diamante", "../img/cards/5_Picas", "../img/cards/5_Trebol"] },
    "6": { "value" : [6], "available": 4, "availableURL": ["../img/cards/6_Corazon", "../img/cards/6_Diamante", "../img/cards/6_Picas", "../img/cards/6_Trebol"] },
    "7": { "value" : [7], "available": 4, "availableURL": ["../img/cards/7_Corazon", "../img/cards/7_Diamante", "../img/cards/7_Picas", "../img/cards/7_Trebol"] },
    "8": { "value" : [8], "available": 4, "availableURL": ["../img/cards/8_Corazon", "../img/cards/8_Diamante", "../img/cards/8_Picas", "../img/cards/8_Trebol"] },
    "9": { "value" : [9], "available": 4, "availableURL": ["../img/cards/9_Corazon", "../img/cards/9_Diamante", "../img/cards/9_Picas", "../img/cards/9_Trebol"] },
    "10":{ "value" : [10], "available": 4, "availableURL": ["../img/cards/10_Corazon", "../img/cards/10_Diamante", "../img/cards/10_Picas", "../img/cards/10_Trebol"] },
    "J": { "value" : [10], "available": 4, "availableURL": ["../img/cards/J_Corazon", "../img/cards/J_Diamante", "../img/cards/J_Picas", "../img/cards/J_Trebol"] },
    "Q": { "value" : [10], "available": 4, "availableURL": ["../img/cards/Q_Corazon", "../img/cards/Q_Diamante", "../img/cards/Q_Picas", "../img/cards/Q_Trebol"] },
    "K": { "value" : [10], "available": 4, "availableURL": ["../img/cards/K_Corazon", "../img/cards/K_Diamante", "../img/cards/K_Picas", "../img/cards/K_Trebol"] },
}

var init = function () {
    localStorage.availableCards = JSON.stringify(availableCards);
    actualProfile = JSON.parse(localStorage.actualProfile);

    this.availableCardsKeys = Object.keys(availableCards);
    this.profileName = actualProfile.name;
    this.imgSrc = actualProfile.imgSrc;
    this.money = actualProfile.money;
    this.cardsInTable = ko.observableArray();

    prueba = function(){
        console.log(availableCardsKeys);
    }

    añadirCarta = function(){
        newCard = availableCardsKeys[Math.floor(Math.random()*availableCardsKeys.length)];
        console.log( "carta" + newCard + availableCards[newCard]["available"]);
        if (availableCards[newCard]["available"] == 1){
            console.log("antes" + availableCardsKeys);
            availableCardsKeys.splice(availableCardsKeys.indexOf(newCard), 1);
            console.log("despues" + availableCardsKeys);
        }
        availableCards[newCard]["available"] -= 1;
    }
}

ko.applyBindings(init());