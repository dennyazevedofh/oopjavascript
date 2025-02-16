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

Cachorro.prototype.raca = "SRD"

console.log(Cachorro.prototype.raca)

let dog = new Cachorro("Rex", "Labrador", "Preto");
console.log(dog);
console.log(dog.nome);
console.log(dog.raca);
console.log(dog.__proto__.raca)
dog.latir();

Cachorro.prototype.patas = 4

let pitbull = new Cachorro("Toby", "Pitbull", "Marrom");
console.log(pitbull);
console.log(pitbull.patas);
console.log(pitbull.raca);
console.log(pitbull.__proto__.raca)