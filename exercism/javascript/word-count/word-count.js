
var words = function(input) {

	var ObjectToOutput = {};
	var userInput = input.trim();
	var wordsToCount = userInput.split(" ");	
	
		for (word in wordsToCount) {
			var filter = new RegExp(wordsToCount[word], "g");
			var matches = userInput.match(filter);
			ObjectToOutput[wordsToCount[word]] = matches.length;
		} 
		return ObjectToOutput;
};

module.exports = words;