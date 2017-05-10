function words(string) {
	wordsList = string.split(" ");
	wordsCount = {};
	for (let i = 0; i < wordsList.length; i++) {
		if (wordsCount[wordsList[i]]) {
			wordsCount[wordsList[i]] += 1;
		} else {
			wordsCount[wordsList[i]] = 1;
		}
	}
	return wordsCount;
}

console.log(words("one of each"));
module.exports = words