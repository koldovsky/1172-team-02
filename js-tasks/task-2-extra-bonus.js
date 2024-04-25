// you Can't Code Under Pressure https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript

function doubleInteger(i) {
    return i * 2;
}

// Twice as old https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript

function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

// Get Nth Even Number https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript

function nthEven(n) {
    return n * 2 - 2;
}

//  What's the real floor? https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript

function getRealFloor(n) {
    return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
}

// Beginner Series #2 Clock https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript

function past(h, m, s) {
    return ((h * 3600) + (m * 60) + s) * 1000;
}

// Is n divisible by x and y? https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript

function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0
}