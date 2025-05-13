const { safeEval } = require('./main.js');

describe('safeEval', () => {
    it('evaluates simple expressions', () => {
        expect(safeEval('1+2')).toBe(3);
        expect(safeEval('2*3')).toBe(6);
    });

    it('returns "Undefined" for division by zero', () => {
        expect(safeEval('1/0')).toBe('Undefined');
    });

    it('returns "Error" for invalid expressions', () => {
        expect(safeEval('1++2')).toBe('Error');
        expect(safeEval('3**5')).toBe('Error');
    });
});
