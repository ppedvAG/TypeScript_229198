console.log('tsc funktioniert');
// getElementById
var p1 = document.querySelector('#p1');
console.log("p1: ", p1);
console.log("typeof p1: ", typeof p1); // object
console.log("p1 instanceof HTMLElement: ", p1 instanceof HTMLElement); // true, obwohl Datentyp 'HTMLElement | null' ist
console.log("p1 === null: ", p1 === null); // false
