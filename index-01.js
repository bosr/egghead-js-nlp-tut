var natural = require('natural');
var myString = "I'm surprised! I didn't know you could make it.";

var tokenizer = new natural.WordTokenizer();
console.log("using WordTokenizer");
console.log(tokenizer.tokenize(myString));
console.log("\n");


// the WordPunctokenizer preserves the punctuation marks
var tokenizer = new natural.WordPunctTokenizer();
console.log("using WordPunctTokenizer");
console.log(tokenizer.tokenize(myString));
console.log("\n");


// the TreeBankWordTokenizer tries to preserve some of the semantics
var tokenizer = new natural.TreebankWordTokenizer();
console.log("using TreebankWordTokenizer");
console.log(tokenizer.tokenize(myString));
console.log("\n");


// the RegexpTokenizer can use a regular expression (here breaking strings on punctuation)
var tokenizer = new natural.RegexpTokenizer({pattern: /[!?.]/});
console.log("using RegexpTokenizer");
console.log(tokenizer.tokenize(myString));
console.log("\n");


// Observe the outputs
