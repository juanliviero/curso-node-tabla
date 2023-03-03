const fs = require('fs');
const { argv } = require('process');
const colors = require ('../config/colors')

const crearArchivo = async( base,listar,multiplicador) =>{
    console.log(argv);
    try {

        let salida = ''; // creamos una variable "salida" , la que recibirá lo que se va a imprimir 

        for (let i = 1; i <= multiplicador;i++) {        
            salida += `${base} x ${i} = ${base*i}\n`; 
        }

        if (listar == false) {
              
              fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

              return `tabla-${base}.txt`
            
        } else {
       
            console.log('===============');
            console.log(` Tabla del ${base}   `);
            console.log('===============');
        
            // let salida = ''; // creamos una variable "salida" , la que recibirá lo que se va a imprimir 
        
              console.log(colors.red(salida) );
              
              fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

              return `tabla-${base}.txt`            
        }

        

        
    } catch (error) {
        throw 'No fue posible realizar el calculo'
    }
}

// en node utilizamos el objeto global de modulo que existe en node 
// vamsos a explortar un objeto , el objeto tendra una propiedad que le pondremos el nombre de "CrearArchivo"
// la cual apuntará a la funcion crearArchivo y desde app podemos acceder a este objeto

module.exports = {
    //crearArchivo: crearArchivo

    crearArchivo
     
    // en EC6 es redundante que la funcion y la propiedad tenga el mismo nombre
    // por lo que se puede llamar directamente a la funcion
}