var fs = require('fs');
//never call readFileSync in a node express/webserver
//node is designed to work async
var contents = fs.readFileSync('package.json').toString();
console.log(contents);

fs.readFile('package.json', function (err, buf) {
    console.log(buf.toString());
    console.log("Async readFile() called.")
});