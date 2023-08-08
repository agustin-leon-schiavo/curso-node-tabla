const fs = require('fs');


const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

    try {
        
        let salida = '';
        
        for (i=1; i <= hasta; i++) {
            salida += `${ base } x ${ i } = ${ base * i }\n`;
        }
        
        if ( listar ) {
            console.log('=============================================');
            console.log(`   Tabla del ${ base } hasta el ${ hasta }   `);
            console.log('=============================================');
            
            console.log(salida);
        }        
        
        fs.writeFileSync( `./salida/tabla-${ base }-hasta-${ hasta }.txt`, salida );
        
        return `Archivo tabla-${ base }-hasta-${ hasta }.txt`;
        
    } catch (err) {
        throw err;
    }
    
    } 


module.exports = {
    crearArchivo,
}
