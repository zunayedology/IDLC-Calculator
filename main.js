const exprEval = typeof window !== 'undefined' ? window.exprEval : require('expr-eval');

function safeEval(expression) {
    try {
        // sonar-disable-next-line regexp/no-useless-escape
        if (/\/ \s*0(?!\d)/.test(expression)) {
            return "Undefined";
        }
        // sonar-disable-next-line regexp/no-useless-escape
        if (/[+\-*/]{2,}/.test(expression.replace(/\s+/g, ''))) {
            return "Error";
        }
        const parser = new exprEval.Parser();
        let result = parser.evaluate(expression);
        if (result === Infinity || result === -Infinity) {
            return "Undefined";
        }
        return result;
    } catch (e) {
        console.error("Expression evaluation error:", e);
        return "Error";
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { safeEval };
}