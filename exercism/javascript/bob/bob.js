//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {

	var sayToBob = input.trim();
	
	if(input == ""){
		return "Fine. Be that way!";
	} else if( sayToBob.match(/\D/) && !sayToBob.match(/[a-zA-Z]/) && sayToBob.charAt(sayToBob.length-1) !== "?"){
		//only numbers
		return "Whatever.";
	} else if (sayToBob.charAt(sayToBob.length-1) === "?"){
        //asking a question
        if(!sayToBob.match(/[a-zA-Z]/) && sayToBob.match(/\D/)){
        	//number as a question
        	return 'Sure.';	
        }
        else if(sayToBob === sayToBob.toUpperCase()){
        	//forceful question
        	return 'Whoa, chill out!';
        } else {
        	return 'Sure.';
        }
	} else if (sayToBob === sayToBob.toUpperCase()){
		return 'Whoa, chill out!';
	} else if( sayToBob.match(/\d/) && !sayToBob.match(/[a-zA-Z?]/) ){
		return "Whatever.";
	} else {
        return "Whatever.";
    }
};

module.exports = Bob;
