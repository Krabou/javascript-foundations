class Fairy{
    constructor(name){
this._name = name;
this._dust = 10;
    }

    get name(){
        return this._name
    }

    get dust(){
        return this._dust
    }

    receiveBelief(){
        
    }
}

module.exports = Fairy;