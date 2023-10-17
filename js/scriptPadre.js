class Padre extends Miembro{

    constructor (coche="Sin coche"){
        super(this._nombre,this._apellido);
        this._coche = coche;
    }

    comer(){
        super.comer();
        console.log("Estoy comiendo huevos");
    }

    cenar(){
        super.cenar();
        console.log("Estoy cenando huevos");
    }
}

