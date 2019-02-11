const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
                        .command('list', 'print in CLI the multiply tables', opt)
                        .command('create', 'make a file with the multiply tables', opt)
                        .help()
                        .argv;

module.exports = { argv }