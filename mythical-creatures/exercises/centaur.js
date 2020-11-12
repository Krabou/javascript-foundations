class Centaur {
    constructor({
        name,
        type
    }) {
        this._name = name;
        this._breed = type;
        this._cranky = false;
        this._standing = true;
        this._nbTime = 0;
        this._layingDown = false;
    }

    get name() {
        return this._name
    }

    get breed() {
        return this._breed
    }

    get cranky() {
        if (this._nbTime >= 3) {
            return this._cranky = true
        } else {
            return this._cranky
        }
    }

    get standing() {
        return this._standing
    }

    get layingDown() {
        return this._layingDown
    }

    shoot() {
        if (this.cranky === false && this.layingDown === false) {
            this._nbTime += 1;
            return 'Twang!!!'
        } else {
            return 'NO!'
        }
    }

    run() {
        if (this.cranky === false && this.layingDown === false) {
            this._nbTime += 1;
            return 'Clop clop clop clop!!!'
        } else {
            return 'NO!'
        }
    }

    sleep() {
        if (this.standing === true) {
            return 'NO!'
        } else {
            this._nbTime = 0;
            this._cranky = false;
            return 'ZZZZ'
        }
    }

    layDown() {
        this._standing = false;
        this._layingDown = true;
        return this
    }

    standUp() {
        this._standing = true;
        this._layingDown = false;
        return this
    }

    drinkPotion() {
        if (this._standing === true && this._nbTime >= 3) {
            this._nbTime = 0;
            this._cranky = false;
            return this
        } else {
            this._cranky = true;
            return 'Not while I\'m laying down!'
        }
    }

}

module.exports = Centaur;