// A partir da versão ES6 do JavaScript, foi introduzido o conceito de classes
// É uma forma de criar objetos de forma mais simples e organizada.

class Cachorro {
	constructor(nome, raca, cor) {
		this.nome = nome;
		this.raca = raca;
		this.cor = cor;
	}

	latir() {
		console.log("Au au")
	}
}

let dog = new Cachorro("Rex", "Labrador", "Preto");
console.log(dog);
console.log(dog.nome);
dog.latir();

Cachorro.prototype.patas = 4

let pitbull = new Cachorro("Toby", "Pitbull", "Marrom");
console.log(pitbull);
console.log(pitbull.patas);
