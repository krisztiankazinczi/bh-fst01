// most itt o egy abstract os osztaly
// nem peldanyositjuk, csak oroklodeshez hasznaljuk, esetleg JSDOCban tipus jeloleshez
class Human {
    speak(){
        return 'HU';
    }

    walk() {
        // some logic
    }
}

// akik orokolnek az ososztalybol, felulirhatjak az ososztalyban levo metodusokat es propertyket,
// valamint uj propertykkel es metodusokkal bovulhetnek
class Csaba extends Human {
    walk() {
        return 'FUT';
    }

    g() {}
}

class Pista extends Human {
    walk() {
        return 'cammog';
    }

    f() {}
}

/**
 * pelda, a doSeomthing metodus egy param nevu parametert var, aminek a tipusa Human lesz
 * ekkor kaphat bemenetkent Csaba es Pista tipusu objektumot is, hiszen
 * mind a ketto ososztalya a Human osztaly.
 * 
 * @param {Human} param 
 */
function doSomething(param) {

}



class A {
    foo() { console.log(1234) }
    // konvencionalis megoldas privatera
    _bar() {console.log('private')}

    publicBar() {
        // private tagokat csak az osztalyon belul hivjuk meg
        this._bar();
    }
    
    /**
     * JSDOC annotacioval is jelolhetjuk, hogy ez a metodus private lesz
     * 
     * @private
     */
    jsdocPeldaPrivate() {}

    publicBar2() {

        const a = 124;

        // clousure-rel alkotunk privaste metodust, ilyenkor az fPrivate metodus kivulrol nem latszik
        // csak ezen a metoduson belul tudjuk hasznalni
        function fPrivate() {
            console.log(`private f method ${a}`);
        }

        console.log('some other thingy to do');

        fPrivate();
    }
}

let a = new A();
// meghivhatjuk a private-ot kivul, ugyanis semmi nem akadalyoz ebben, de ennek rossz vege lehet
a._bar();

// private metodus meghivasa a publicBar2-on belul tortenik
// ahol egyebb logikak is helyet kaphatnak.
a.publicBar2();

