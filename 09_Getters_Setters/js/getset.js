class Cachorro {
	constructor(nome, raca) {
		this.nome = nome;
		this.raca = raca;
	}

	get getNome() {
		return this.nome;
	}

	set setNome(novoNome) {
		this.nome = novoNome;
	}

	latir() {
		return `${this.nome} está latindo...`
	}
}

const dog = new Cachorro('Sem nome', 'Golden Retriever');
console.log(dog)
console.log(dog.latir())


dog.setNome = 'Rex'
console.log(dog)
console.log(dog.latir())

dog.nome = 'Dourado'
console.log(dog)
console.log(dog.latir())

// No ECMAScript 2022, foi introduzido o conceito de campos privados
// São campos que não podem ser acessados diretamente fora da classe.
class Gato {
	#nome
	#raca
	constructor(nome, raca) {
		this.#nome = nome;
		this.#raca = raca;
	}

	get getNome() {
		return this.#nome;
	}

	set setNome(novoNome) {
		this.#nome = novoNome;
	}

	miar() {
		return `${this.#nome} está miando...`
	}
}

const cat = new Gato('Sem nome', 'Siames');
console.log(cat)
console.log(cat.miar())

cat.setNome = 'Felix'
console.log(cat)
console.log(cat.miar())

//cat.#nome = 'Garfield' // emite um erro
cat.nome = 'Garfield' // não emite erro, mas não altera o campo privado
console.log(cat)

//console.log(cat.#raca) // emite um erro

// podemos criar propriedades sem estar no construtor
class Passaro {
	nome
	raca
	constructor(raca) {
		this.raca = raca;
	}

	get getNome() {
		return this.nome;
	}

	set setNome(novoNome) {
		this.nome = novoNome;
	}

	cantar() {
		return `${this.nome} está cantando...`
	}
}

const bird = new Passaro('Canário');
console.log(bird)

bird.setNome = 'Piu'
console.log(bird)
console.log(bird.cantar())

