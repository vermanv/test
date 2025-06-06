const button = document.getElementById("get-location-button");

function gotLocation(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    alert(`Your location:\nLatitude: ${latitude}\nLongitude: ${longitude}`);
}

function failedToGet(error) {
    console.log('There was some issue:', error.message);
    alert('Failed to get your location. Please ensure location access is enabled.');
}

button.addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(gotLocation, failedToGet);
    } else {
        alert("Geolocation is not supported by your browser.");
    }
});
