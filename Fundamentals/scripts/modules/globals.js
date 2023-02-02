// En el objeto global, esta un resumen de las funcionalidades integradas en NODE
// console.log(global);

let counter = 0;
var timer = setInterval(function() {
    if(counter == 3){
        clearInterval(timer);
    }
    console.log("Enviando mensaje");
    counter++;
},1000);


console.log(__dirname);
console.log(__filename);