// Criando obnjetos com propriedades usando prototype
const pessoa = {
	nome: 'Fulano',
	idade: 30,
	sexo: 'M',
	profissao: 'Desenvolvedor'
}

console.log(Object.getPrototypeOf(pessoa)) // {}
console.log(Object.getPrototypeOf(pessoa) === Object.prototype); // true
console.log(pessoa.hasOwnProperty('nome')) // true

let pessoaNova = Object.create(pessoa)

console.log(pessoaNova.nome) // Fulano
console.log(Object.getPrototypeOf(pessoaNova)) // {nome: 'Fulano', idade: 30, sexo: 'M', profissao: 'Desenvolvedor'}
console.log(Object.getPrototypeOf(pessoaNova) === pessoa); // true
console.log(pessoaNova.hasOwnProperty('nome')) // false

pessoaNova.nome = 'Ciclano'
console.log(pessoaNova.nome) // Ciclano
console.log(pessoaNova.hasOwnProperty('nome')) // true
console.log(pessoaNova.__proto__.nome) // Fulano
console.log(pessoaNova.__proto__.hasOwnProperty('nome')) // true
console.log(pessoa.nome) // Fulano
console.log(pessoa.hasOwnProperty('nome')) // true


console.log(pessoaNova.idade) // 30
console.log(pessoa.idade) // 30
console.log(pessoaNova.hasOwnProperty('idade')) // false
console.log(pessoa.hasOwnProperty('idade')) // true
console.log(pessoaNova.__proto__.hasOwnProperty('idade')) // true

pessoaNova.idade = 40
console.log(pessoaNova.idade) // 40
console.log(pessoaNova.hasOwnProperty('idade')) // true
console.log(pessoaNova.__proto__.idade) // 30
console.log(pessoaNova.__proto__.hasOwnProperty('idade')) // true
console.log(pessoa.idade) // 30

// criando objetos com métodos usando prototype
function Cachorro(nome, raca, cor) {
	this.nome = nome
	this.raca = raca
	this.cor = cor
}

Cachorro.prototype.latir = function() {
	console.log('Au au')
}

Cachorro.prototype.uivar = function () {
	console.log('Auuuuuuuuuuuu')
}

let dog = new Cachorro('Rex', 'Vira-lata', 'Marrom')
console.log(dog.nome) // Rex
console.log(dog.raca) // Vira-lata
console.log(dog.cor) // Marrom
dog.latir() // Au au
dog.uivar() // Auuuuuuuuuuuu


