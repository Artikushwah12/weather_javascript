const locationDropdown = document.getElementById('location');
const searchButton = document.getElementById('search-btn');
const locationNameElement = document.getElementById('location-name');
const weatherIcon = document.getElementById('weather-icon');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

// Sample weather data for predefined locations
const weatherData = {
    'delhi': {
        name: 'delhi',
        temperature: '25°C',
        description: 'Sunny',
        icon: 'sun.png',
    },
    'mathura': {
        name: 'mathura',
        temperature: '28°C',
        description: 'Partly Cloudy',
        icon: 'cloud.png',
    },
    'agra': {
        name: 'agra',
        temperature: '22°C',
        description: 'Rainy',
        icon: 'rain.png',
    },
};

searchButton.addEventListener('click', () => {
    const selectedLocation = locationDropdown.value;
    const weatherInfo = weatherData[selectedLocation];

    if (weatherInfo) {
        locationNameElement.textContent = weatherInfo.name;
        temperatureElement.textContent = weatherInfo.temperature;
        descriptionElement.textContent = weatherInfo.description;
        weatherIcon.innerHTML = `<img src="${weatherInfo.icon}" alt="Weather Icon">`;
    } else {
        console.error('Weather data not available for the selected location.');
    }
});
