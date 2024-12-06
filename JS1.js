function getLocation() {
    const locationElement = document.getElementById("location");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        locationElement.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    document.getElementById("location").innerHTML = 
        "Долгота: " + latitude + "<br>Широта: " + longitude;
}

function showError(error) {
    const locationElement = document.getElementById("location");
    
    switch(error.code) {
        case error.PERMISSION_DENIED:
            locationElement.innerHTML = "Вы отклонили запрос на геолокацию.";
            break;
    }
}