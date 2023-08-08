// Arrays

// Arrays können an bestimmte Datentypen angepasst werden
// Ohne Typangabe ist es ein Array of any
let myArray1 = [4, 6, 'c'];
//myArray1 = [4, 6, 3];
//myArray1 = ['a', 'b', 'c'];
console.log("Test: ", typeof(myArray1));

let myNumbers: number[] = [5, 5.2, 6543];

let myStrings: Array<string> = ['r', 't'];


console.info('\n TUPEL');

// Die gewünschten Datentypen vom Tupel werdden INNERHALB von eckigen Klammern ausgegeben
let tupel: [Date, string];
// Zuweisung von Werten ist wie beim Array
tupel = [new Date(), 'warmer Tag'];

let tupel2: [number, string, boolean?];
tupel2 = [1, 'Wert für 1', true];
tupel2 = [2, 'Wert für 2'];

console.log(tupel2[1]);