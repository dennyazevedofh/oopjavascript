// Criando objetos - iniciando
let cachorro = {
	patas: 4,
	nome: 'Rex',
	latir: function() {
		console.log('Au au');
	}
}

console.log(cachorro.patas) // 4
console.log(cachorro.nome) // Rex
cachorro.latir() // Au au

// Incluindo e excluindo propriedades
let carro = {
	marca: 'Ford',
	modelo: 'Ka',
	ano: 2018,
	portas: 4,
	eletrico: false,
	motor: '1.0',
}

console.log(carro.marca) // Ford
console.log(carro.portas) // 4

delete carro.portas

console.log(carro.portas) // undefined

carro.tetoSolar = true

console.log(carro.tetoSolar) // true

let pessoa = {
	nome: 'João',
	idade: 25,
	profissao: 'Desenvolvedor'
}

console.log(pessoa.nome) // João
delete pessoa.nome
console.log(pessoa.nome) // undefined
console.log(pessoa) // { idade: 25, profissao: 'Desenvolvedor' }
pessoa.nome = 'João'
console.log(pessoa) // { idade: 25, profissao: 'Desenvolvedor', nome: 'João' }


// copiando propriedades entre objetos
let carro = {
	porta: '2',
	portaMalas: '200l',
	moto: '2.0'
}

let adicionais = {
	tetoSolar: true,
	arCondicionado: true
}

console.log(carro) // { porta: '2', portaMalas: '200l', moto: '2.0' }
Object.assign(carro, adicionais)
console.log(carro) // { porta: '2', portaMalas: '200l', moto: '2.0', tetoSolar: true, arCondicionado: true }

// mostrando as chaves (keys - propriedades) de um objeto
let pessoa = {
	nome: 'João',
	idade: 25,
	profissao: 'Desenvolvedor'
}

console.log(pessoa) // { nome: 'João', idade: 25, profissao: 'Desenvolvedor' }
console.log(Object.keys(pessoa)) // [ 'nome', 'idade', 'profissao' ]

// criando um objeto a partir de outro - Mutação de objetos
let pessoa = {
	nome: 'João',
	idade: 25,
	profissao: 'Desenvolvedor'
}

let pessoa2 = pessoa
console.log(pessoa == pessoa2) // true
console.log(pessoa) // { nome: 'João', idade: 25, profissao: 'Desenvolvedor' }
console.log(pessoa2) // { nome: 'João', idade: 25, profissao: 'Desenvolvedor' }

pessoa2.nome = 'Maria'

console.log(pessoa) // { nome: 'Maria', idade: 25, profissao: 'Desenvolvedor' }
console.log(pessoa2) // { nome: 'Maria', idade: 25, profissao: 'Desenvolvedor' }

pessoa.nome = 'Pedro'

console.log(pessoa) // { nome: 'Pedro', idade: 25, profissao: 'Desenvolvedor' }
console.log(pessoa2) // { nome: 'Pedro', idade: 25, profissao: 'Desenvolvedor' }

let pessoa3 = {
	nome: 'Ana',
	idade: 30,
	profissao: 'Analista'
}

console.log(pessoa == pessoa2) // true
console.log(pessoa == pessoa3) // false
console.log(pessoa2 == pessoa3) // false
