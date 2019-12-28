const assert = require('chai').assert;

const Boxer = require('./solution/Boxer');
const BoxClub = require('./solution/BoxClub');
const IllegalState = require('./solution/errors/IllegalState');

const DUMMY_ID = 1;

describe('Boxer', () => {
    describe('constructor', () => {
        it('should throw RangeError when weight is lower than lightweight lower bound', () => {
            assert.throws(() => new Boxer(DUMMY_ID, 40), RangeError);
        });
    });
    describe('weightClass', () => {
        it('should return the weight class of the boxer', () => {
            const tests = [
                {weight: 50, expected: 1},
                {weight: 70, expected: 2},
                {weight: 90, expected: 3}
            ]
            
            tests.forEach(tc => assert.strictEqual(new Boxer(DUMMY_ID, tc.weight).weightClass(), tc.expected));
        });
    });
});

describe('BoxClub', () => {
    describe('boxers', () => {
        it('should return list of all currently signed boxers when no argument is specified', () => {
            const boxers = [new Boxer(DUMMY_ID, 80), new Boxer(DUMMY_ID, 85)];
            const club = new BoxClub(boxers);
            assert.deepEqual(club.boxers(), boxers);
        });

        it('should return list of boxers of the specified weight class when a weight class is provided', () => {
            const lightweights = [new Boxer(DUMMY_ID, 50), new Boxer(DUMMY_ID, 55)];
            const middleweights = [new Boxer(DUMMY_ID, 65), new Boxer(DUMMY_ID, 80)];
            const heavyweights = [new Boxer(DUMMY_ID, 90), new Boxer(DUMMY_ID, 95)];
            const boxers = [...lightweights, ...middleweights, ...heavyweights];
            
            const club = new BoxClub(boxers);
            
            const tests = [
                {weightClass: 1, expected: lightweights},
                {weightClass: 2, expected: middleweights},
                {weightClass: 3, expected: heavyweights}
            ];

            tests.forEach(tc => assert.deepEqual(club.boxers(tc.weightClass), tc.expected));
            
        });
    });

    describe('sign', () => {
        it('should add the boxer to the box club boxers if boxer is not signed elsewhere', () => {
            const boxer = new Boxer();
            const club = new BoxClub();

            const boxers = club.sign(boxer);

            assert.strictEqual(boxers.length, 1);
            assert.deepEqual(boxers[0], boxer);

        });

        it('should throw IllegalState when boxer is signed elsewhere', () => {
            const boxer = new Boxer(undefined, undefined, new BoxClub());
            const club = new BoxClub();

            assert.throws(() => club.sign(boxer), IllegalState);

        });

        it('should throw IllegalState when boxer is already signed at the box club', () => {
            const club = new BoxClub();
            const boxer = new Boxer(undefined, undefined, club);

            assert.throws(() => club.sign(boxer), IllegalState);

        });
    });

    describe('breakUp', () => {
        it('should remove boxer from boxers when boxer is signed at the box club', () => {
            const boxer = new Boxer();
            const boxers = [boxer];
            const club = new BoxClub(boxers);

            const removed = club.breakUp(boxer);

            assert.deepEqual(removed, boxer);
            assert.strictEqual(boxers.length, 0);
        })
    })
});