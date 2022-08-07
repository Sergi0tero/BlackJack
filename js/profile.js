 
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
    openForm = function() {
        console.log("llego");
        document.getElementById("myForm").style.display = "block";
    }
      
    closeForm = function() {
        console.log("salio");
        document.getElementById("myForm").style.display = "none";
    }
}


ko.applyBindings(ViewModel());