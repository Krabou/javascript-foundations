class Magician {
    constructor({
        name,
        topHat = true
    }) {
        this._name = name;
        this._topHat = topHat;
        this._confident = false;
        this._nbspell = 0;
    }

    get name() {
        return this._name;
    }

    get topHat() {
        return this._topHat
    }

    get confident() {
        if (this._nbspell >= 3) {
            return this._confident = true
        } else
            return this._confident = false

    }

    incantation(test) {
        return `${test}!`.toUpperCase()
    }

    cast() {
        this._nbspell += 1
        if (this._topHat == false) {
            return "PULL DOVE FROM SLEEVE"
        } else {
            return "PULL RABBIT FROM TOP HAT"
        }
    }

    performShowStopper() {
        if (this._nbspell >= 3) {
            return 'WOW! The magician totally just sawed that person in half!'
        } else { return 'Oh no! Practice more before attempting this trick!'
        }
    }
}

module.exports = Magician;