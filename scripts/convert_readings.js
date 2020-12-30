const readline = require('readline')
const includeFile = 'hanja_reading.html'
const rl = readline.createInterface({input: process.stdin})
rl.on('line', (line) => {
    const result = line.replace(/\[([^\]\|]+)\|([^\]\|]+)\]/g, (match, hanja, hangul) => `{% include ${includeFile} hanja="${hanja}" reading="${hangul}" %}`)
    console.log(result)
})