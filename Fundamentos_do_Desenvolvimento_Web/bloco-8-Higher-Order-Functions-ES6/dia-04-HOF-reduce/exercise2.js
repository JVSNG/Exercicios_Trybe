const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
    return books.reduce((acc, currentBook, index, array) => {
        if (index === 0) return currentBook.author.name;
        else if (index === array.length -1) return `${acc}, ${currentBook.author.name}.`
        return `${acc}, ${currentBook.author.name}`;
    }, '');
}

console.log(reduceNames());







const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers)); // 800
console.log(Math.min(...randomNumbers)); // 5








// Faça uma lista com as suas frutas favoritas
const specialFruit = ['maçã', 'banana', 'kiwi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['granola', 'mel', 'suco de laranja'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));











const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring
const [greeting, greetingFunction] = saudacoes;
greetingFunction(greeting);









let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida, animal, bebida] = [bebida, comida, animal];

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo









let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[impar, impar, impar, numerosPares] = numerosPares;

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo