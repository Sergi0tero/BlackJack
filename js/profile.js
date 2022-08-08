 
 var initialProfiles = [
    {
    money : 1000000,
    name : 'Alberto',
    imgSrc : '../img/usr/user.png'
    },
    {
    money : 120200,
    name : 'Alberta',
    imgSrc : '../img/usr/user.png'
    }
]

var Profile = function(data){
    this.name = data.name;
    this.money = data.money;
    this.imgSrc = data.imgSrc;
    if (!localStorage.initialProfiles){
        localStorage.initialProfiles = JSON.stringify(initialProfiles);
    } else{
        initialProfiles = JSON.parse(localStorage.initialProfiles)
    }

}

var ViewModel = function(){
    const PKR = value => currency(value, { precision: 2, symbol: '♠' });
    this.profileList = ko.observableArray();
    initialProfiles.forEach(function(item){
        this.profileList.push(new Profile(item))
    });
    changeToCurrency = function(money){
        if(money > 999 && money < 1000000){
            return PKR(money/1000).format() + 'K'; // convert money into Thousands
        }else if(money >= 1000000){
            return PKR(money/1000000).format() + 'M'; // convert money into Millions
        }else if(money >= 1000000000){
            return PKR(money/1000000000).format() + 'B'; // convert money into Billions
        }else if(money >= 1000000000000){
            return PKR(money/1000000000000).format() + 'T'; // convert money into Trillions
        }
        return PKR(money).format();
    }
    var agregarCancelar = document.querySelector("#acceptCancel");
    var agregarDiv = document.querySelector(".buttonContainer");
    var agregarButton = agregarDiv.querySelector("button");
    var profilesDiv = document.querySelector("#profilesDiv");

    agregarButton.addEventListener("click", function(){
        agregarButton.style.display = "none";
        profilesDiv.style.display = "none";
        document.querySelector(".form-container").style.display = "block";
    })

    
    agregarCancelar.addEventListener("click", function() {
        document.querySelector(".form-container").style.display = "none";
        profilesDiv.style.display = "flex";
        agregarButton.style.display = "inline-block";
    });
}


ko.applyBindings(ViewModel());