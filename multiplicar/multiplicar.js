//const fs = require('fs');
// const fs = require('express');
// const fs = require('./fs');

const fs = require('fs');
const colors = require('colors/safe');


//'module.exports.' es una manera de exportar modulos.
module.exports.listarTabla = ((base, limite = 10) => {

    console.log('=================================='.green);
    console.log(`Tabla del ${base}`.green);
    console.log('=================================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i }`);
    }
});


module.exports.crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += ` ${base} * ${i} = ${base * i } \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });
    });
}

//Una forma de exportar.
// module.exports = {
//     crearArchivo
// }