function convertFahrenheitToCelcius(celcius) {
    if(isNaN(celcius)) {
        return "Invalid argument type";
    }
    let c = (celcius - 32) * 5/9;
    return +c.toFixed(4);
}

module.exports = {convertFahrenheitToCelcius};