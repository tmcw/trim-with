var test = require('tape');
var trimWith = require('./');

test('trimWith', function(t) {
    t.deepEqual(trimWith([0,1,0], function(e) {
        return !e;
    }), [1]);
    t.deepEqual(trimWith([0,0,0,1], function(e) {
        return !e;
    }), [1]);
    t.deepEqual(trimWith([0,0,0,1,1,0], function(e) {
        return !e;
    }), [1,1]);
    t.deepEqual(trimWith([0,1,0,1,1,0], function(e) {
        return !e;
    }), [1,0,1,1]);
    t.deepEqual(trimWith([1,0,0,0,0,1], function(e) {
        return e;
    }), [0, 0, 0, 0]);
    t.deepEqual(trimWith([1], function(e) {
        return !e;
    }), [1]);
    t.deepEqual(trimWith([0], function(e) {
        return !e;
    }), []);
    t.end();
});
