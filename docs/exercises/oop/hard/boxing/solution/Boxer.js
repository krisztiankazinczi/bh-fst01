const LIGHTWEIGHT_START = 50;
const MIDDLEWEIGHT_START = 65;
const HEAVYWEIGHT_START = 90;

const LIGHTWEIGHT = 1;
const MIDDLEWEIGHT = 2;
const HEAVYWEIGHT = 3;

class Boxer {
    constructor(id, weight, club) {
        if (weight < LIGHTWEIGHT_START) throw new RangeError();

        this._id = id;
        this._weight = weight;
        this._club = club;
    }

    weightClass() {
        if (this._weight < MIDDLEWEIGHT_START) return LIGHTWEIGHT;
        if (this._weight < HEAVYWEIGHT_START) return MIDDLEWEIGHT;

        return HEAVYWEIGHT;
    }

    club() {
        return this._club;
    }

    sign(club) {
        if (this._club && this._club !== club) throw new SigningBeforeLeaving();

        this._club = club;
    }

    leave() {
        this._club = null;
    }
}

module.exports = Boxer;