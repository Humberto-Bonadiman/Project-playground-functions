// Desafio 1
const compareTrue = (value1, value2) => (!!((value1 === true && value2 === true)));

// Desafio 2
const calcArea = (base, height) => (base * height) / 2;

// Desafio 3
function splitSentence(string) {
  let removedor = string.split(' ');
  // string split vista no site da W3 Schools
  // Fonte: https://www.w3schools.com/jsref/jsref_split.asp
  return removedor;
}
console.log(splitSentence('go Trybe'));

// Desafio 4
const concatName = (arrayDeString) =>
  `${arrayDeString[arrayDeString.length - 1]}, ${arrayDeString[0]}`;
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
const footballPoints = (wins, ties) => (3 * wins) + (1 * ties);
console.log(footballPoints(3, 5));

// Desafio 6
const highestCount = (numeros) => {
  const filterNumber = numeros.filter((numero) => numero === Math.max(...numeros));
  return filterNumber.length;
};

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const distanciaCat1 = Math.abs(cat1 - mouse);
  const distanciaCat2 = Math.abs(cat2 - mouse);
  if (distanciaCat1 > distanciaCat2) {
    return 'cat2';
  }
  if (distanciaCat2 > distanciaCat1) {
    return 'cat1';
  }
  if (distanciaCat2 === distanciaCat1) {
    return 'os gatos trombam e o rato foge';
  }
}
console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz(array) {
  let fizz = [];
  for (index in array) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      fizz.push("fizzBuzz")
    } else if (array[index] % 3 === 0) {
      fizz.push("fizz")
    } else if (array[index] % 5 === 0) {
      fizz.push("buzz")
    } else {
      fizz.push("bug!")
    }
  }
  return fizz;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(string) {
  parametros = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let stringFrase = '';
  for (let index in string) {
    if (string[index] = parametros[string[index]]) {
      stringFrase += parametros[string[index]];
    } else {
      stringFrase += string[index];
    }
  }
  return stringFrase;
}
console.log('hello word');

// Desafio 10
function decode(text) {
  parameters = {
    "1": "a",
    "2": "e",
    "3": "i",
    "4": "o",
    "5": "u",
  };
  let textFrase = '';
  for (let indice in text) {
    if (text[indice] = parameters[text[indice]]) {
      textFrase += parameters[text[indice]]
    } else {
      textFrase += text[indice];
    }
  }
  return textFrase;
}
console.log(decode('h2ll4 w4rd!'));

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
