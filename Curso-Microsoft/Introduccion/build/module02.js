"use strict";
// Tipos primitivos
// Boolean
let flag;
let yes = true;
let no = false;
// Number
let x;
let y = 0;
let z = 123.456;
// let big: bigint = 100n; // solo valido para es2020 en adelante
// String
let s;
let empty = "";
let abc = 'abc';
let firstName = "Mateo";
let sentence = `My name is ${firstName}.
    I am new to TypeScript.`;
// Enumeracion 
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 1] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 2] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 3] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
let employeeStatus = ContractStatus.Temp;
console.log(employeeStatus);
// Tipo any, unknown 
let randomValue = 10;
randomValue = 'Mateo'; // OK
randomValue = true; // OK
console.log(randomValue.name); // Logs "undefined" to the console
randomValue(); // Returns "randomValue is not a function" error
randomValue.toUpperCase(); // Returns "randomValue is not a function" error
// Al se de tipo unknown este no puede acceder a sus propiedades, llamarse como funcion o contructor
let randomValue2 = 10;
randomValue2 = true;
randomValue2 = 'Mateo';
// console.log(randomValue2.name);  // Error: Object is of type unknown
// randomValue2();                  // Error: Object is of type unknown
// randomValue2.toUpperCase();      // Error: Object is of type unknown
// Tipos UNION, INTERSECCION
// UNION
let multiType;
multiType = 20; //* Valid
multiType = true; //* Valid
let newManager = {
    employeeID: 12345,
    age: 34,
    stockPlan: true
};
let myResult;
myResult = "incomplete"; //* Valid
myResult = "pass"; //* Valid
// myResult = "failure";       //* Invalid
