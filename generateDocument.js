function generateDocument(chars, doc) {
    for (const char of doc) {
        const docFrequency = countCharFrequency(char, doc);
        const charsFrequency = countCharFrequency(char, chars);
        if (docFrequency > charsFrequency) return false;
    }

    return true;
}

function countCharFrequency(chararacter, target) {
    let frequency = 0;
    for (const char of target) {
        if (char === chararacter) frequency++;
    }

    return frequency;
}