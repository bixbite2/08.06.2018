/*
Anotações

*/
console.log('main.js');

class Livro { // O que é o livro para meu sistema
    constructor(titulo, autor) { // Parâmentros do construtor
        // Ele vai ter titulo e autor (o obj aqui é o THIS)
        this.titulo = titulo;
        this.autor = autor;
    }
    toString() { // Funções dentro de classes são MÉTODOS.
        return `${this.titulo} / ${this.autor}`;
    }
}

// CLASSE: Modelo/Abstração/Forma


const livro1 = new Livro('Mein Kampf', 'Hitler');
const livro2 = new Livro('Senhor dos anéis', 'Tolkien');

/*
new: É serve para instanciar um objeto a partir de uma classe.
(ordem importa primeiro o titulo dps o autor)
*/

console.log(livro1.toString());
console.dir(livro1);

// alert(livro1); [object Object]

/*
livro1.autor é a propriedade
livro1.autor() seria o método
*/

let x = 4;
const y = x;

console.log(x); // 4
console.log(y); // 4
x = 5;
console.log(x); // 5
console.log(y); // 4

const livro5 = livro2; // livro5 vai sempre ser igual ao livro2
console.log(livro2);
console.log(livro5);
livro2.autor = 'John Reuel Tolkien';
console.log(livro2);
console.log(livro5);
livro5.titulo = 'WOOOOOP';
console.log(livro2);

// livro2 e livro6 referenciam o mesmo obj

class TV {
    constructor(marca, tamanho) {
        this._marca = marca; // _marca seja uma propriedade interna!
        this._On = false;
        this._tamanho = tamanho;
        this._canal = 14; // de 14 até 83
        this._volume = 10; // de 0 até 100 (10 é um volume inicial arbitrário)
    }

    onbutton() {
        if (this._On) {
            this._On = false;
        } else {
            this._On = true;
        }
        return this._On;
    }

    irPara(canal) {
        // if (canal < 14 || canal > 83) {
        //     throw new Error('Canal inválido');
        // }
        if (canal > 83) this._canal = 83;
        else if (canal < 14) this._canal = 14;
        else this._canal = canal;

    }

    aumentarVolume() { // MÉTODO/OPERAÇÃO: respeitar a INTEGRIDADE
        if (this._volume < 100) { // regra de   validação
            this._volume = this._volume + 1; //     this._volume++;
        }
    }

    diminuirVolume() {
        if (this._volume > 0) {
            this._volume--;
        }
    }

    descerCanal() {
        if (this._canal > 14) {
            this._canal--;
        } else {
            this._canal = 83;
        }
    }

    subirCanal() {
        if (this._canal < 83) {
            this._canal++;
        } else {
            this._canal = 14;
        }
    }

    get canal() {
        return this._canal;
    }

    get volume() {
        return this._volume;
    }

    // GETTER/ACESSOR, parece um método,
    // MAS NÃO É UM MÉTODO! É UMA PROPRIEDADE!
    get marca() {
        return this._marca;
    }

    get tamanho() {
        return this._tamanho;
    }

    toString() {
        return `${this.marca} ${this.tamanho}"`;
    }
}

// instanciando um objeto TV
const tv1 = new TV('LG', 50);
console.log(tv1);
console.log(tv1.marca);
// tv1._marca = 'Samsung'; // possível, mas viola o "acordo"
console.log(tv1.canal); // 14
console.log(tv1.volume); // 10
console.log(tv1.volume); // 10
// OBJETO TEM CARACTERÍSTICAS/ATRIBUTOS/ESTADO
// OBJETO TEM COMPORTAMENTO/AÇÕES/OPERAÇÕES/MÉTODOS/VERBO!
tv1.aumentarVolume();
console.log(tv1.volume); // 11
tv1.aumentarVolume();
console.log(tv1.volume); // 12
for (let i = 0; i < 500; i++) tv1.aumentarVolume();
console.log(tv1.volume); // 100
tv1.diminuirVolume();
console.log(tv1.volume); // 99
console.log(tv1.canal); // 14
tv1.descerCanal();
console.log(tv1.canal); // 83
tv1.descerCanal();
tv1.descerCanal();
tv1.descerCanal();
console.log(tv1.canal); // 80
tv1.subirCanal();
console.log(tv1.canal); // 81

tv1.irPara(15); // metodo deve ser um verbo
console.log(tv1.canal); // 15
tv1.irPara(150); // Tornaria a tv inconsistente
console.log(tv1.canal); // 83
tv1.irPara(5); // Tornaria a tv inconsistente
console.log(tv1.canal); // 14

console.log(tv1.onbutton());
console.log(tv1.onbutton());
console.log(tv1.onbutton());
console.log(tv1.onbutton());
console.log(tv1.onbutton());
console.log(tv1.onbutton());