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

/*
let test = new AppComponentTest();

let neueKomponente = new AppComponent();

console.log("Test: ")

 

console.log("Selector: ", neueKomponente.selector);

 

interface Decorator

{

    invoke():void

}

class BaseClass implements Decorator

{

    invoke():void{

        console.log("Invoked code");

    };

}

 

class AuthorizedDecorator implements Decorator

{

    private username:string;

    private password:string;

    dec:Decorator

    constructor(username:string,password:string,dec :Decorator)

    {

        this.username=username

        this.password = password

        this.dec = dec

    }

    invoke(): void {

        if(this.username === "Kevin" && this.password === "PW")

        {

            this.dec.invoke();

        }

    }

}

new AuthorizedDecorator("Kevin","PW",new BaseClass());
*/



const benutzer = {
    id: 1,
    name: 'bmw bmw',
    rollen: ['admin', 'benutzer']
  };
  
  function autorisierungErforderlich(erlaubteRollen: string[]) {
    return function(ziel: any, eigenschaftsName: string, beschreiber: PropertyDescriptor) {
      const urspruenglicheMethode = beschreiber.value;
  
      beschreiber.value = function(...args: any[]) {
        if (benutzer && benutzer.rollen.some(rolle => erlaubteRollen.includes(rolle))) {
          console.log('Autorisierung erfolgreich');
          return urspruenglicheMethode.apply(this, args);
        } else {
          console.log('Autorisierung fehlgeschlagen. Benutzer hat nicht die erforderlichen Rollen.');
          return undefined;
        }
      };
  
      return beschreiber;
    };
  }
  
  class BeispielKlasse {
    @autorisierungErforderlich(['admin'])
    etwasMachen() {
      console.log('Etwas machen...');
    }
  }
  
  const beispielInstanz = new BeispielKlasse();
  
  beispielInstanz.etwasMachen();
  
  benutzer.rollen = ['benutzer'];
  
  beispielInstanz.etwasMachen();