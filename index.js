const readline = require('readline')
const fs = require('fs')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const writeGreetingToFile = (name) => {
    fs.writeFile('greeting.txt', 'Hello ' + name, err => {
        if (err) {
            console.log("Error: " + err.message)
        }
    })
}

rl.question("Who are you? \n", (name => {
    console.log(`Thank you for your valuable feedback ${name}`)
    rl.close();
    writeGreetingToFile(name)
}))