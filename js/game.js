var init = function(){
    actualProfile = JSON.parse(localStorage.actualProfile);
    var profileName = actualProfile.name;
    var imgSrc = actualProfile.imgSrc;
    var money = actualProfile.money;
    prueba = function(){
        console.log("a");
    }
}

ko.applyBindings(init());