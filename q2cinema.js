function cinema (totalSeats,location){
    this.numofseats = totalSeats;
    this.location = location;
    this.reservedSeats = [];

//     this.calcPrice = function(seatnumber){
//         console.log("price",seatnumber);
//         var price;
//         if (seatnumber.charAt(0)== "a"){price=10}
//         else if (seatnumber.charAt(0)=="b"){price=15}
// // charAt(0) returns the first charecter of the string
// // if it is charat (1)then it will retrive the second charecter so on and so forth
// // because there are 2 price with condition the variable was not predeclared
//         return price;
//     }
//     this.findTheatre = function(seatnumber){
//         var theatre;
//         if (seatnumber.charAt(0) == "a"){theatre="Punggol"}
//         else if (seatnumber.charAt(0)=="b"){theatre="Orchard"}
//         return theatre;
//     }

    this.calcSeatPrice = function(numofseatsbooked){
        var seatPrice = 10;
        if (this.location == "Orchard"){
            seatPrice = 15;
            return numofseatsbooked * seatPrice;
        }
        else{
            return numofseatsbooked *seatPrice;
        }
    }
    this.bookSeats = function(name){
        if (this.reservedSeats.length < this.numofseats){
            this.reservedSeats.push(name);
        }else{
            console.log(this.location+"FULL");
        }
    }
}