 var initialProfiles = [
    {
    name : 'Alberto',
    imgSrc : '../img/usr/user.png',
    money : 1000000
    },
    {
    name : 'Alberta',
    imgSrc : '../img/usr/user.png',
    money : 120200
    }
]

function Profile(data){
    this.name = data.name;
    this.money = data.money;
    this.imgSrc = data.imgSrc;
}

function ViewModel(){
    var cancelarButton = document.querySelector(".cancel");
    var crearButton = document.querySelector(".crear");
    var agregarDiv = document.querySelector(".buttonContainer");
    var agregarButton = agregarDiv.querySelector("button");
    var profilesDiv = document.querySelector("#profilesDiv");
    formElements = document.querySelector("#myForm");

    agregarButton.addEventListener("click", function(){
        agregarButton.style.display = "none";
        profilesDiv.style.display = "none";
        formElements.style.display = "block";
    })

    crearButton.addEventListener("click", function(){
        inputs = formElements.getElementsByTagName("input");
        
        var image = inputs[1].value != "" ? inputs[1].value : '../img/usr/user.png';
        var data = {name: inputs[0].value, imgSrc : image, money: 1000000};

        newProfile = new Profile(data);
        initialProfiles.push(data);
        localStorage.initialProfiles = JSON.stringify(initialProfiles);
    })

    cancelarButton.addEventListener("click", function() {
        formElements.style.display = "none";
        profilesDiv.style.display = "flex";
        agregarButton.style.display = "inline-block";
    });
}

function init(){
    const PKR = value => currency(value, { precision: 2, symbol: '♠' });
    this.profileList = ko.observableArray();

    if (!localStorage.initialProfiles){  
        initialProfiles.forEach(function(item){
            this.profileList.push(new Profile(item));
        });
        localStorage.initialProfiles = JSON.stringify(this.initialProfiles);
    } else{
        initialProfiles = JSON.parse(localStorage.initialProfiles)
    }

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
    new ViewModel();
}


ko.applyBindings(init());