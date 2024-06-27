document.getElementById('reservationForm').addEventListener('change', updatePrice);
document.getElementById('reservationForm').addEventListener('submit', function (event) {
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);
    const dateError = document.getElementById('dateError');

    if (endDate < startDate) {
        event.preventDefault(); // Prevent the form from submitting
        dateError.style.display = 'block';
        dateError.textContent = 'Koniec pobytu nie może być wcześniejszy niż początek pobytu';
        alert('Podaj poprawną datę');
    } else {
        dateError.style.display = 'none';
    }
});

function updatePrice() {
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);
    const oneDay = 24 * 60 * 60 * 1000;

    const totalPriceElement = document.getElementById('totalPrice');
    const submitButton = document.querySelector('button[type="submit"]');

    // Check if both startDate and endDate are valid dates
    if (!isNaN(startDate) && !isNaN(endDate)) {
        if (endDate < startDate) {
            totalPriceElement.textContent = 'Podaj poprawną datę';
            totalPriceElement.style.color = 'red';
            submitButton.disabled = true; // Disable the submit button
        } else {
            const stayDuration = Math.round((endDate - startDate) / oneDay) + 1;
            const basePrice = 300 * stayDuration;

            let additionalServices = 0;
            document.querySelectorAll('input[name="dodatkowe"]:checked').forEach(service => {
                additionalServices += parseInt(service.value);
            });

            const totalPrice = basePrice + additionalServices;
            totalPriceElement.textContent = `$${totalPrice}`;
            totalPriceElement.style.color = 'black'; // Reset color to default
            submitButton.disabled = false; // Enable the submit button
        }
    } else {
        totalPriceElement.textContent = '$';
        totalPriceElement.style.color = 'black'; // Reset color to default
        submitButton.disabled = true; // Disable the submit button
    }
}

document.getElementById('startDate').addEventListener('change', updatePrice);
document.getElementById('endDate').addEventListener('change', updatePrice);
document.querySelectorAll('input[name="dodatkowe"]').forEach(element => {
    element.addEventListener('change', updatePrice);
});

document.getElementById('reservationForm').addEventListener('submit', function (event) {
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);
    const dateError = document.getElementById('dateError');

    if (endDate < startDate) {
        event.preventDefault(); // Prevent the form from submitting
        dateError.style.display = 'block';
        dateError.textContent = 'Koniec pobytu nie może być wcześniejszy niż początek pobytu';
        alert('Podaj poprawną datę');
    } else {
        dateError.style.display = 'none';
    }
});



// zapisywanie danych do z formularza do local storage

function storeFormData(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Collect form data
    const formData = {
        id: Date.now(), // Unique ID for each reservation
        imie: document.getElementById('imie').value,
        nazwisko: document.getElementById('nazwisko').value,
        email: document.getElementById('email').value,
        startDate: document.getElementById('startDate').value,
        endDate: document.getElementById('endDate').value,
        dodatkowe: Array.from(document.querySelectorAll('input[name="dodatkowe"]:checked')).map(el => el.value),
        zaplata: document.querySelector('input[name="zapłata"]:checked').value,
        totalPrice: document.getElementById('totalPrice').textContent
    };

    // Get the existing reservations from local storage
    let reservations = JSON.parse(localStorage.getItem('reservations')) || [];

    // Add the new reservation
    reservations.push(formData);

    // Store the updated reservations array in local storage
    localStorage.setItem('reservations', JSON.stringify(reservations));

    // Optionally, show a message to the user
    alert('Rezerwacja przebiegła pomyślnie');

    // Reset the form
    document.getElementById('reservationForm').reset();
}








