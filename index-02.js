var natural = require('natural');
var stemmer = natural.PorterStemmer;

// stemming means taking the root of the words
// the Porter stemmer is for the English language

console.log(stemmer.stem("mangoes"));
console.log(stemmer.stem("hearing"));
console.log(stemmer.stem("sadness"));
console.log("\n");

console.log(stemmer.stem("cupcakes"));
console.log(stemmer.stem("awaking"));
console.log(stemmer.stem("wrongly"));
console.log("\n");

// Natural also comes with a Russion stemmer
var stemmer = natural.PorterStemmerRu;
console.log(stemmer.stem("мезонинов") + "\n");  // maisonettes

// and a Spanish stemmer
var stemmer = natural.PorterStemmerEs;
console.log(stemmer.stem("jugaría") + "\n");


// tokenizing many words
var stemmer = natural.PorterStemmer;
var myString = "I am baking cakes in the ovens.";
console.log(stemmer.tokenizeAndStem(myString) + "\n");


// Natural also has the LancasterStemmer, which is much more aggressive, but works well for large corpuses of text.
var stemmer = natural.LancasterStemmer;
console.log(stemmer.tokenizeAndStem(myString) + "\n");
