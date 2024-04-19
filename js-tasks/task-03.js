// Game Move

function move(position, roll) {
    if (roll < 1 || roll > 6) {
        console.log("Не махлюй! .Хід можe бути тільки між числом 1 і 6");
        return position;
    }

    let spacesToMove = roll * 2;
    let newPosition = position + spacesToMove;

    return newPosition;
}

// Лущиков
function move(position, roll) {
    return position + 2 * roll;
}

// Ivan Oheruk
function move (position, roll) {
  return (position = position + 2 * roll);
}
