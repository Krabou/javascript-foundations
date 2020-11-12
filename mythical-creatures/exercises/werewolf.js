class Werewolf {
    constructor(name) {
        this._name = name;
        this._human = true;
        this._wolf = false;
    }

    get name() {
        return this._name
    }

    get human() {
        return this._human
    }

    get wolf() {
        return this._wolf
    }

    transform() {
        if (this._human == true) {
            this._human = false;
            this._wolf = true;
            return this
        } else {
            this._human = true;
            this._wolf = false;
            return this
        }
    }

}

module.exports = Werewolf;