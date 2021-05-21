const freeze = require('./lib/freeze.js')();
const Iuppiter = require('./lib/Iuppiter.js');

module.exports =  freeze({
    version: "0.0.1",
    compressFile: Iuppiter.compressFile,
    decompressFile: Iuppiter.decompressFile
});
