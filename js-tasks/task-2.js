// Convert a string to an array https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

function stringToArray(string) {
    return string.split(' ');
}

stringToArray = (s) => s.split(' ')

// DNA to RNA Conversion  https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

function DNAtoRNA(dna) {
    return dna.replaceAll('T', 'U');
}

// Find Maximum and Minimum Values of a List  https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

const min = function (list) {
    return Math.min(...list)
}

const max = function (list) {
    return Math.max(...list)
}

// Smallest value of an array  https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

function min(arr, toReturn) {
    let val = Math.min.apply(null, arr)
    return toReturn == 'value' ? val : arr.indexOf(val)
}

// BONUS TASKS !!! BONUS TASKS !!! BONUS TASKS !!! BONUS TASKS !!! BONUS TASKS !!! BONUS TASKS !!! BONUS TASKS !!! BONUS TASKS !!! BONUS TASKS !!! BONUS TASKS !!!

// A wolf in sheep's clothing https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/solutions/javascript

function warnTheSheep(queue) {
    const wolfIndex = queue.findIndex(animal => animal === 'wolf');
    const sheepPosition = queue.length - wolfIndex - 1;

    if (wolfIndex === queue.length - 1) {
        return "Pls go away and stop eating my sheep";
    } else {
        return `Oi! Sheep number ${sheepPosition}! You are about to be eaten by a wolf!`;
    }
}

// Beginner - Lost Without a Map https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript

function maps(x) {
    return x.map(num => num * 2)
}

// Find the first non-consecutive number https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript

function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; ++i) {
        if (arr[i] + 1 !== arr[i + 1]) {
            return arr[i + 1]
        }
    }
    return null
}