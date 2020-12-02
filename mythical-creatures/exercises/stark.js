class Stark {
    constructor(name, location) {
        this._name = name;
        this._location = location || 'Winterfell';
        this._safe = false;
    }

    get name() {
        return this._name
    }

    get location() {
        return this._location
    }

    get safe() {
        return this._safe
    }

    houseWords() {
        if (this._safe == false) {
            return 'Winter is Coming'
        } else {
            return 'The North Remembers'
        }

    }
}

module.exports = Stark;