class Dragon {
    constructor(name, rider, color) {
        this._name = name;
        this._rider = rider;
        this._color = color;
        this._hungry = true;
        this._full = 0
    }

    get name() {
        return this._name;
    }

    get rider() {
        return this._rider;
    }

    get color() {
        return this._color;
    }

    get hungry() {
        return this._hungry;
    }

    eat() {
        this._full += 1
        if (this._full == 3) {
            return this._hungry = false
        }
    }
}

module.exports = Dragon;