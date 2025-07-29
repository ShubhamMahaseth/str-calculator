import React, { useState } from "react";
import { add } from "./utils/stringCalculator";
import "./App.css";

const App: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
      setError("");
    } catch (err: any) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <div className="App">
      <h1>String Calculator</h1>
      <input
        type="text"
        placeholder="Enter numbers"
        value={input}
        onChange={handleChange}
      />
      <button onClick={handleCalculate}>Calculate</button>
      {error && <p className="error">{error}</p>}
      {result !== null && <p className="result">Result: {result}</p>}
    </div>
  );
};

export default App;
