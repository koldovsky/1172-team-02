const clockContainer = document.querySelector('.schedule-header__clock');
function updateClock() {
    clockContainer.innerText = new Date().toLocaleTimeString('uk');
}
setInterval(updateClock, 1000);