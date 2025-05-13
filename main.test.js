const { safeEval } = require('./main');

describe('safeEval', () => {
    beforeEach(() => {
        jest.spyOn(console, 'error').mockImplementation(() => { });
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('evaluates simple expressions', () => {
        expect(safeEval('1 + 2')).toBe(3);
    });

    test('returns "Undefined" for division by zero', () => {
        expect(safeEval('1 / 0')).toBe('Undefined');
    });

    test('returns "Error" for consecutive operators', () => {
        expect(safeEval('1 ++ 2')).toBe('Error');
    });

    test('handles empty or malformed expressions', () => {
        expect(safeEval('')).toBe('Error');
        expect(safeEval('+')).toBe('Error');
    });
});