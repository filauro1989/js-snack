// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi all’array che ha meno elementi
// fino a quando ne avrà tanti quanti l’altro.

// let array1 = [
//     1,
//     5,
//     23,
//     4,
//     6,
//     12
// ];
// let array2 = [
//     5,
//     7,
//     9
// ];

// console.log(array1);
// console.log(array2);


// if (array1.length > array2.length) {

//     while(array1.length != array2.length) {
//         array2.push('yo');
//     };

// } else if (array1.length < array2.length) {

//     while(array1.length != array2.length) {
//         array2.push('yo');
//     };

// }


// console.log(array1);
// console.log(array2);

// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

// let zucchine = [
//     {   
//         "type" :"a", 
//         "weight" : 100, 
//         "length" : 10
//     },
//     {   
//         "type":"b", 
//         "weight":200, 
//         "length":12
//     },
//     {   
//         "type":"c", 
//         "weight":140, 
//         "length":14
//     },
    // {   
    //     "type":"d", 
    //     "weight":150, 
    //     "length":6
    // },
    // {   
    //     "type":"r", 
    //     "weight":124, 
    //     "length":8
    // },
    // {   
    //     "type":"gfg", 
    //     "weight":154, 
    //     "length":4
    // },
    // {   
    //     "type":"j", 
    //     "weight":65, 
    //     "length":42
    // },
    // {   
    //     "type":"k", 
    //     "weight":55, 
    //     "length":17
    // },
    // {   
    //     "type":"i", 
    //     "weight":170, 
    //     "length":9
    // },
    // {   
    //     "type" : "o", 
    //     "weight" : 74, 
    //     "length" : 7
    // },
// ]


// let sumCorte = 0;
// let sumLunghe = 0;

// let zucchineCorta = [];
// let zucchineLunghe = [];

// for (let index = 0; index < zucchine.length; index++) {
//     let element = zucchine[index];
    
//     if (element.length < 15) {
//         zucchineCorta.push(element);
//     } else {
//         zucchineLunghe.push(element);
//     }
//     // console.log('corta', zucchineCorta);
//     // console.log('lunghe', zucchineLunghe);

//     for (let i = 0; i < zucchineCorta.length; i++) {
//         const element = zucchineCorta[i];

//         sumCorte += element.weight;
        
//     }
//     for (let i = 0; i < zucchineLunghe.length; i++) {
//         const element = zucchineLunghe[i];

//         sumLunghe += element.weight;
        
//     }
// }
// console.log(sumCorte);
// console.log(sumLunghe);

// Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

// let zucchine = [
//     1,
//     2,
//     3
// ];

// let pere = [
//     'a',
//     'b',
//     'c'
// ];

// let merge = [];

// for (let index = 0; index < zucchine.length; index++) {
//       const element1 = zucchine[index];
//       const element2 = pere[index];

//       console.log(element1, element2);
//       merge.push(element1, element2);
// }


// console.log('merge', merge);

// function merging(array1, array2) {

//     let newArray = [];

//     for (let index = 0; index < array1.length; index++) {
//         const element1 = array1[index];
//         const element2 = array2[index];
  
//         newArray.push(element1, element2);
//     }

//     return newArray;
// }


// Partendo da questo array e aggiungiamo a  tutti gli elementi la proprieta age aggiungendo un numero casuale da 3 a 50.
// const arrayObj = [
//   {name: ‘Poppy’, type: ‘tshirt’, color: ‘red’},
//   {name: ‘Jumping’, type: ‘occhiali’, color: ‘blue’},
//   {name: ‘CrissCross’, type: ‘scarpe’, color: ‘black’},
//   {name: ‘Jenny’, type: ‘borsa’, color: ‘pink’},
// ];
// Poi stampiamo in pagina

const arrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'}
];

let container = document.querySelector('.container');

arrayObj.forEach((element) => {
    element.age = getRandomIntInclusive(3, 50);
    const div = document.createElement("div");
    div.append('age' + ' ' + element.age);
    container.append(div);
});


console.log(arrayObj);

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}



