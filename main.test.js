const { safeEval } = require('./main.js');

describe('safeEval', () => {
    it('evaluates simple expressions', () => {
        expect(safeEval('1+2')).toBe(3);
        expect(safeEval('2*3')).toBe(6);
        expect(safeEval('5-1')).toBe(4);
        expect(safeEval('10/2')).toBe(5);
    });

    it('returns "Undefined" for division by zero', () => {
        expect(safeEval('1/0')).toBe('Undefined');
        expect(safeEval('0/0')).toBe('Undefined');
    });

    it('returns "Error" for invalid expressions', () => {
        expect(safeEval('1++2')).toBe('Error');
        expect(safeEval('3**5')).toBe('Error');
    });

    it('returns "Error" for consecutive operators', () => {
        expect(safeEval('1+-2')).toBe('Error');
        expect(safeEval('3*/4')).toBe('Error');
    });

    it('handles empty or malformed expressions', () => {
        expect(safeEval('')).toBe('Error');
        expect(safeEval('   ')).toBe('Error');
    });
});