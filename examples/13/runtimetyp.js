class Customer {
    static interestRate() {
        return 0.05;
    }
}

class VIPCustomer extends Customer {
    static interestRate() {
        return 0.15;
    }
}

let ir1 = Customer.interestRate();
let ir2 = VIPCustomer.interestRate();