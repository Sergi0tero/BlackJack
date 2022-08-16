 //Create two default profiles
 
 var initialProfiles = [
    {
    name : 'Alberto',
    imgSrc : 'img/usr/user.png',
    money : 1000000
    },
    {
    name : 'Alberta',
    imgSrc : 'img/usr/user.png',
    money : 1000000
    }
]

//Createa a new profile using the data given
var Profile = function(data){
    this.name = data.name;
    this.money = data.money;
    this.imgSrc = data.imgSrc;
}

var ViewModel = function(){
    var cancelarButton = document.querySelector(".cancel");
    var crearButton = document.querySelector(".crear");
    var agregarDiv = document.querySelector(".buttonContainer");
    var agregarButton = agregarDiv.querySelector("button");
    var profilesDiv = document.querySelector("#profilesDiv");
    var resetearPerfilesButton = document.getElementById("reset");
    formElements = document.querySelector("#myForm");

    //Hide the profiles menu and display the new profile form
    agregarButton.addEventListener("click", function(){
        agregarButton.style.display = "none";
        resetearPerfilesButton.style.display = "none";
        profilesDiv.style.display = "none";
        formElements.style.display = "block";
    })

    resetearPerfilesButton.addEventListener("click", function(){
        localStorage.clear();
        location.reload();
    })

    //Creates a new profile based on the form inputs
    crearButton.addEventListener("click", function(){
        inputs = formElements.getElementsByTagName("input");
        //inputs[0] = name, inputs[1] = image URL
        if (!inputs[0].value == ""){
            // If the image's url input is empty, the default image will be set on the profile
            var image = inputs[1].value != "" ? inputs[1].value : 'img/usr/user.png';
            var data = {name: inputs[0].value, imgSrc : image, money: 1000000};

            newProfile = new Profile(data);
            initialProfiles.push(data);
            console.log(initialProfiles);
            localStorage.initialProfiles = JSON.stringify(initialProfiles);
        }
    })

    //Display the profiles menu and hide the form
    cancelarButton.addEventListener("click", function() {
        formElements.style.display = "none";
        profilesDiv.style.display = "flex";
        agregarButton.style.display = "inline-block";
        resetearPerfilesButton.style.display = "inline-block";
    });
}

var init = function(){
    //Set the new currency of the game
    const PKR = value => currency(value, { precision: 2, symbol: '♠' });
    this.profileList = ko.observableArray();

    //Creates the default profiles if there´s no profile in the localStorage
    if (!localStorage.initialProfiles){  
        initialProfiles.forEach(function(item){
            this.profileList.push(new Profile(item));
        });
        localStorage.initialProfiles = JSON.stringify(this.initialProfiles);
    } else{
        initialProfiles = JSON.parse(localStorage.initialProfiles)
    }

    //Rounds the quantity of money
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

    juego = function(clicked){
        //Cambiamos la pestaña y guardamos el perfil seleccionado
        window.location.href = "html/juego.html";
        localStorage.actualProfile = JSON.stringify(clicked);
    }

    new ViewModel();
}

ko.applyBindings(init());