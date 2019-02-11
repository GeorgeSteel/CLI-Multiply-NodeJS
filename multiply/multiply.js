const fs = require('fs');
const colors = require('colors');

let data = '';

let createFile = (base, limit) =>{
    return new Promise((res, rej) =>{
        if (!Number(base)) {
            rej('Is not a number');
            return;
        }

        for (let i = 1; i <= limit; i++) {    
            data += `${base} * ${i} = ${base*i} \n`;          
        }

        fs.writeFile(`./tables/${base}table.txt`, data, err =>{
            if (err) 
                rej(err);
            else
                res(`${base}table.txt`);
        });
    });
}

let listTable = (base, limit) => {
    return new Promise((res, rej) => {
        if (!Number(base)) {
            rej('Is not a number');
            return;
        }

        console.log('============='.green);
        console.log(`${base} table`.green);
        console.log('============='.green);

        for (let i = 1; i <= limit; i++) {    
            data += `${base} * ${i} = ${base*i} \n`;          
        }
        res(data);
    });
}

module.exports = {
    createFile,
    listTable
}
