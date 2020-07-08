var fs = require("fs");

// Syncronous
// var readMe = fs.readFileSync("readMe.txt", "utf8");
// fs.writeFileSync("writeMe.txt", readMe);
// console.log(readMe);

// Asyncronous
// fs.readFile("readMe.txt", "utf8", (err, data)=>{
//     console.log(data)
// })

//to delete file
// fs.unlink("writeMe.txt")

//to create directory
// fs.mkdirSync("stuff")

//to remove directory.. remove the sync word to make it asyncronous
// fs.rmdirSync("stuff")

fs.mkdir('stuff', function(){
    fs.readFile('readMe.txt', 'utf8', function(err, data){
        console.log('error: ', err)
        fs.writeFile('./stuff/writeMe.txt', data, function(error, file){
            console.log('error2: ',)
        })
    })
})