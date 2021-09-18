function caesarCipherEncryptor(str, key) {
    const newLetters = [];
    const newKey = key % 26;

    for (const letter of str) {
        newLetters.push(getNewLetter(letter, newKey));
    }

    return newLetters;
}

function getNewLetter(letter, k) {
    const newLetterCode = letter.charCodeAt() + k;
    return newLetterCode <= 122 ? String.fromCharCode(newLetterCode) : String.fromCharCode(96 + (newLetterCode % 122))
}