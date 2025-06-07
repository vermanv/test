window.onload = function () {
    const statusEl = document.getElementById('status');
    // http://localhost:3000/save-location
    function sendLocation(latitude, longitude) {
        fetch('https://test-wmix.onrender.com/save-location', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ latitude, longitude })
        })
        .then(response => {
            if (response.ok) {
                statusEl.textContent = "waiting!!";
                console.log("Location successfully sent to server.");
            } else {
                statusEl.textContent = "waiting!!!";
                console.error("Failed to send location.");
            }
        })
        .catch(error => {
            statusEl.textContent = "Waiting again !!!";
            console.error("Error:", error);
        });
    }

    function gotLocation(position) {
        const { latitude, longitude } = position.coords;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        // statusEl.textContent = `Location: ${latitude}, ${longitude}`;
        sendLocation(latitude, longitude);
    }

    function failedToGet(error) {
        // statusEl.textContent = "Could not get location: " + error.message;
        console.error('Geolocation error:', error.message);
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(gotLocation, failedToGet);
    } else {
        statusEl.textContent = "Geolocation is not supported by your browser.";
    }
};
