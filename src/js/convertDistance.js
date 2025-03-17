function convertDistance(value, unit) {
    if(isNaN(value)) {
        throw new Error("Value must be a number");
       
    }

    if(unit !== "km" && unit !== "cm") {
        throw new Error("unit must be either 'km' or 'cm'");
    }

    let convertedValue;
    let newUnit;

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


module.exports = {convertDistance};