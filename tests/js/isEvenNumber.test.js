const {isEvenNumber} = require("../../src/js/isEvenNumber");

test('1000 should even number', () => {
    expect(isEvenNumber(1000)).toBeTruthy();
});

test('1001 should not even number', () => {
    expect(isEvenNumber(1001)).toBeFalsy();
});