import {convertFahrenheitToCelcius} from "../../src/ts/convertFahrenheitToCelcius";


test('test funciton convert F to C with input  100 return should be 37.7778', () => {
    expect(convertFahrenheitToCelcius(100)).toEqual(37.7778);
});