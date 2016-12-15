var natural = require('natural');
var NGrams = natural.NGrams;

var myString = "This little piggy went to market, this little piggy stayed home, this little piggy head roads beef, this little piggy had none. This little piggy went wee wee wee all the way home!";

// bi-gram stands for couple of adjacent words, tri-gram for triplets of adjacent words, n-grams for ...
console.log(NGrams.bigrams(myString));
console.log("\n");

console.log(NGrams.trigrams(myString));
console.log("\n");

console.log(NGrams.ngrams(myString, 4));
console.log("\n");


// using padding helps capture the first and last words
console.log(NGrams.ngrams(myString, 3, "[S]", "[E]"));
console.log("\n");
