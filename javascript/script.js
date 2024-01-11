document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("convert").addEventListener("click", function () {
        const celsiusInput = document.getElementById("celsius");
        const fahrenheitResult = document.getElementById("fahrenheit");
        const kelvinResult = document.getElementById("kelvin");

            const celsius = parseFloat(celsiusInput.value);

            if (isNaN(celsius)) {
                alert("Por favor, introduce un valor válido");
            } else {
                const fahrenheit = (celsius * 9 / 5) + 32;
                fahrenheitResult.innerHTML = fahrenheit + " F";
                const kelvin = celsius + 273.15;
                kelvinResult.innerHTML = kelvin + " K";
            }
        });
})

