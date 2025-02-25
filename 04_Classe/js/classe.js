// Criando classe em JavaScript - usando prototype
let cachorro = {
	nome: 'Rex',
	patas: 4,
	raca: 'SRD',
	latir: function() {
		console.log('Au au')
	}
}

let labrador = Object.create(cachorro)

labrador.latir()

labrador.raca = 'Labrador'
console.log(labrador.raca) // Labrador
console.log(cachorro.raca) // SRD

let pastor = Object.create(cachorro)
pastor.raca = 'Pastor Alemão'
console.log(pastor.raca) // Pastor Alemão
console.log(cachorro.raca) // SRD

// Criando classe em JavaScript - usando construtor (function)
function criaCachoro(nome, raca, patas, cor) {
	let cachorro = Object.create({})
	cachorro.nome = nome
	cachorro.raca = raca
	cachorro.patas = patas
	cachorro.cor = cor
	cachorro.latir = function() {
		console.log('Au au')
	}
	return cachorro
}

let pitbull = criaCachoro('Toby', 'Pitbull', 4, 'Marrom')
console.log(pitbull.nome) // Toby
console.log(pitbull.raca) // Pitbull
pitbull.latir()

let viraLata = criaCachoro('Rex', 'Vira Lata', 4, 'Cinza')
console.log(viraLata.nome) // Rex
console.log(viraLata.raca) // Vira Lata
viraLata.latir()

// Criando classe em JavaScript - usando construtor por new
function Cachorro(nome, raca, patas, cor) {
	this.nome = nome
	this.raça = raca
	this.patas = patas
	this.cor = cor
	this.latir = function() {
		console.log('Au au')
	}
}

let poodle = new Cachorro('Bilu', 'Poodle', 4, 'Branco')
console.log(poodle.nome) // Bilu
console.log(poodle.raca) // Poodle
poodle.latir()

let husky = new Cachorro('Thor', 'Husky', 4, 'Cinza')
console.log(husky.nome) // Thor
console.log(husky.raca) // Husky
husky.latir()
