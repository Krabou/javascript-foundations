class Medusa {
    constructor(name) {
        this._name = name;
        this._statues = [];
    }

    get name() {
        return this._name;
    }

    get statues() {
        return this._statues
    }

    stare(victim) {
        if (this._statues.length < 3) {
            this._statues.push(victim);
            return victim._stoned = true
        } else {
            this._statues[0]._stoned = false;
            this._statues.shift();
            this._statues.push(victim);
            return victim._stoned = true
        }
    }
}

module.exports = Medusa;