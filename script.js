document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('userForm');
    const userName = document.getElementById('userName');
    const userPhone = document.getElementById('userPhone');
    const userVillage = document.getElementById('userVillage');
    const userCity = document.getElementById('userCity');
    const themeSelector = document.getElementById('theme');

    const storedUserData = JSON.parse(localStorage.getItem('userData')) || {};

    if (Object.keys(storedUserData).length !== 0) {
        displayUserData(storedUserData);
    }

    userForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const village = document.getElementById('village').value;
        const city = document.getElementById('city').value;

        const userData = { name, phone, village, city };
        localStorage.setItem('userData', JSON.stringify(userData));

        displayUserData(userData);
    });
    themeSelector.addEventListener('change', () => {
        const selectedTheme = themeSelector.value;
        setTheme(selectedTheme);
    });
    function displayUserData(userData) {
        userName.textContent = `Name: ${userData.name}`;
        userPhone.textContent = `Phone: ${userData.phone}`;
        userVillage.textContent = `Village: ${userData.village}`;
        userCity.textContent = `City: ${userData.city}`;
    }

    function setTheme(theme) {
        if (theme === 'dark') {
            document.body.style.backgroundColor = '#333';
            document.body.style.color = '#fff';
            document.getElementById('userCard').style.backgroundColor = '#555';
        } else {
            document.body.style.backgroundColor = '#fff';
            document.body.style.color = '#333';
            document.getElementById('userCard').style.backgroundColor = '#fff';
        }
    }

    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        themeSelector.value = storedTheme;
        setTheme(storedTheme);
    }
});
