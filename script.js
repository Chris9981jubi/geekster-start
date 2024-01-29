document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('userForm');
    const userName = document.getElementById('userName');
    const userPhone = document.getElementById('userPhone');
    const userVillage = document.getElementById('userVillage');
    const userCity = document.getElementById('userCity');

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

    function displayUserData(userData) {
        userName.textContent = `Name: ${userData.name}`;
        userPhone.textContent = `Phone: ${userData.phone}`;
        userVillage.textContent = `Village: ${userData.village}`;
        userCity.textContent = `City: ${userData.city}`;
    }
});
