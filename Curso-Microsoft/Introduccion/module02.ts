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
