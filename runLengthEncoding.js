function runLengthEncoding(str) {
    const encodedStrChar = [];
    let currentLength = 1;

    for (let i = 1; i< str.length; i++) {
        const currentChar = str[i];
        const prevChar = str[i - 1];

        if (currentChar !== prevChar || currentLength === 9) {
            encodedStrChar.push(currentLength.toString());
            encodedStrChar.push(prevChar);
            currentLength = 0;
        }

        currentLength++;
    }

    encodedStrChar.push(currentLength.toString());
    encodedStrChar.push(str[str.length - 1]);

    return encodedStrChar.join('')
}

function runLengthEncoding(str) {
    const encodedStrChar = [];
    let currentLength = 1;

    for (let i = 1; i< str.length; i++) {
        const currentChar = str[i];
        const prevChar = str[i - 1];

        if (currentChar !== prevChar || currentLength === 9) {
            encodedStrChar.push(currentLength.toString());
            encodedStrChar.push(prevChar);
            currentLength = 0;
        }

        currentLength++;
    }

    encodedStrChar.push(currentLength.toString());
    encodedStrChar.push(str[str.length - 1]);

    return encodedStrChar.join('')
}