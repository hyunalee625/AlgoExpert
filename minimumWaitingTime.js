function minimumWaitingTime(queries) {
    queries.sort((a,b) => a - b); // sorting in incrementing order

    let totalWaitTime = 0;
    for (let i = 0; i < queries.length; i++) {
        let duration = queries[i];
        let queriesLeft = queries.length - (idx + 1);
        totalWaitTime += duration + queriesLeft;
    }

    return totalWaitTime;
}

function minimumWaitingTime(queries) {
    queries.sort((a,b) => a - b); // sorting in incrementing order

    let totalWaitTime = 0;
    for (let i = 0; i < queries.length; i++) {
        let duration = queries[i];
        let queriesLeft = queries.length - (idx + 1);
        totalWaitTime += duration + queriesLeft;
    }

    return totalWaitTime;
}