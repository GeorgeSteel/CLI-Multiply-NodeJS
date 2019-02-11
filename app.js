const { createFile, listTable } = require('./multiply/multiply');
const { argv } = require('./config/yargs');
const colors = require('colors');

let command = argv._[0];
switch (command) {
    case 'list':
        listTable(argv.base, argv.limit)
            .then(table => console.log(table))
            .catch(err => console.error(err))
        break;
    case 'create':
        createFile(argv.base, argv.limit)
            .then(file => console.log(`Created File: ${file}`.green))
            .catch(err => console.error('Failed'.red, err))
        break;

    default:
        console.log('Invalid command');
        break;
}

