// does this at least barely work
const binarySearch = require('./index');
const assert = require('assert');

assert.strictEqual(typeof binarySearch, 'function');
console.log('its a function at least');

const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
    41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

// we expect the function to find the index of something we know
// is in the target array
const foundPrime = binarySearch(primes, 67);
const expectedIndex = primes.indexOf(67);
assert.strictEqual(foundPrime, expectedIndex);
console.log('it found what we expected it to');

const notFoundPrime = binarySearch(primes, 98);
assert.strictEqual(notFoundPrime, -1);
console.log('it did not find something we know is not there');

console.log('\r\n');
console.log('ya did it, the bare minimum tests pass');