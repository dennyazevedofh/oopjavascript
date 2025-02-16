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
let patas = Symbol()
Cachorro.prototype[patas] = 4

console.log(Cachorro.prototype.raca)
console.log(Cachorro.prototype[patas])

let dog = new Cachorro("Rex", "Labrador", "Preto");
console.log(dog);
console.log(dog.nome);
console.log(dog.raca);
console.log(dog.__proto__.raca)
console.log(dog[patas])
dog.latir();

let pitbull = new Cachorro("Toby", "Pitbull", "Marrom");
console.log(pitbull);
console.log(pitbull.raca);
console.log(pitbull.__proto__.raca)
console.log(pitbull[patas])