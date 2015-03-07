//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {

	var says = input.trim();
	
	if (says === says.toUpperCase()){
        return 'Whoa, chill out!';
    } else if (says.charAt(says.length-1) === "?"){
        return 'Sure.';
    }else{
        return "Whatever.";
    }
};

module.exports = Bob;


