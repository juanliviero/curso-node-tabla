const colors = require ('./colors')


const argv = require ('yargs')
                .option('b',{
                    alias:'base',
                    type: 'number',
                    demandOption: true,
                    describe: ' Es la base de la tabla de multiplicar '.describeTheme

                })
                .option('l',{
                    alias:'listar',
                    type:'boolean',
                    demandOption:false,
                    default:false,
                    describe: ' Muestra la tabla en la consola '.describeTheme
                })
                .option('m',{
                    alias:'multiplicador',
                    type:'number',
                    demandOption:true,
                    describe: ' Modifica el multiplicador de la base '.describeTheme
                })



                .check( (argv,options) => {
                    if (isNaN(argv.b) || isNaN(argv.m) ) {
                        throw 'La base y el multiplicador deben ser un numero'.red
                    }
                    return true
                })
                .argv;

module.exports = argv;