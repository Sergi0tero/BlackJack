class model{

    changeToCurrency = function(money, PKR){
        if(money >= 1000000000000){
            return PKR(money/1000000000000).format() + 'T'; // convert money into Trillions
        }else if(money >= 1000000000){
            return PKR(money/1000000000).format() + 'B'; // convert money into Billions
        }else if(money >= 1000000){
            return PKR(money/1000000).format() + 'M'; // convert money into Millions
        } else if(money > 999 && money < 1000000){
            return PKR(money/1000).format() + 'K'; // convert money into Thousands
        }
        return PKR(money).format();
    }

    pointsQuantity = function(points, availableCards, newCard){
        if (newCard == "A" && points.length == 1){
            points[1] = points[0] + availableCards[newCard]["value"][1];
            points[0] = points[0] + availableCards[newCard]["value"][0];
        } else if (points.length > 1){
            points[1] += availableCards[newCard]["value"][0];
            points[0] += availableCards[newCard]["value"][0];
        } else {
            points[0] = points[0] + availableCards[newCard]["value"][0];
        }
        return points;
    }
}