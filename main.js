VanillaTilt.init(document.querySelector(".container"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.1,

});

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
        return "Error";
    }
}

