// Convert a string to an array https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

function stringToArray(string) {
    return string.split(/\s+/);
}

function stringToArray(string) {
    return string.split(' ');
}

stringToArray = (s) => s.split(' ')

// DNA to RNA Conversion  https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

function DNAtoRNA(dna) {
    return dna.replace(/T/g, 'U');
}

const DNAtoRNA = dna => dna.replace(/T/g, 'U');

function DNAtoRNA(dna) {
    return dna.split("T").join("U");
}

function DNAtoRNA(dna) {
    return dna.replaceAll('T', 'U');
}

// Find Maximum and Minimum Values of a List  https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript




// Smallest value of an array  https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

function min(arr, toReturn) {
    let val = Math.min.apply(null, arr)
    return toReturn == 'value' ? val : arr.indexOf(val)
}

function min(arr, toReturn) {
    return (toReturn == 'value') ? Math.min(...arr) : arr.indexOf(Math.min(...arr));
}