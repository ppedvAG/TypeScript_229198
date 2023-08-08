console.info('\n ANY');
// ANY MIT TYPENANPASSUNG
var myAny; // ohne Datentypenangabe und ohne Initialisierung ist die Variable vom Typ 
// 'any', der Datentyp wird bei der Zuweisung aber angepasst
var myString1 = 'string1wert';
myAny = myString1;
console.log('typeof myAny: ', typeof myAny); // string, aber string ist es in js
var myNumber1 = 34;
//myNumber1 = myAny; // Type 'string' is not assignable to type 'number' .ts ...
//let myNumber1 : number = myAny;
// ANY FEST GESETZT
var myAny1; // ohne Datentypenangabe und ohne Initialisierung ist die Variable vom Typ any
myAny1 = 'string';
var myNumber2 = 456;
myNumber2 = myAny1;
var myNumber3 = myNumber2;
console.log('myNumber3: ', myNumber3);
