var natural = require('natural');
var fs = require('fs');  // because we will use files on the filesystem
var classifier = new natural.BayesClassifier();
// var classifier = new natural.LogisticRegressionClassifier();

// we will try to classify internet comments as related to science or to politics

// first import training data (already downloaded in this repo)
// (source: http://ana.cachopo.org/datasets-for-single-label-text-categorization)
// The newsgroup files are available in data/ng-{train,test}.json
// I reduced the number of newgroups to 2 classes (sci.space, and talk.politics.misc)

process.stdout.write("Loading training data... ");
var startTime = new Date();
fs.readFile('data/ng-train.json', 'utf-8', function(err, data) {
  if (err) {
    console.log(err);
  } else {
    var trainingData = JSON.parse(data);
    var loadingTime = (new Date() - startTime) / 1000.0;
    console.log("ok", "(" + loadingTime, "sec)");

    train(trainingData);
  }
});

function train(trainingData) {
  process.stdout.write("Training... ");
  var startTime = new Date();
  trainingData.forEach(function(item) {
    classifier.addDocument(item.text, item.label);
  });
  classifier.train();
  var trainingTime = (new Date() - startTime) / 1000.0;
  console.log("ok", "(" + trainingTime, "sec)");
  loadTestData();
}


function loadTestData() {
  process.stdout.write("Loading test data... ");
  var startTime = new Date();
  fs.readFile('data/ng-test.json', 'utf-8', function(err, data) {
    if (err) {
      console.log(err);
    } else {
      var testData = JSON.parse(data);
      var loadingTime = (new Date() - startTime) / 1000.0;
      console.log("ok", "(" + loadingTime, "sec)");

      test(testData);
    }
  });
}

function test(testData) {
  process.stdout.write("Testing... ");
  var startTime = new Date();
  var numCorrect = 0;  // count correct predictions
  testData.forEach(function(item) {
    var predictedLabel = classifier.classify(item.text);
    if (predictedLabel == item.label) {
      numCorrect++;
    }
  });
  var testTime = (new Date() - startTime) / 1000.0;
  console.log("ok", "(" + testTime, "sec)");

  console.log("precision:", numCorrect / testData.length);
}
