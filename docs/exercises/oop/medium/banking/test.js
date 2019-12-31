const assert = require('chai').assert;

const Person = require(`./solution/Person`);
const Account = require(`./solution/Account`);

describe('Account', () => {
    describe('constructor(initialDeposit)', () => {
        it('should initialize the transaction list with a deposit when initialDeposit is provided', () => {
            const acc = new Account(100000);

            assert.deepEqual(acc._transactions, [100000]);
        })
        it('should initialize the transaction list with an empty list when initialDeposit is not provided', () => {
            const acc = new Account();

            assert.isEmpty(acc._transactions);
        })

        it('should initialize the transaction list with an empty list when initialDeposit is zero', () => {
            const acc = new Account(0);

            assert.isEmpty(acc._transactions);
        })
        it('should throw error when initialDeposit is negative', () => {
            assert.throws(() => new Account(-100000));
        })
        it('should throw error when holder is missing', () => {
            assert.throws(() => new Account(-100000));
        })
        
    })

    describe('balance', () => {
        it('should return the account balance', () => {
            
        });
    })
    describe('deposit(amount)', () => {
        it('should create a deposit transaction when account holder has enough cash', () => {
            
        });
        it('should decrease the account holder cash by amount', () => {
            
        });
        it('should do nothing if account holder does not have enough cash', () => {
            
        });
        it('should throw error when amount is not a positive number', () => {
            
        });

    })
    describe('balance', () => {
        it('should return the account balance', () => {
            
        });
    })

    describe('transfer(amount, to)', () => {
        it('should create a deposit transaction on the target account', () => {
            const acc1 = new Account(10000);
            const acc2 = new Account();

            acc1.transfer(5000, acc2);

            assert.deepEqual(acc2._transactions, [5000]);
        });
        it('should create a withdraw transaction on the origin account', () => {
            const acc1 = new Account(10000);
            const acc2 = new Account();

            acc1.transfer(5000, acc2);

            assert.deepEqual(acc1._transactions, [10000, -5000]);
        });
        it('should not create any transactions when there is not enough money', () => {
            const acc1 = new Account(2000);
            const acc2 = new Account(10000);

            acc1.transfer(5000, acc2);

            assert.deepEqual(acc1._transactions, [2000]);
            assert.deepEqual(acc2._transactions, [10000]);
        });
        it('should throw error when `amount` is not a positive number', () => {
            const acc1 = new Account(2000);
            const acc2 = new Account(10000);

            assert.throws(() => acc1.transfer(0, acc2));
            assert.throws(() => acc1.transfer(-10000, acc2));
        });
        it('should throw error when `to` is not provided', () => {
            const acc1 = new Account(2000);

            assert.throws(() => acc1.transfer(5000));
        });
        
    });
});


describe('Person', () => {
    describe('totalAssets', () => {
        it('should return the sum of cash and sum of balances over all accounts owned', () => {
            const acc1 = new Account(10000);
            const acc2 = new Account(20000);
            const p = new Person(5000, [acc1, acc2]);

            assert.strictEqual(p.totalAssets(), 35000);
        });
    });

});