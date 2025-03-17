export function convertDistance(value: number, unit: 'km' | 'cm'): {convertedValue: number, newUnit: 'km' | 'cm'} {
    if(isNaN(value)) {
        throw new Error("Value must be a number");
       
    }

    if(unit !== "km" && unit !== "cm") {
        throw new Error("unit must be either 'km' or 'cm'");
    }

    let convertedValue;
    let newUnit: 'km' | 'cm';

    if(unit == "km") {
        convertedValue = value * 100000;
        newUnit = "cm";
    } else {
        convertedValue = value / 100000;
        newUnit = "km";
    }

    return {
        convertedValue, newUnit
    }
}
