console.log("You got this.");

var words = function() {};

var wordObjectToOutput = {};

words.prototype.count = function(input) {
	
	var userInput = input.trim();
	var wordsToCount = userInput.split(" ");	

	console.log(wordsToCount);

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
			console.log(wordsToCount[word]);
			matches = origString.match(filter);	
		}
		return matches.length;
	};
	console.log(numberOfMatches(wordsToCount, userInput));


	// function numberOfMatches(wordArray){
	// 	for (var word in wordArray){
	// 		var matchedWords = wordArray.match(word);
	// 	}
	// 	return matchedWords.length;
	// }
	// console.log(numberOfMatches(input));
	


	// var numberOfOccurrences = function(wordToMatch){
	// 	var matchedWords = wordsToCount.match( wordToMatch );
	// 	return matchedWords.length;
	// 	//gives us a number that is the length of the array returned by the match() method.
	// };

	// console.log("The number of times I found " + input + " is " + numberOfOccurrences(wordsToCount));		
	//assign the word as a key in an object



	

	//console.log(wordObjectToOutput);

};

words.prototype.count("word to your word mother word");

module.exports = words;