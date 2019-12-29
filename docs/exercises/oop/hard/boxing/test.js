const assert = require('chai').assert;

const Boxer = require('./solution/Boxer');
const BoxClub = require('./solution/BoxClub');
const IllegalState = require('./solution/errors/IllegalState');

describe('Boxer', () => {
    describe('constructor', () => {
        it('should throw IllegalState when weight is missing', () => {
            assert.throws(() => new Boxer(), IllegalState);
        });
        it('should throw RangeError when weight is lower than lightweight lower bound', () => {
            assert.throws(() => new Boxer(47), RangeError);
        });
    });
    describe('weightClass', () => {
        it('should return the weight class of the boxer', () => {
            assert.strictEqual(new Boxer(48).weightClass(), 1, 'expected 1 when weight is 48');
            assert.strictEqual(new Boxer(61).weightClass(), 2, 'expected 2 when weight is 61');
            assert.strictEqual(new Boxer(91).weightClass(), 3, 'expected 3 when weight is 91');
        });
    });
    describe('club', () => {
        it('should return the current club of the boxer', () => {
            const club = new BoxClub();
            assert.deepEqual(new Boxer(48, club).club(), club);
        });
        it('should return null when the boxer is not associated to any club', () => {
            assert.strictEqual(new Boxer(48).club(), null);
        });
    });
    describe('sign', () => {
        it('should throw IllegalState error when boxer is associated with another club', () => {
            const club = new BoxClub();
            const targetClub = new BoxClub();
            const boxer = new Boxer(48, club);

            assert.throws(() => boxer.sign(targetClub), IllegalState);
        });
    });
    describe('leave', () => {
        it('should nullify the boxers club', () => {
            const club = new BoxClub();
            const boxer = new Boxer(48, club);

            boxer.leave();

            assert.isNull(boxer.club());
        });
    })
});

describe('BoxClub', () => {

    describe('boxers', () => {
        it('should return list of all currently signed boxers when no argument is specified', () => {
            const boxers = [new Boxer(80), new Boxer(85)];
            const club = new BoxClub(boxers);
            assert.deepEqual(club.boxers(), boxers);
        });

        it('should return list of boxers of the specified weight class when a weight class is provided', () => {
            const lightweights = [new Boxer(48), new Boxer(55)];
            const middleweights = [new Boxer(65), new Boxer(80)];
            const heavyweights = [new Boxer(91), new Boxer(95)];
            const boxers = [...lightweights, ...middleweights, ...heavyweights];
            
            const club = new BoxClub(boxers);

            assert.deepEqual(club.boxers(1), lightweights);
            assert.deepEqual(club.boxers(2), middleweights);
            assert.deepEqual(club.boxers(3), heavyweights);
            
        });


        it('should return empty array when there are no boxers in the provided weight class', () => {
            const lightweights = [new Boxer(48), new Boxer(55)];
            const club = new BoxClub(lightweights);

            assert.isEmpty(club.boxers(2));
        });

        it('should return empty array when there are no boxers at all in the club', () => {
            const club = new BoxClub();

            assert.isEmpty(club.boxers());
        });

    });

    describe('sign', () => {
        it('should add the boxer to the box club boxers if boxer is not signed elsewhere', () => {
            const boxers = [];
            const boxer = new Boxer(48);
            const club = new BoxClub(boxers);

            club.sign(boxer);

            assert.deepEqual(boxers, [boxer]);

        });

        it('should return the updated array of boxers on success', () => {
            const boxer = new Boxer(48);
            const club = new BoxClub();

            const actual = club.sign(boxer);

            assert.deepEqual(actual, [boxer]);

        });

        it('should throw IllegalState when boxer is signed elsewhere', () => {
            const boxer = new Boxer(48, new BoxClub());
            const club = new BoxClub();

            assert.throws(() => club.sign(boxer), IllegalState);

        });
    });

    describe('breakUp', () => {
        it('should remove boxer from boxers when boxer is signed at the box club', () => {
            const boxer = new Boxer(48);
            const boxers = [boxer];
            const club = new BoxClub(boxers);

            club.breakUp(boxer);

            assert.deepEqual(boxers, []);
        });

        it('should return updated boxers array without the boxer', () => {
            const boxer = new Boxer(48);
            const club = new BoxClub([boxer]);

            const boxers = club.breakUp(boxer);

            assert.deepEqual(boxers, []);
        });

        it('should throw IllegalState error when boxer is not is not signed', () => {
            const boxer = new Boxer(48);
            const club = new BoxClub();

            assert.throws(() => club.breakUp(boxer), IllegalState);
        });
    });
});