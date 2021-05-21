var assert = require('assert');
var lzjb = require('../');

describe('Hello World!!!', function () {
    var s = "Hello World!!!Hello World!!!Hello World!!!Hello World!!!";
    for (var i = 0; i < 10; i++)
        s += s;
    s = Buffer.from(s, 'utf8');

    var c = lzjb.compressFile(s);
    c = Buffer.from(c);
    it('should be smaller when compressed', function () {
        assert.ok(c.length < s.length, c);
    });

    var d = lzjb.decompressFile(c);
    d = Buffer.from(d);

    it('should decompress to the original string', function () {
        assert.ok(d.toString('utf8') === s.toString('utf8'), d.toString('utf8'));
    });
});
