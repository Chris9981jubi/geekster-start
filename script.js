let count = 0;
const counterElement = document.getElementById('counter');

function updateCounter() {
    counterElement.textContent = count;
}

function increaseCount() {
    count += 1;
    updateCounter();
    applyAnimation();
}

function decreaseCount() {
    count -= 1;
    updateCounter();
    applyAnimation();
}

function resetCount() {
    count = 0;
    updateCounter();
    applyAnimation();
}

function applyAnimation() {
    counterElement.classList.add('animate');
    setTimeout(() => {
        counterElement.classList.remove('animate');
    }, 500);
}
