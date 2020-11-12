class Victim {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name
    }
}

module.exports = Victim;