class ArrayGenerator {
    generate(n) {
        let arr = [];
        for (let i = 0; i < n; i++) {
            arr[i] = Math.floor(Math.random() * 10 + 1);
        }
        return arr;
    }
}

class CachedArrayGenerator extends ArrayGenerator {
    constructor() {
        super();
        this.cached = [];
    }

    generate(n, forceNew) {
      if (forceNew) {
          this.cached = super.generate(n);
      }

      return this.cached;
    }
}

let arrgen = new CachedArrayGenerator();
console.log(arrgen.generate(5, true));
console.log(arrgen.generate(5, false));
console.log(arrgen.generate(5, true));
console.log(arrgen.generate(5, false));
console.log(arrgen.generate(5, false));