const readline = require('readline')
const fs = require('fs')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Who are you? \n", (answer => {
    console.log(`Thank you for your valuable feedback ${answer}`)
    fs.writeFile('greeting.txt', 'Hello ' + answer, err => {
        if (err) {
            console.log("Error: " + err.message)
        }
    })
    rl.close();
}))