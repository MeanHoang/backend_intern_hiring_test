const axios = require('axios'); // Import axios for HTTP requests

// Sign up for a free API key at https://openweathermap.org/api
const API_KEY = '41320dcef09585004c37848195a0c5cb';
// OpenWeatherMap API base URL
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

/**
 * Fetches weather data for a given city using OpenWeatherMap API.
 * 
 * Technologies used:
 * - Node.js (runtime)
 * - Axios (HTTP client for making API requests)
 * - OpenWeatherMap API (weather data service)
 * 
 * @param {string} city - The name of the city to fetch weather data for.
 * @returns {Promise<Object>} - Weather data including temperature, humidity, and description.
 */
async function getWeatherData(city) {
    try {
        // Validate input
        if (!city || typeof city !== 'string' || city.trim() === '') {
            throw new Error('Invalid city name. Please provide a valid city.');
        }

        // Send a GET request to OpenWeatherMap API
        const response = await axios.get(BASE_URL, {
            params: {
                q: city.trim(), // Trim whitespace to avoid errors
                appid: API_KEY, // API key for authentication
                units: 'metric', // Convert temperature to Celsius
            },
        });

        const data = response.data; // Extract data from API response

        // Return formatted weather data
        return {
            city: data.name, // City name
            temperature: data.main.temp, // Temperature in Celsius
            humidity: data.main.humidity, // Humidity percentage
            description: data.weather[0].description, // Weather condition
            timestamp: new Date().toISOString(), // Current timestamp
        };
    } catch (error) {
        // Handle specific errors from API response
        if (error.response) {
            const { status, data } = error.response;

            if (status === 404) {
                return {
                    error: `City '${city}' not found!`
                };
            } else if (status === 401) {
                return {
                    error: 'Invalid your OpenWeatherMap API key!'
                };
            } else {
                return {
                    error: `API error: ${data.message}`
                };
            }
        }
        return { error: 'Cant fetch weather data.' };
    }
}

// Export function for use in other files
module.exports = getWeatherData;
