document.addEventListener('DOMContentLoaded', function () {
    function updateClock() {
        const digitalClock = document.getElementById('digitalClock');
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        digitalClock.textContent = `${hours}:${minutes}:${seconds}`;
    }

    setInterval(updateClock, 1000);

    function toggleClockStyle() {
        const digitalClock = document.getElementById('digitalClock');
        digitalClock.classList.toggle('analog-style');
    }

    function changeTimeZone() {
        const timeZoneSelector = document.getElementById('timeZoneSelector');
        const selectedTimeZone = timeZoneSelector.value;
    }

    updateClock();
});
