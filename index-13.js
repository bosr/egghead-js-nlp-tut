// include spell-check in text projects
//
var natural = require('natural');
var fs = require('fs');
var tokenizer = new natural.WordTokenizer();

var text = fs.readFileSync('data/lotsofwords.txt', 'utf-8');
var corpus = tokenizer.tokenize(text);
var spellcheck = new natural.Spellcheck(corpus);

// basic usage
console.log(spellcheck.isCorrect("birtday")); // returns false, of course
console.log(spellcheck.isCorrect("birthday")); // returns true, of course

console.log(spellcheck.getCorrections("birtday"));

// correct a sentence
var sentence = "tey hade truble fiinding th thng.".split(" ");
sentence.forEach(function(word){
  console.log(spellcheck.getCorrections(word));
});
console.log("\n\n");


// get best correction
sentence.forEach(function(word){
  console.log(spellcheck.getCorrections(word)[0]);
});
