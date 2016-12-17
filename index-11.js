// find a word's definition using WordNet in Natural
//
// do not forget to install wordnet using `npm install wordnet-db`
//
var natural = require('natural');
var wordnet = new natural.WordNet();

var myWord = 'desert';

wordnet.lookup(myWord, function(results){
  results.forEach(function(result){
    console.log("\n");
    console.log(result.synsetOffset);   // unique identifier for a given definition
    console.log(result.pos);            // part of speech: grammatical role
    console.log(result.synonyms);
    console.log(result.gloss);          // word definition
  });
});
console.log();

// once we have a synset id, we can use it programmatically
wordnet.get(8522594, 'n', function(result){
  console.log(result.gloss);
});
