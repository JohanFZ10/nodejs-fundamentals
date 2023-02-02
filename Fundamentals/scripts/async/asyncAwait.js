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

async function main(){
    await hola('johan');
    await hablar('johan');
    await hablar('johan');
    await hablar('johan');
    await Adios('johan');
    console.log("Fin de la conversacion ...");
}
console.log("Inciando proceso ...");
main();
console.log("Finalizando proceso ...");