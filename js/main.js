
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

class Padre extends Miembro{

    constructor (nombre,apellido,coche="Sin coche"){
        super(nombre,apellido);
        this._coche = coche;
    }

    comer(){
      
        console.log("Estoy comiendo huevos");
    }

    cenar(){
       
        console.log("Estoy cenando huevos");
    }
}

class Hijo extends Miembro{

    constructor (nombre,apellido,moto="Sin moto"){
        super(nombre,apellido);
        this._moto = moto;
    }
}

class Familia{

    constructor(domicilio,miembros,renta=0){
        this._domicilio = domicilio;
        this._renta = renta;
        this.miembros = miembros;

    }
}

var jandro = new Padre("Alejandro","Blanco","Renault Modus");
var luis = new Hijo("Luis","Esteban","Kawasaki");

var listaMiembros = [jandro,luis];
var familia = new Familia("Oviedo",listaMiembros,0);

for (var i=0;i<2;i++){
    familia.miembros[i].comer();
}