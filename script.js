let stopwatchInterval;
let startTime;
let lapTimes = [];

function startStopwatch() {
    startTime = Date.now() - (lapTimes.length > 0 ? lapTimes.reduce((acc, lap) => acc + lap, 0) : 0);

    stopwatchInterval = setInterval(updateStopwatch, 1000);
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    document.getElementById('stopwatch').textContent = '00:00:00';
    lapTimes = [];
    updateLapTimes();
}

function updateStopwatch() {
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    const hours = Math.floor(elapsedTime / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((elapsedTime % 3600) / 60).toString().padStart(2, '0');
    const seconds = (elapsedTime % 60).toString().padStart(2, '0');
    document.getElementById('stopwatch').textContent = `${hours}:${minutes}:${seconds}`;
}

function recordLap() {
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    lapTimes.push(elapsedTime);
    updateLapTimes();
}

function updateLapTimes() {
    const lapTimesContainer = document.getElementById('lapTimes');
    lapTimesContainer.innerHTML = '<strong>Lap Times:</strong><br>';
    lapTimes.forEach((lap, index) => {
        const lapTime = new Date(lap * 1000).toISOString().substr(11, 8);
        lapTimesContainer.innerHTML += `Lap ${index + 1}: ${lapTime}<br>`;
    });
}

function changeStopwatchStyle() {
    const stopwatchStyle = document.getElementById('stopwatchStyle').value;
    const stopwatchDisplay = document.getElementById('stopwatch');
    stopwatchDisplay.className = stopwatchStyle;
}
