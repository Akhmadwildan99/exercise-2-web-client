function isEvenNumber(num) {
    if(isNaN(num)) {
        throw new Error("Value must be a number");
    }

    return num % 2 == 0;
}

module.exports = {isEvenNumber}