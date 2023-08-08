"use strict";
// KLASSEN DEKORATOR
/*
function setIdTo100(target: Function) {
    // target.id = 100 // ohne prototype wird interfase 'Function' von TS angesprochen
    target.prototype.id = 100;
}

@setIdTo100
class TestClass {
    id?: number;
}

console.log("new TestClass().id:  ", new TestClass().id); // 100

*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
// DEKORATOR FABRIK
interface InComponent {
    selector: string,
    templateUrl: string,
    styleUrls: string[]
}
function DeComponent (options: InComponent) {
    return function (target: Function) {
        target.prototype.selector = options.selector;
        target.prototype.templateUrl = options.templateUrl;
        target.prototype.styleUrls = options.styleUrls;
    }
}

@DeComponent({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
class AppComponent implements InComponent {
    selector!: string;
    templateUrl!: string;
    styleUrls!: string[];
}


const neueKomponente = new AppComponent();
console.log("Selector: ", neueKomponente.selector);

*/
/*
// METHODEN DEKORATOR

function LoggeMethodenAufruf(
    target: Object,
    propertyKey: string,
    propertyDescriptor: PropertyDescriptor // Beschreibung der Property
) {
    console.log('target :>> ', target); // gibt Klasse selbst aus: target :>>  {constructor: ƒ, printId: ƒ}
    console.log('propertyKey :>> ', propertyKey); // prop, an welcher Dekorator angwendet wurde: propertyKey :>>  printId
    console.log('propertyDescriptor.value :>> ', propertyDescriptor.value); // wert der Prop: ƒ printId(prefix = 'id von TestClass2-Instanz: ') {return prefix + this.id;}
    propertyDescriptor.value = function (...args: any[]) {
        return `args Vom Methodendekorator: ${args}`;
    }
}

class TestClass2 {
    private id: string | undefined;

    @LoggeMethodenAufruf
    printId(prefix: string = 'id von TestClass2-Instanz: ') {
        return prefix + this.id;
    }
}

let newTestClass2 = new TestClass2();
console.log('newTestClass2.printId("wert für Dekorator Args") :>> ', newTestClass2.printId('wert für Dekorator Args')); // args Vom Methodendekorator: wert für Dekorator Args*/
// Simulierter Benutzer mit Berechtigungen
const benutzer = {
    id: 1,
    name: 'John Doe',
    rollen: ['admin', 'benutzer']
};
// Beispiel-Autorisierungsdekorator
function autorisierungErforderlich(erlaubteRollen) {
    return function (ziel, eigenschaftsName, beschreiber) {
        const urspruenglicheMethode = beschreiber.value;
        beschreiber.value = function (...args) {
            // Simulierte Überprüfung der Berechtigungen
            if (benutzer && benutzer.rollen.some(rolle => erlaubteRollen.includes(rolle))) {
                console.log('Autorisierung erfolgreich');
                return urspruenglicheMethode.apply(this, args);
            }
            else {
                console.log('Autorisierung fehlgeschlagen. Benutzer hat nicht die erforderlichen Rollen.');
                return undefined;
            }
        };
        return beschreiber;
    };
}
class BeispielKlasse {
    // Beispiel-Methode, die eine Autorisierung erfordert
    etwasMachen() {
        console.log('Etwas machen...');
    }
}
__decorate([
    autorisierungErforderlich(['admin']) // Nur Benutzer mit der Rolle 'admin' dürfen diese Methode aufrufen
    ,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BeispielKlasse.prototype, "etwasMachen", null);
// Instanz der Klasse erstellen
const beispielInstanz = new BeispielKlasse();
// Aufruf der Methode
beispielInstanz.etwasMachen(); // Ausgabe: "Autorisierung erfolgreich" und "Etwas machen..."
// Ändern der Benutzerrollen (Benutzer hat keine 'admin'-Rolle mehr)
benutzer.rollen = ['benutzer'];
// Aufruf der Methode erneut
beispielInstanz.etwasMachen(); // Ausgabe: "Autorisierung fehlgeschlagen. Benutzer hat nicht die erforderlichen Rollen."
