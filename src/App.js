import React, { useState } from "react";
import "./App.css"; // Add your styles in a separate CSS file

const Calculator = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const appendValue = (value) => {
        setInput((prev) => prev + value);
    };

    const clearDisplay = () => {
        setInput("");
        setResult("");
    };

    const calculate = () => {
        if (!input) {
            setResult("Error");
            return;
        }
        try {
            let evalResult = eval(input);
            if (input === "0/0") {
                evalResult = "NaN";
            } else if (input.includes("/0")) {
                evalResult = "Infinity";
            }
            setResult(evalResult);
        } catch {
            setResult("Error");
        }
    };

    return (
        <div className="calculator">
          <h2>React Calculator</h2>
            <input type="text" value={input} disabled />
            <div className="buttons">
                {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", "C", "=", "+"].map((char) => (
                    <button
                        key={char}
                        onClick={() => {
                            if (char === "C") clearDisplay();
                            else if (char === "=") calculate();
                            else appendValue(char);
                        }}
                    >
                        {char}
                    </button>
                ))}
            </div>
            <div className="result">{result}</div>
        </div>
    );
};

export default Calculator;
