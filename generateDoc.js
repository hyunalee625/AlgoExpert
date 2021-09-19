// REVIEW AGAIN

function generateDoc(characters, doc) {
    for (const character of doc) {
        const docFrequency = countCharacterFrequency(character, doc);
        const charactersFrequency = countCharacterFrequency(character, characters);
        if (docFrequency > charactersFrequency) return false;
    }

    return true;
}

function countCharacterFrequency(character, target) {
    let frequency = 0;
    for (const char of target) {
        if (char === character) frequency++;
    }

    return frequency;
}

console.log(generateDoc("Bste!hetsi ogEAxpelrt x", "AlgoExpert is the Best!"))