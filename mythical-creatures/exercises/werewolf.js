const Victim = require("./victim");

class Werewolf {
    constructor(name) {
        this._name = name;
        this._human = true;
        this._wolf = false;
        this._hungry = false;
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

    get hungry() {
        return this._hungry
    }

    transform() {
        if (this._human == true) {
            this._human = false;
            this._wolf = true;
            this._hungry = true;
            return this
        } else {
            this._human = true;
            this._wolf = false;
            this._hungry = false;
            return this
        }
    }

    eat(victim) {
        if (this._hungry == true && this._human == false && this.wolf == true) {
            victim._alive = false;
            this.transform()
        }

    }

}

module.exports = Werewolf;