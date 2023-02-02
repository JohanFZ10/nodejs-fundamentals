const fs = require('fs');

let content = "Este es el contenido del nuevo archivo creado por el modulo filesystem de Node";

function readFile(path, callback){
    fs.readFile(path, function(err, data){
        if(err){
            return callback(err);
        }
        callback(null, data.toString());
    });
} 
function createFile(path, content, callback){
    fs.writeFile(path, content, function(err){
        if(err){
            return callback(err);
        }else{
            callback("File created successfully");
        }
    });
} 
function deleteFile(path, callback){
    fs.unlink(path, function(err){
        if(err){
            return callback(err);
        }else{
            callback("File deleted Successfully");
        }
    });
} 

console.log("Iniciando proceso ...");
readFile(__dirname+'/file-1.txt',console.log);
createFile(__dirname+'/file-2.txt',content, console.log);
deleteFile(__dirname+'/file-2.txt',console.log);
console.log("Ultima linea de codigo ...");