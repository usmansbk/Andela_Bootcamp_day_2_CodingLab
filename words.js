function words(string) {
	wordsList = string.match(/\S+/g);
	wordsCount = {};
	for (let i = 0; i < wordsList.length; i++) {
		let word = wordsList[i];
		if (wordsCount[word]) {
			wordsCount[word] += 1;
		} else {
			wordsCount[word] = 1;
		}
	}
	return wordsCount;
}

console.log(words("one of each"));
module.exports = words