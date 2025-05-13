const exprEval = require('expr-eval');

function safeEval(expression) {
    try {
        // Check for division by zero
        if (/\/\s*0(?!\d)/.test(expression)) {
            return "Undefined";
        }
        const parser = new exprEval.Parser();
        let result = parser.evaluate(expression);
        if (result === Infinity || result === -Infinity) {
            return "Undefined";
        }
        return result;
    } catch (e) {
        // Log the error for debugging purposes
        console.error("Expression evaluation error:", e);
        return "Error";
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { safeEval };
}
