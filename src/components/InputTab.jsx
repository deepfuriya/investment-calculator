import { useState } from "react";

export default function InputTab() {
  const [userInput, updateUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 5,
    duration: 2,
  });

  function handleInputChange(valueType, value) {
    updateUserInput((prevVal) => {
      return {
        ...prevVal,
        [valueType]: value,
      };
    });
  }

  return (
    <div id="user-input" className="input-group">
      <div>
        <label>INITAL INVESTMENT</label>
        <input
          type="number"
          value={userInput.initialInvestment}
          onChange={(e) =>
            handleInputChange("initialInvestment", e.target.value)
          }
        ></input>
      </div>
      <div>
        <label>ANNUAL INVESTMENT</label>
        <input
          type="number"
          value={userInput.annualInvestment}
          onChange={(e) =>
            handleInputChange("annualInvestment", e.target.value)
          }
        ></input>
      </div>
      <div>
        <label>EXPECTED RETURN</label>
        <input
          type="number"
          value={userInput.expectedReturn}
          onChange={(e) => handleInputChange("expectedReturn", e.target.value)}
        ></input>
      </div>
      <div>
        <label>DURATION</label>
        <input
          type="number"
          value={userInput.duration}
          onChange={(e) => handleInputChange("duration", e.target.value)}
        ></input>
      </div>
    </div>
  );
}
