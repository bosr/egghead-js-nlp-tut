// let's use a POS (part of speech) tagger, that will tag words with their grammatical roles

var natural = require('natural');
var Tagger = natural.BrillPOSTagger;

var myString = "Sys soldered the beautiful jewelry pieces".split(" ");

// the BrillPOSTagger needs additional configuration
var baseFolder = "./node_modules/natural/lib/natural/brill_pos_tagger";
var rules = baseFolder + "/data/English/tr_from_posjs.txt";
var lexicon = baseFolder + "/data/English/lexicon_from_posjs.json";
var defaultCategory = 'N';

var tagger = new Tagger(lexicon, rules, defaultCategory, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log(tagger.tag(myString));
  }
});
console.log("\n");

// tag meaning:
meaning = {
  "NNP": "proper noun",
  "VBN": "verb",
  "DT": "determinant",
  "JJ": "adjective",
  "NN": "noun",
  "NNS": "noun pluralized",
}
console.log(meaning);
