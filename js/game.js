values = {
    A: [1, 11],
    2: [2],
    3: [3],
    4: [4],
    5: [5],
    6: [6],
    7: [7],
    8: [8],
    9: [9],
    10: [10],
    J: [10],
    Q: [10],
    K: [10]
}
availableCards = {
    A: { available: 4, availableURL: ["../img/cards/A_Corazon", "../img/cards/A_Diamante", "../img/cards/A_Picas", "../img/cards/A_Trebol"] },
    2: { available: 4, availableURL: ["../img/cards/2_Corazon", "../img/cards/2_Diamante", "../img/cards/2_Picas", "../img/cards/2_Trebol"] },
    3: { available: 4, availableURL: ["../img/cards/3_Corazon", "../img/cards/3_Diamante", "../img/cards/3_Picas", "../img/cards/3_Trebol"] },
    4: { available: 4, availableURL: ["../img/cards/4_Corazon", "../img/cards/4_Diamante", "../img/cards/4_Picas", "../img/cards/4_Trebol"] },
    5: { available: 4, availableURL: ["../img/cards/5_Corazon", "../img/cards/5_Diamante", "../img/cards/5_Picas", "../img/cards/5_Trebol"] },
    6: { available: 4, availableURL: ["../img/cards/6_Corazon", "../img/cards/6_Diamante", "../img/cards/6_Picas", "../img/cards/6_Trebol"] },
    7: { available: 4, availableURL: ["../img/cards/7_Corazon", "../img/cards/7_Diamante", "../img/cards/7_Picas", "../img/cards/7_Trebol"] },
    8: { available: 4, availableURL: ["../img/cards/8_Corazon", "../img/cards/8_Diamante", "../img/cards/8_Picas", "../img/cards/8_Trebol"] },
    9: { available: 4, availableURL: ["../img/cards/9_Corazon", "../img/cards/9_Diamante", "../img/cards/9_Picas", "../img/cards/9_Trebol"] },
    1: { available: 4, availableURL: ["../img/cards/10_Corazon", "../img/cards/10_Diamante", "../img/cards/10_Picas", "../img/cards/10_Trebol"] },
    J: { available: 4, availableURL: ["../img/cards/J_Corazon", "../img/cards/J_Diamante", "../img/cards/J_Picas", "../img/cards/J_Trebol"] },
    Q: { available: 4, availableURL: ["../img/cards/Q_Corazon", "../img/cards/Q_Diamante", "../img/cards/Q_Picas", "../img/cards/Q_Trebol"] },
    K: { available: 4, availableURL: ["../img/cards/K_Corazon", "../img/cards/K_Diamante", "../img/cards/K_Picas", "../img/cards/K_Trebol"] },
}

var init = function () {
    this.availableCardsKeys = Object.keys(availableCards);
    localStorage.availableCards = JSON.stringify(availableCards);
    actualProfile = JSON.parse(localStorage.actualProfile);
    this.profileName = actualProfile.name;
    this.imgSrc = actualProfile.imgSrc;
    this.money = actualProfile.money;
    prueba = function(){
        console.log(values);
    }
}

ko.applyBindings(init());