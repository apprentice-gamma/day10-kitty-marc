//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {

	var str = input;
    if (str.trim(str.charAt(str.length-1)) === "?"){
        return 'Sure.';
    }else if (input === input.toUpperCase()){
        return 'Whoa, chill out!';
    }else{
        return "Whatever.";
    }
};

module.exports = Bob;


