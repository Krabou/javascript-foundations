class Hobbit {
    constructor(name) {
        this._name = name;
        this._age = 0;
        this._child = true;
        this._adult = false;
        this._old = false;
        this._hasRing = false;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    get child() {
        if (this._age > 32) {
            return this._child = false;
        } else return this._child = true;

    }

    get adult() {
        if (this._age >= 33) {
            return this._adult = true;
        } else return this._adult = false;
    }

    get old() {
        if (this._age >= 101) {
            return this._old = true;
        } else return this._old = false;
    }

    get hasRing() {
        if (this._name === "Frodo") {
            return this._hasRing = true;
        } else return this._hasRing = false;
    }

    celebrateBirthday() {
        return this._age += 1
    }
}

module.exports = Hobbit;