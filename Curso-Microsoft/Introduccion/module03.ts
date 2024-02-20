// Interfaces: usadas para describir un objeto
// La principal diferencia es que un alias de tipos no se puede volver a abrir para agregar nuevas propiedades, 
// mientras que una interfaz siempre es extensible.

interface Employee2 {
    firstName: string;
    lastName: string;
    fullName(): string;
}


let employee: Employee2 = {
    firstName : "Emil",
    lastName: "Andersson",
    fullName(): string {
        return this.firstName + " " + this.lastName;
    }
}

// employee.firstName = 10;  //* Error - Type 'number' is not assignable to type 'string'








// Ejercicio 1
interface IceCream {
    flavor: string;
    scoops: number;
    instructions?: string;
}



function tooManyScoops(dessert: IceCream) {
    if (dessert.scoops >= 4) {
       return dessert.scoops + ' is too many scoops!';
    } else {
       return 'Your order will be ready soon!';
    }
 }
 
console.log(tooManyScoops({flavor: 'vanilla', scoops: 5}));




// Ejercicio 2
interface Sundae extends IceCream {
    sauce: 'chocolate' | 'caramel' | 'strawberry';
    nuts?: boolean;
    whippedCream?: boolean;
    instructions?: string;
}

let myIceCream: Sundae = {
    flavor: 'menta',
    sauce: 'caramel',
    scoops: 5
}


function tooManyScoops2(dessert: Sundae) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too many scoops!';
    } else {
        return 'Your order will be ready soon!';
    }
}
console.log(tooManyScoops2({flavor: 'vanilla', scoops: 5, sauce: 'caramel'}));




// Creacion de tipos indexables
// Los tipos indexables tienen una signatura de índice que describe el tipo que se puede usar para indexar en el objeto, 
// junto con los tipos de valores devueltos correspondientes al indexar.

interface IceCreamArray {
    [index: number]: string;
}

let myIceCream2: IceCreamArray;
myIceCream2 = ['chocolate', 'vanilla', 'strawberry'];
let myStr: string = myIceCream2[0];
console.log(myStr);
