// Opposites Attract

function lovefunc(flower1, flower2) {
    return (flower1 % 2 !== flower2 % 2);
}

//Лущиков
function lovefunc(petals1, petals2) {
    return (petals1 % 2 !== petals2 % 2);
}

console.log(lovefunc(1, 4));
console.log(lovefunc(2, 2));
console.log(lovefunc(1, 3)); 