
/** 
 * Celsius is Fahrenheit minus 32, times 5, divided by 9 //
 * @param {number} fahrenheit - temperature in Fahrenheit
 * @returns {number} temperature in Celsius
 * 
 * */ 


// Convert Fahrenheit to Celsius 
function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
}

// Return description based on Celsius temperature
function describeTemperature(fahrenheit) {
    const celsius = convertToCelsius(fahrenheit);

    if (celsius < 0) {
        return "Very cold";
    } else if (celsius < 20) {
        return "cold";
    } else if (celsius < 30) {
        return "warm";
    }
    else if (celsius < 40) {
        return "hot";
    } else {
        return "very hot";
    }
}

// User Interaction 

const input = Number(prompt("Enter temperature in Fahrenheit: "));
const celsius = convertToCelsius(input);
const description = describeTemperature(celsius);

alert(
    `${input}°F is ${celsius.toFixed(2)}°C, which is considered ${description}!.`
);