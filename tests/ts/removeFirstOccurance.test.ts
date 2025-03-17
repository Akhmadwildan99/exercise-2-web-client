import { removeFirstOccurance } from "../../src/ts/removeFirstOccurance";

test('removeFirstOccurance input hello world and search ell should return ho world', () => {
    expect(removeFirstOccurance('hello world', 'ell')).toBe('ho world');
})