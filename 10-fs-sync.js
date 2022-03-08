const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first, second);

writeFileSync('./content/result-sync.txt', `this is the result: 
${first} 
${second}`,
// 'a' is for 'additional mode'
// default is 'w' for over write
{ flag:'a'})
