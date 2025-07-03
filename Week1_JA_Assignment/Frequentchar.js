function mostFrequentVowel(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let counts = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    str = str.toLowerCase(); // Convert to lowercase to handle capital vowels

    // Count vowels using for...of loop
    for (let char of str) {
        if (vowels.includes(char)) {
            counts[char]++;
        }
    }

    let max = 0;
    let maxVowel = '';

    // Find the vowel with the highest frequency
    for (let vowel of vowels) {
        if (counts[vowel] > max) {
            max = counts[vowel];
            maxVowel = vowel;
        }
    }

    console.log("Most frequent vowel is '" + maxVowel + "' and it appears " + max + " times.");
}

mostFrequentVowel("javascript");