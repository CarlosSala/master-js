
class Coche {

    modelo;
    velocidad;
    color;

    constructor(modelo, velocidad, color) {

        this.modelo = modelo;
        this.velocidad = velocidad;
        this.color = color;
    }

    AumentarVelocidad() {
        this.velocidad+=1;
    }

    DisminuirVelocidad() {
        this.velocidad-=1;
    }

}

var velocidadInicio = document.getElementById("velocidadCocheInicio");
var velocidadTermino = document.getElementById("velocidadCocheTermino");

var objCoche1 = new Coche("audi", 100, "red");
var objCoche2 = new Coche("mercedes", 100, "blue");

velocidadInicio.innerHTML = " la velocidad inicial del coche 1 es: " + objCoche1.velocidad;

console.log(objCoche1);

objCoche1.AumentarVelocidad();
objCoche1.AumentarVelocidad();
objCoche1.AumentarVelocidad();

velocidadTermino.innerHTML = " la velocidad de termino del coche 1 es: " + objCoche1.velocidad;

console.log(objCoche1);

class Autobus extends Coche {

    constructor(modelo, velocidad, color){
        super(modelo,velocidad,color);
        this.altura = 5;

    }

    mostrarAltura(){
        return "La altura del bus es: " + this.altura;
    }

    
}

var objAutobus1 = new Autobus("bmw",200,"yellow");

console.log(objAutobus1);
console.log(objAutobus1.mostrarAltura());