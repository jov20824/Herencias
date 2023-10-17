class Miembro{
    constructor (nombre="Sin nombre",apellido="Sin apellido"){
    this._nombre=nombre;
    this._apellido=apellido;
}

get Nombre(){
    return this._nombre;
    }
set Nombre(name){
    this._nombre = name;
    }
get Apellido(){
    return this._apellido;
            }
set Apellido(name){
    this._apellido=apellido;
    }

cenar(){
    console.log("Estoy cenando");
};

comer(){
    console.log("Estoy comiendo");
};

}