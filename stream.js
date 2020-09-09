var fs = require('fs')
fs.readFile('./resource.json', (err, data) => {
    if (err) {
        console.log('error: ', err.message)
    } else {
        console.log(data)
    }
})
var stream = fs.createReadStream('./resource.json')
stream.on('data', (chunk) => {
    console.log('data:', chunk)
})
stream.on('end', () =>{
    console.log('end')
})
