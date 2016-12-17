// let's load a serialized classifier and use it for one example text
//
var natural = require('natural');

natural.BayesClassifier.load('classifier.json', null, function(err, classifier) {
  if (err) {
    console.log(err);
  } else {
    var testComment = "is this about the sun and moon?";  // this is obviously about space
    predictedLabel = classifier.classify(testComment);
    console.log("predictedLabel:", predictedLabel);
    console.log();

    proba = classifier.getClassifications(testComment);
    console.log("proba:", proba);
  }
});


// if you see 'sci.space', it means it works correctly
