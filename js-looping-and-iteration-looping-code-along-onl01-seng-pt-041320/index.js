function writeCards(names, event) {
let messages = []
for (let i = 0; i < names.length; i++) {
   messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
}
return messages;
}

function coundDown(number) {
    while (number > 0) {
        console.log(number)
        number --
    }
    console.log(number)
}
