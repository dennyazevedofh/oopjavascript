// Exemplo de métodos em objetos
const cachorro = {
	uivar: function () {
		console.log('Auuuuuuuuuuuuuuuuu')
	},
	rosnar: function () {
		console.log('Grrrrrr')
	},
}

cachorro.uivar()
cachorro.rosnar()


// métodos setters e getters
let pessoa = {
	nome: 'João',
	idade: 20,
	setNome: function (nome) {
		this.nome = nome
	},
	getNome: function () {
		return this.nome
	},
	setIdade: function (idade) {
		this.idade = idade
	},
	getIdade: function () {
		return this.idade
	}
}

console.log(pessoa)
console.log(pessoa.getNome())
pessoa.setNome('José')
console.log(pessoa.getNome())
console.log(pessoa.getIdade())
pessoa.setIdade(30)
console.log(pessoa.getIdade())
