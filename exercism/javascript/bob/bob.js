//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {

	var sayToBob = input.trim();
	
	if(input = ""){
		return "Fine. Be that way!";
	} else if( sayToBob.match(/\d/) && !sayToBob.match(/[a-zA-Z]/) ){
		return "Whatever.";
	} else if (sayToBob === sayToBob.toUpperCase() ){
        return 'Whoa, chill out!';
    } else if (sayToBob.charAt(sayToBob.length-1) === "?"){
        return 'Sure.';
	} else {
        return "Whatever.";
    }
};

module.exports = Bob;


