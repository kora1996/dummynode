// const sayHi = require('./module')
// const names = require('./cons')
// console.log(names)

// sayHi("gill")
// sayHi(names.john)
// sayHi(names.susan)

const path = require('path')

const filePath = path.join('/content', 'sub', 'text.txt')
console.log(filePath);

const base = path.basename(filePath)
console.log(base);

const absolute = path.join(__dirname, filePath)
console.log(absolute);
console.log(__dirname);