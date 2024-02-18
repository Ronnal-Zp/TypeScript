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
