// Import Task 2 function (Fetch weather data from OpenWeatherMap API)
const getWeatherData = require('./getWeatherData');

console.log("\n----- Task 2: Fetching Weather Data -----");

// Test cases for weather API
const cities = [
    'London', 'New York', 'Hanoi',
    'aaaCity', '', 'NewYorrk'
];

// Fetch weather data asynchronously
(async function () {
    for (const city of cities) {
        const weather = await getWeatherData(city);
        console.log(weather);
    }
})();
