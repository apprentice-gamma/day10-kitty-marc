//console.log("You got this.");

var words = function() {};

var ObjectToOutput = {};

words.prototype.count = function(input) {
	
	var userInput = input.trim();
	var wordsToCount = userInput.split(" ");	

	//console.log(wordsToCount);

	//FIGURE OUT HOW MANY TIMES A WORD APPEARS:
	//Here are all the different words in an array. 
	//For each word in the array, go through this string and see if you find a match.
	//The matches are returned in an array. 
	//Count the length of the array and return it.
	var matches;
	function numberOfMatches(wordsToCount, origString){
		var matches;
		var filter; 
		for (word in wordsToCount) {
			filter = new RegExp(wordsToCount[word], "g");
			//console.log(wordsToCount[word]);
			matches = origString.match(filter);

		} 
		ObjectToOutput[matches[0]] = matches.length;
		return matches.length;
	};

	console.log(numberOfMatches(wordsToCount, userInput));
	console.log(ObjectToOutput);

};

words.prototype.count("word to your word mother word");

module.exports = words;