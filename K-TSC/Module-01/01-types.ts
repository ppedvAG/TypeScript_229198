console.info('\n ANY');

// ANY MIT TYPENANPASSUNG
let myAny; // ohne Datentypenangabe und ohne Initialisierung ist die Variable vom Typ 
// 'any', der Datentyp wird bei der Zuweisung aber angepasst
let myString1 = 'string1wert';
myAny = myString1;
console.log('typeof myAny: ', typeof myAny); // string, aber string ist es in js
let myNumber1: number = 34;

//myNumber1 = myAny; // Type 'string' is not assignable to type 'number' .ts ...
//let myNumber1 : number = myAny;

// ANY FEST GESETZT
let myAny1: any; // ohne Datentypenangabe und ohne Initialisierung ist die Variable vom Typ any
myAny1 = 'string';
let myNumber2 = 456;
myNumber2 = myAny1;
let myNumber3: number = myNumber2;
console.log('myNumber3: ', myNumber3) // string, obwohl intellisense hier 'number' zeigt. Kompiliert wird
// es auch ohne Probleme.



console.info('\n UNKNOWN')

// let myUnknown: unknown = unknown; // Es git kein Schlüsselwort für den Wert von unknown
let myUnknown: unknown;
myUnknown = undefined;
myUnknown = null;
myUnknown = 'string';

//let MyString2: string = myUnknown;
//let MyNull: null = myUnknown;
//let MyUndefined: undefined = myUnknown;

/*
// Type-Checking
function addNumbers(a: number, b:number): number {
    return a+b;
}

const num1 = 5;
const num2 = 10;

const result = addNumbers(num1, num2);
console.log(result); // Ausgabe: 15

const str = "Hello";
const invalidResult = addNumbers(num1, str); // Fehler: Argument vom falschen Typ*/



console.info('\n VOID');

let myVoid: void;

let myFct1 = () => {}; // Datentyp von myFct1: () => Void
let myFct2 = (): void => {}; // das gleiche wie oben
let myFct3 = (): void => {
    // return 'string'; // Type 'string' is not assignable to type 'void'
    // return myVoid; // funktioniert
    return; // das gleiche wie zeile davor
};

myVoid = undefined; // kompatibel ohne Mehrwert


console.info('\n NULL')

let myNull:null = null;
//myNull = undefined;
//let myUndefined: undefined = <undefined>unknown;

console.info('\n NEVER')

let MyNever: never;

// BEI FUNKTIONEN
let myFct4 = () => {
    // Datentyp - () => never, wegen unreachable code
    throw new Error();
    console.log('object');  // Unreachable code detected
}

function myFct5() {
    myFct5();
    return 5;
}
// Endlos Schleife mittels Funktionen


