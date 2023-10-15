function convertTemperature() {
    // Get user inputs
    const temperature = parseFloat(document.getElementById("temperature").value);
    const fromUnit = document.getElementById("fromUnit").value;
    
    // Perform the conversion
    let result = 0;

    if (fromUnit === "celsius") {
        result = (temperature * 9/5) + 32;
    } else if (fromUnit === "fahrenheit") {
        result = (temperature - 32) * 5/9;
    }

    // Display the result
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Result: ${result.toFixed(2)} ${fromUnit === "celsius" ? "°F" : "°C"}`;
}
