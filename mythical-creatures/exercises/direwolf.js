class Direwolf {
    constructor(name, home, size) {
        this._name = name;
        this._home = home || 'Beyond the Wall';
        this._size = size || 'Massive';
        this._starksToProtect = [];
        this._huntsWhiteWalkers = true;
    }

    get name() {
        return this._name
    }

    get home() {
        return this._home
    }

    get size() {
        return this._size
    }

    get starksToProtect() {
        return this._starksToProtect
    }

    get huntsWhiteWalkers() {
        return this._huntsWhiteWalkers
    }

    protect(stark) {
        if (this._home == stark._location && this.starksToProtect.length < 2) {
            this._starksToProtect.push(stark);
            stark._safe = true;
        } else {
            stark._safe = false;
        }

    }

    leave(stark) {
        // this._starksToProtect.pull(stark);
        stark._safe = false;
    }
}

module.exports = Direwolf;