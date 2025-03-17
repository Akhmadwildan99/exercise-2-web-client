export function convertFahrenheitToCelcius(celcius: number): number | string  {
    if(isNaN(celcius)) {
        return "Invalid argument type";
    }
    let c = (celcius - 32) * 5/9;
    return +c.toFixed(4);
}