// Tipos primitivos

// Boolean
let flag: boolean;
let yes = true;
let no = false;

// Number
let x: number;
let y = 0;
let z: number = 123.456;
// let big: bigint = 100n; // solo valido para es2020 en adelante

// String
let s: string;
let empty = "";
let abc = 'abc';

let firstName: string = "Mateo";
let sentence: string = `My name is ${firstName}.
    I am new to TypeScript.`;


// Enumeracion 
enum ContractStatus {
    Permanent = 1,
    Temp,
    Apprentice
}

let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus);



// Tipo any, unknown 
let randomValue: any = 10;
randomValue = 'Mateo';   // OK
randomValue = true;      // OK

console.log(randomValue.name);  // Logs "undefined" to the console
randomValue();                  // Returns "randomValue is not a function" error
randomValue.toUpperCase();      // Returns "randomValue is not a function" error


// Al se de tipo unknown este no puede acceder a sus propiedades, llamarse como funcion o contructor
let randomValue2: unknown = 10;
randomValue2 = true;
randomValue2 = 'Mateo';

// console.log(randomValue2.name);  // Error: Object is of type unknown
// randomValue2();                  // Error: Object is of type unknown
// randomValue2.toUpperCase();      // Error: Object is of type unknown




// Tipos UNION, INTERSECCION
// UNION
let multiType: number | boolean;
multiType = 20;         //* Valid
multiType = true;       //* Valid
// multiType = "twenty";   //* Invalid


interface Employee {
    employeeID: number;
    age: number;
}
interface Manager {
    stockPlan: boolean;
}
// INTERSECCION '&'  ==>  combina dos tipos para generar uno que posea ambas caracteristicas
type ManagementEmployee = Employee & Manager;
let newManager: ManagementEmployee = {
    employeeID: 12345,
    age: 34,
    stockPlan: true
};




// Tipos literales
// Un literal es un subtipo mas concreto de un tipo colectivo
type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;
myResult = "incomplete";    //* Valid
myResult = "pass";          //* Valid
// myResult = "failure";       //* Invalid