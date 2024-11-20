const fs = require('fs');

fs.writeFile('message.txt', 'Hallooooo yooo!!', (err) => {
    if (err) {
        throw err;
    }
    console.log("Meassage Saved!");
})

fs.readFile('./message.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
})