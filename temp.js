document.getElementById("convert").addEventListener("click", function() {
    // Get the Celsius input value
    var celsius = parseFloat(document.getElementById("celsius").value);

    // Check if the input is a valid number
    if (!isNaN(celsius)) {
        // Calculate Fahrenheit
        var fahrenheit = (celsius * 9/5) + 32;

        
        document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    }
});

document.getElementById("clear").addEventListener("click", function() {
    
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
});