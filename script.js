function convertirTemperatura() {
    let input = prompt("Ingrese la temperatura en grados Celsius:");
    while (isNaN(input)) {
        alert("Por favor, ingrese un valor numérico.");
        input = prompt("Ingrese la temperatura en grados Celsius:");
    }
    let celsius = parseFloat(input);
    let fahrenheit = (celsius * 9/5) + 32;
    let kelvin = celsius + 273.15;
    prompt("Grados Fahrenheit:", fahrenheit.toFixed(2));
    prompt("Grados Kelvin:", kelvin.toFixed(2));
}
convertirTemperatura();
