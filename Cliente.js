class cliente extends Persona{
    
    static contCliente = 0;

    constructor(fechaRegistro){ 
        this._fechaRegistro = fechaRegistro;
        this.idCliente = ++Persona.contCliente;
    }

    get idCliente(){
        return this.idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }
    
    toString(){
        return `${super.toString}
                ${this._idCliente}
                ${this._fechaRegistro}`
    }
}