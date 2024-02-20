"use strict";
// Interfaces: usadas para describir un objeto
// La principal diferencia es que un alias de tipos no se puede volver a abrir para agregar nuevas propiedades, 
// mientras que una interfaz siempre es extensible.
let employee = {
    firstName: "Emil",
    lastName: "Andersson",
    fullName() {
        return this.firstName + " " + this.lastName;
    }
};
function tooManyScoops(dessert) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too many scoops!';
    }
    else {
        return 'Your order will be ready soon!';
    }
}
console.log(tooManyScoops({ flavor: 'vanilla', scoops: 5 }));
let myIceCream = {
    flavor: 'menta',
    sauce: 'caramel',
    scoops: 5
};
function tooManyScoops2(dessert) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too many scoops!';
    }
    else {
        return 'Your order will be ready soon!';
    }
}
console.log(tooManyScoops2({ flavor: 'vanilla', scoops: 5, sauce: 'caramel' }));
let myIceCream2;
myIceCream2 = ['chocolate', 'vanilla', 'strawberry'];
let myStr = myIceCream2[0];
console.log(myStr);
