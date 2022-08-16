class model{

    changeToCurrency = function(money, PKR){
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
}