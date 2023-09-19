const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');
//console.log(sum([1,2,3])); used to find a +1 error
const testSum =
    jsc.forall("array nat", function(arr) {
        return JSON.stringify(sum(arr)) == JSON.stringify(arr.reduce(function(a, b) { return a + b; }, 0));
    });

jsc.assert(testSum);
