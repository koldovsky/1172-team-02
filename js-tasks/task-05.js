// Keep Hydrated

function litres(time) {
    return Math.floor(time * 0.5);
}

// Лущиков
function litres(time) {
    return Math.floor(time / 2);
}

console.log(litres(3));    // Correct call to 'litres'
console.log(litres(6.7));  // Correct call to 'litres'
console.log(litres(11.8)); // Correct call to 'litres'