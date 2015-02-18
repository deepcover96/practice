
var areAllCharactersUnique = function(str) {
	if (str.length < 2) return true;

	var charMap = {};
	for (var i=0; i<str.length; i++) {
		if(charMap[str[i]]) return false;
		charMap[str[i]] = 1;
	}

	return true;
};

// if you cannot use hash map
var areAllCharactersUnique2 = function(str) {
	if (str.length < 2) return true;

	var asciiString = ';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;'
	var asciiMap = asciiString.split('');
	for (var i=0; i<str.length; i++) {
		var index = str[i].charCodeAt(0);
		if(asciiMap[index] === '1') return false;
		asciiMap[index] = '1';
	}

	return true;
};

var main = function(args) {
	if(args && args.length > 0) {
		var word = args[0];
		console.log("1.1: Does '" + word + "' have all unique characters?");
		console.log(areAllCharactersUnique(word));
	} else {
		console.log("   Error: Please provide a word.");
	}
};


main(process.argv.slice(2));


