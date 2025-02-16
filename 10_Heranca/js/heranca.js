class Manifero {
	constructor(patas) {
		this.patas = patas
	}
}

let coiote = new Manifero(4);
console.log(coiote.patas)

class Cachorro extends Manifero {
	constructor(patas, raca) {
		super(patas);
		this.raca = raca;
	}
	latir() {
		console.log('Au au')
	}
}

let labrador = new Cachorro(4, 'Labrador');
console.log(labrador.patas)
labrador.latir()

console.log("labrador")
console.log(labrador instanceof Cachorro)
console.log(labrador instanceof Manifero)
console.log(labrador instanceof Object)

console.log("coiote")
console.log(coiote instanceof Cachorro)
console.log(coiote instanceof Manifero)
console.log(coiote instanceof Object)
