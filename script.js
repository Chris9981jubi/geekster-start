const keyDisplay = document.getElementById('key-display');
const keycodeDisplay = document.getElementById('keycode-display');

document.addEventListener('keydown', (event) => {
    const key = event.key;
    const keycode = event.keyCode;

    updateDisplays(key, keycode);
});

function updateDisplays(key, keycode) {
    keyDisplay.textContent = `Key: ${key}`;
    keycodeDisplay.textContent = `Keycode: ${keycode}`;

    playKeyPressSound();
}

function playKeyPressSound() {
    
}
