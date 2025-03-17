const {convertDistance}= require("../../src/js/convertDistance");


test('convertDistance 1 km should return 100000 cm', () => {
    expect(convertDistance(1, 'km')).toEqual({
        convertedValue: 100000,
        newUnit: 'cm'
    });
});


test('convertDistance 100000 cm should return 1 km', () => {
    expect(convertDistance(100000, 'cm')).toEqual({
        convertedValue: 1,
        newUnit: 'km'
    });
});