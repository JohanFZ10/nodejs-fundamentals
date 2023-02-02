// Cuando tenemos funciones que no son asincronas, o que no se describen ni con callback, ni son
// promesas, ni tampoco funciones Async/Await, es necesario utilizar la sintaxis try/catch para
// tratar los errores

let i = 0;

function ShowError(error){
    console.error("*****************************");
    console.error("****** ERROR DETECTED *******")
    console.error("*****************************");
    console.error(error.message);
    console.error("*****************************");
}

function main(){
    return 3 + x;
}

function timer (callback){
    setInterval(function() {
        try{
            if(i === 5){
                let a = i + z;
            }
            console.log("Hola");
            i++;
        }catch(error){
            callback(error);
        }
    },1000);
}
function timer1 (){
    setInterval(function() {
        console.log("Timer1");
    },3000);
}

timer(ShowError);
timer1();
try {
    main();
}catch(error){
    ShowError(error);
}