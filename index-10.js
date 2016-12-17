// identify the most important words in a document
var natural = require('natural');
var tfidf = new natural.TfIdf();

// documents grabbed manually from the ge.com/digital website
var documents = [
  "Predix, the operating system for the Industrial Internet, is powering digital industrial businesses that drive the global economy. By connecting industrial equipment, analyzing data, and delivering real-time insights, Predix-based apps are unleashing new levels of performance of both GE and non-GE assets.",
  "With broad ecosystem support, Predix-based apps are unleashing new levels of performance of both GE and non-GE assets. Our App Showcase provides a sample of market-ready industrial apps by GE, partners, and developers who are committed to advancing the new digital industrial era.",
  "Continuous data acquisition, coupled with timely response demands brilliantly robust and scalable technologies at the edge and onward to the cloud. Predix is purpose-built to offer software services that deliver actionable intelligence, transformative insights, and effective control—from the edge, to the data center, and back.",
  "Industrial challenges require the global real-time big data analytics provided by the GE Predix platform.",
  "SmartSignal from GE Digital detected signs of machine stress on particular equipment.  The Rapid Response team in GE’s Industrial Performance & Reliability Center notified the customer of this stress and began briefing the customer during weekly calls.  Rather than waiting until a hard alarm was tripped at the customer facility that would have induced reactive maintenance, the IPRC presented the customer with a range of potential root causes, upon which the customer inspected the equipment to determine which of the causes was underlying.  During inspection, the customer discovered the cause of machine stress.",
  "GE and our customers benefit everyday from the Industrial Internet of Things (IIoT). Browse our stories to learn how companies like yours can leverage digital solutions to transform and improve operations today.  If you’d like to share your story, find out how.",
  "Monitoring hundreds of sensors per turbine on a daily basis, GE’s Asset Performance Management detected the change in operational parameters and generated daily reports revealing the specifics of this irregularity.  In turn, GE’s IPRC engineers drew upon their depth of experience with Power analytics to acknowledge the severity of the increased spread and proactively notified the customer of this issue before it triggered equipment failure.   As the spread increased, GE’s IPRC engineers recommended, during a weekly status update call, that the customer perform an inspection to determine the root cause of the increased spread.  The inspection uncovered a defect in the equipment, so the customer planned downtime during which they replaced the faulty piece.  Upon replacement, the operational parameter returned to model-predicted values.",
];

documents.forEach(function(item) {
  tfidf.addDocument(item);
});

// Term Frequency - Inverse Document Frequency
// detailed computation example for the term 'Industrial'
// If you look at the documents, the term 'Industrial appears in 5 documents, and in particular it appears twice in the 2nd document
var N = documents.length;
var term_occurences_in_2nd_doc = 2;
var term_n_docs = 5

var tf = term_occurences_in_2nd_doc;
var idf = 1 + Math.log(N / (1 + term_n_docs));
var combinedTfidf = tf * idf;
console.log(combinedTfidf);

// you now can check that the tf-idf computed by Natural gives the exact same result
tfidf.tfidfs('Industrial', function(docIndex, measure){
  console.log("Document", docIndex, ":", measure);
});
console.log();



// finally, let's list the most important terms in each document
// let's look at document 2
tfidf.listTerms(2).forEach(function(item){
  console.log(item.term, ":", item.tfidf);
});


// serialize tfidf results
var serialized = JSON.stringify(tfidf);
var newtfidf = new natural.TfIdf(JSON.parse(serialized));
