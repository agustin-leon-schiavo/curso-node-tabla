const argv = require('./config/yargs');
const { crearArchivo } = require('./helpers/multiplicar');




console.clear();

crearArchivo( argv.b, argv.l, argv.hasta )
    .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
    .catch( err => console.log( err ) );
