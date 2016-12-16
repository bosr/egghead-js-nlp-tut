// using a naive Bayes classifier (NBC)

var natural = require('natural');
var classifier = new natural.BayesClassifier();

// Here is some data

data = [
{text: 'RE: Canadian drugs now on sale', label: 'spam'},
{text: 'Earn more from home', label: 'spam'},
{text: 'Information now available!!!', label: 'spam'},
{text: 'Earn easy cash', label: 'spam'},
{text: 'Your business trip is confirmed for Monday the 4th', label:'notspam'},
{text: 'Project planning - next steps', label: 'notspam'},
{text: 'Birthday party next weekend', label: 'notspam'},
{text: 'Drinks on Monday?', label: 'notspam'},
{text: 'Drugs for cheap', label: 'spam'},
{text: 'Next deadline due Monday', label: 'notspam'},
{text: 'Meet me at home?', label: 'notspam'},
{text: 'Hang out with someone near you', label: 'spam'}
]

// let's first split this into training data and test data
// usually a good rule of thumb is about 60-80% for the training set
var trainingData = data.slice(0, 8);
var testData = data.slice(8, 12);
console.log("- training data");
console.log(trainingData);
console.log();
console.log("- training data");
console.log(testData);
console.log();


// add each data sample to the classifier (that's the js way)
trainingData.forEach(function(item) {
  classifier.addDocument(item.text, item.label);
});

// then train the model
classifier.train();

testData.forEach(function(item) {
  // let's make a predicted label
  var predictedLabel = classifier.classify(item.text);
  console.log(item.text, '  (actual: ' + item.label + ')');
  console.log("predLabel: ", predictedLabel);
  console.log(classifier.getClassifications(item.text));  // class probabilities
});
console.log();

// the classifier splits each doc sample into words and learns their occurence probability

// analysis: 'meet me at home' is labelled spam probably because home appeared often in spam emails
