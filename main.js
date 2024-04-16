
//Aberto/fechado, Responsabilidade única, Demeter, Liskov
class Forma {
    area() {
        throw new Error("Método 'area' deve ser implementado por subclasses");
    }
}

class Circulo extends Forma {
    constructor(raio) {
        super();
        this.raio = raio;
    }

    area() {
        return Math.PI * this.raio ** 2;
    }
}

class Retangulo extends Forma {
    constructor(largura, altura) {
        super();
        this.largura = largura;
        this.altura = altura;
    }

    area() {
        return this.largura * this.altura;
    }
}

function calcularArea(forma) {
    return forma.area();
}

const circulo = new Circulo(6);
const retangulo = new Retangulo(4, 6);

console.log(calcularArea(circulo));
console.log(calcularArea(retangulo)); 