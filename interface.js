const fs = require('fs');
let obj = JSON.parse(fs.readFileSync('./hipsterCoffee.json', 'utf8'))
console.log(obj[0])



// console.log('This is after the read call');