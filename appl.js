var http = require("http");

var server = http.createServer(function(req, res){
    res.writeHead(200, {'conteny-type' : 'text/plan'});
    res.end("Hello Node");
});

server.listen(3000, '127.0.0.1');
console.log("Server is running!!");

var time =0;
var timer = setInterval (function(){
    time +=2;
    console.log(time+' sec have passed');
    if(time > 7){
        clearInterval(timer);
    }
}, 2000);

console.log(__dirname);
console.log(__filename);

var hello = require('./hello.js');
console.log(hello.sayHello());
console.log(hello.sayGoodBye());

var fs = require('fs');
var read_string = fs.readFileSync('test.txt', 'utf8');

console.log(read_string);

fs.writeFileSync("test2.txt", read_string);

// var fs =require('fs');
// var read_strings = fs.readFile('test3.txt', 'utf8', function(err, data){
//     if(err)
//     return console.error(err);
//     console.log(data);
// });
// console.log("Data is read");

// fs.writeFile('test4.txt', read_strings, function(err, data){
//     if(err)
//     console.error(err);
//     console.log(data);
// });
// console.log("Successfull!!!");

// var fs = require('fs');
// fs.unlinkSync('test3.txt');
// var folder = ('/Node/Hello/test4.txt')
// fs.unlinkSync(folder, err =>{
//     console.error(err);
// });

// console.log("Done!!!");

// var fs = require('fs');

// fs.mkdir('Bilal', function(){
//     fs.writeFile('./Bilal/myfriend.txt', "He is friend to me.");
// });

// var fs = require('fs');
// var folder = ('./Node/Hello/Bilal');
// fs.unlink(folder, err =>{
//     console.error(err);
// })

var mysql = require('mysql');
var con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "user"
});

con.connect(function(err){
    if (err) throw err;
    console.log("Localhost Connected!");
    // con.query("CREATE DATABASE user", function (err, result){
    //     if (err) throw err;
    //     console.log("Database Created");


    // });
    // var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    // con.query(sql, function (err, result) {
    //   if (err) throw err;
        //console.log("Table created");
        // var sql = "INSERT INTO customers (name, address) VALUES ('Khalil', 'Chitral')";
        // console.log("5th Record Inserted!!");


        
         con.query("SELECT * FROM customers", function (err, result, fields){
            if (err) throw err;
            console.log(result);
        });
    });

