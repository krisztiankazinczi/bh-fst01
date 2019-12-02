class Customer {
    static interestRate() {
        return 0.05;
    }
}

console.log(Customer.interestRate());

/////////////////////////////////////////////////

let c = new Customer();
console.log(c.constructor.interestRate()); // dinamikus hivatkozas egy osztalyra a peldanybol