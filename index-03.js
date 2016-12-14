var natural = require('natural');

// pluralize / singularize
var nounInflector = new natural.NounInflector();
console.log(nounInflector.pluralize("mouse"));
console.log(nounInflector.singularize("tomatoes"));
console.log("\n");


// count inflector
var countInflector = natural.CountInflector;
for (var i = 1; i <= 10; i++) {
  console.log(countInflector.nth(i));
}
