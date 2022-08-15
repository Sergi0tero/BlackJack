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

var game = function () {

    localStorage.availableCards = JSON.stringify(availableCards);
    actualProfile = JSON.parse(localStorage.actualProfile);

    this.availableCardsKeys = Object.keys(availableCards);
    this.profileName = actualProfile.name;
    this.imgSrc = actualProfile.imgSrc;
    
    this.playerCards = ko.observableArray();
    this.dealerCards = ko.observableArray();
    this.observableMoney = ko.observable(actualProfile.money);
    this.betInTable = ko.observable(0);

    const PKR = value => currency(value, { precision: 2, symbol: '♠' });

    changeToCurrency = function(){
        if(observableMoney() > 999 && money < 1000000){
            return PKR(observableMoney()/1000).format() + 'K'; // convert money into Thousands
        }else if(observableMoney() >= 1000000){
            return PKR(observableMoney()/1000000).format() + 'M'; // convert money into Millions
        }else if(observableMoney() >= 1000000000){
            return PKR(observableMoney()/1000000000).format() + 'B'; // convert money into Billions
        }else if(observableMoney() >= 1000000000000){
            return PKR(observableMoney()/1000000000000).format() + 'T'; // convert money into Trillions
        }
        return PKR(observableMoney()).format();
    }

    //Botones de apuestas
    betTen = function(){
        var moneyAmount = getMoneyAmount(10);
        if ((this.observableMoney() - moneyAmount) >= 0){
            document.querySelector(".iniciar").style.display = "inline-block";
            document.querySelector(".cancelar").style.display = "inline-block";
            this.betInTable(this.betInTable() + moneyAmount);
            this.observableMoney(this.observableMoney() - moneyAmount);
            console.log(this.betInTable());
        }
    }
    betFifty = function(){
        var moneyAmount = getMoneyAmount(50);
        if ((this.observableMoney() - moneyAmount) >= 0){
            document.querySelector(".iniciar").style.display = "inline-block";
            document.querySelector(".cancelar").style.display = "inline-block";
            this.betInTable(this.betInTable() + moneyAmount);
            this.observableMoney(this.observableMoney() - moneyAmount);
            console.log(this.betInTable());
        }
    }
    betHundred = function(){
        var moneyAmount = getMoneyAmount(100);
        if ((this.observableMoney() - moneyAmount) >= 0){
            document.querySelector(".iniciar").style.display = "inline-block";
            document.querySelector(".cancelar").style.display = "inline-block";
            this.betInTable(this.betInTable() + moneyAmount);
            this.observableMoney(this.observableMoney() - moneyAmount);
            console.log(this.betInTable());
        }
    }
    betAllIn = function(){
        if (this.observableMoney() > 0){
            document.querySelector(".iniciar").style.display = "inline-block";
            document.querySelector(".cancelar").style.display = "inline-block";
            this.betInTable(this.betInTable() + this.observableMoney());
            this.observableMoney(this.observableMoney() - this.observableMoney());
            console.log(this.betInTable());
        }
    }

    //Controles del juego
    confirmarApuesta = function(){
        document.querySelector(".pedir").style.display = "inline-block";
        document.querySelector(".terminar").style.display = "inline-block";
        document.querySelector(".iniciar").style.display = "none";
        document.querySelector(".cancelar").style.display = "none";
        console.log("confirma");
    }
    cancelarApuesta = function(){
        this.observableMoney(this.actualProfile.money);
        this.betInTable(0);
        document.querySelector(".iniciar").style.display = "none";
        document.querySelector(".cancelar").style.display = "none";
        console.log("cancela");
    }
    pedirCarta = function(){
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
        this.playerCards.push({card : newCard, cardSrc : newCardUrl});
        //console.log(playerCards());
    }
    terminarJuego = function(){
        console.log("termina");
    }

    //Gana o pierde el usuario

    win = function(){
        this.observableMoney(observableMoney() + (betInTable() * 2));
        this.actualProfile.money = observableMoney();
        localStorage.actualProfile = JSON.parse(this.actualProfile);
    }

    lose = function(){
        this.observableMoney(observableMoney() - betInTable());
        this.actualProfile.money = observableMoney();
        localStorage.actualProfile = JSON.parse(this.actualProfile);
    }

    getBet = function(){
        return PKR(betInTable()).format();
    }

    //Devuelve la cantidad de la apuesta dependiendo cuanto dinero tiene el usuario
    getMoneyAmount = function(bet){
        if(this.observableMoney() <= 100){
            return bet / 10;
        } else if(this.observableMoney() <= 1000){
            return bet;
        }else if( this.observableMoney() <= 10000){
            return bet * 10;
        }else if( this.observableMoney() <= 100000){
            return bet * 100;
        }else if( this.observableMoney() <= 1000000){
            return bet * 1000;
        }else if( this.observableMoney() <= 10000000){
            return bet * 10000;
        }else if( this.observableMoney() <= 100000000){
            return bet * 100000;
        }else if( this.observableMoney() <= 1000000000){
            return bet * 1000000;
        }else if( this.observableMoney() <= 10000000000){
            return bet * 10000000;
        }else if( this.observableMoney() <= 100000000000){
            return bet * 100000000;
        }else if( this.observableMoney() <= 1000000000000){
            return bet * 1000000000;
        }
    }
}

ko.applyBindings(game());