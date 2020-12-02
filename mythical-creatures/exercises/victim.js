class Victim {
    constructor(name) {
        this._name = name;
        this._alive = true;
    }

    get name() {
        return this._name
    }

    get alive(){
        return this._alive
    }
}

module.exports = Victim;