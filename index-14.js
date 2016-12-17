// check if words sound alike using Natural
//
var natural = require('natural');


// let's use two famous analyzers
var soundex = natural.SoundEx;  // 1900's, uses the first letter and drops vowels
var metaphone = natural.Metaphone;  // recent complex

var word1 = "pair";
var word2 = "pear";

console.log(soundex.compare(word1, word2));
console.log(metaphone.compare(word1, word2));

console.log(soundex.process(word1));
console.log(soundex.process(word2));
console.log(metaphone.process(word1));
console.log(metaphone.process(word2));
console.log("\n\n");



var word1 = "write";
var word2 = "right";

console.log(soundex.compare(word1, word2));
console.log(metaphone.compare(word1, word2));

console.log(soundex.process(word1));
console.log(soundex.process(word2));
console.log(metaphone.process(word1));
console.log(metaphone.process(word2));
