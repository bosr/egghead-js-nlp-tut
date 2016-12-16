// measure similarity from 0 to 1
var natural = require('natural');

var string1 = "close";
var string2 = "closer";
var string3 = "ffgghhiijkk";

// using various distances, let's compare string1, string2 and string3

// JaroWinkler distance: n_common / n_unique letters but weighting for heavily characters at the beginning than at the end
console.log("JaroWinklerDistance");
console.log(natural.JaroWinklerDistance(string1, string2));
console.log(natural.JaroWinklerDistance(string1, string3));
console.log();

// if we simply add a "c" to string3, then the similarity increases a lot
// JaroWinklerDistance works best for simple short words, names, deleting duplicates
var string4 = "c" + string3;
console.log(natural.JaroWinklerDistance(string1, string2));
console.log(natural.JaroWinklerDistance(string1, string4));
console.log();


// Levenshtein distance: minimum number of edits
console.log("LevenshteinDistance");
console.log(natural.LevenshteinDistance(string1, string2));
console.log(natural.LevenshteinDistance(string1, string3));
console.log();


// DiceCoefficient distance: num total bigrams in common / num total bigrams
// close -> cl, lo, os, se
// closer -> cl, lo, os, se, er
// 8 bigrams in common, 9 total bigrams -> 8 / 9 = 0.8888888888
console.log("DiceCoefficient");
console.log(natural.DiceCoefficient(string1, string2));
console.log(natural.DiceCoefficient(string1, string3));
console.log();

// usually, using Dice Coefficient, similarity < 0.2 means not similar, and >= 0.2 means pretty similar
