function hola(name){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log(`Hola ${name}`);
            resolve(name);
        },1500);
    })
}

function hablar(name){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log("Bla bla bla...");
            resolve(name)
        },1000);
    });
}

function Adios(name){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log(`Adios ${name}`);
            resolve(name);
        },1500);
    }); 
}

console.log("Proceso iniciado ...");
hola('johan')
    .then(hablar)
    .then(Adios)
    .then(x=>Promise.reject("Error inesperado"))
    .then(()=>{
        console.log("Proceso terminado ...");
    })
    .catch(error => console.log(error) )
    
   