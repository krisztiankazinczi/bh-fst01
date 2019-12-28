const assert = require('chai').assert;

const solutionDir = 'laszlo_szucs';

const Person = require(`./${solutionDir}/Person`);
const Account = require(`./${solutionDir}/Account`);



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

describe('Account', () => {
    describe('transfer', () => {
        it('should decrease in origin account and increase in target account after a successful transfer', () => {
            const acc1 = new Account(10000);
            const acc2 = new Account(10000);

            acc1.transfer(5000, acc2);

            assert.strictEqual(acc1.balance(), 5000);
            assert.strictEqual(acc2.balance(), 15000);
        });
        it('should not change on either accounts when a transaction was unsuccessful', () => {
            const acc1 = new Account(2000);
            const acc2 = new Account(10000);

            assert.isFalse(acc1.transfer(5000, acc2));

            assert.strictEqual(acc1.balance(), 2000);
            assert.strictEqual(acc2.balance(), 10000);
        });
        it('should return false when there is not enough money for transaction', () => {
            const acc1 = new Account(2000);
            const acc2 = new Account(10000);

            assert.isFalse(acc1.transfer(5000, acc2));
        });
        it('should throw TypeError when account is not an Account type', () => {
            const acc1 = new Account(2000);

            assert.throws(() => acc1.transfer(5000, undefined), TypeError);
        });
        
    });
});