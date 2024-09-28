// QUESTION 1:
// Takes a single str
// Returns a single str

let result = "";

const addCommas = str => {

    if (result.length === 0) {
        // If the result string is empty...
        result += str;
    }else {
        // The string is not empty! Add the comma
        result += (`,${str}`);
    }

    return result;
}

addCommas("Hello");
addCommas("How are you");
addCommas("abc");

// "Hello,How are you,abc;
console.log(result);

// QUESTION 2:
// param: single string
// returns: array of strings
//      [0] -> first element: all strings separated by comma (strings passed in the past hour)
//      [1] -> second element: all strings separated by comma (between 1 and 2 hours ago)
//      ...

const strings = [];
// [{ content: "actualstring", timeAdded: Date.now() }]

// Hello,How are you,abc;
const retStrings = str => {
    const now = Date.now() // ms // 4pm

    // 1 hour -> 60 minutes -> 60 * seconds * 1000 ms
    const oneHour = 60 * 60 * 1000; // ms

    // Add string to the global array.
    const newEntry = { content: str, timeAdded: now };
    strings.push(newEntry);

    // Returns comma separated strings based on current time.

    // 4pm 
    const result = [];
    for (let entry in strings) {

        // 3pm -> 4pm, [0]
        // 2pm -> 3pm, [1]
        // 1pm -> 2pm, [2]

        entry.timeAdded
    }

    return result;
}