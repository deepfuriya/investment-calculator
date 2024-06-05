export default function InputTab({ onInputChange, userInput }) {
  return (
    <div id="user-input" className="input-group">
      <div>
        <label>INITAL INVESTMENT</label>
        <input
          type="number"
          value={userInput.initialInvestment}
          onChange={(e) =>
            onInputChange("initialInvestment", e.target.value)
          }
        ></input>
      </div>
      <div>
        <label>ANNUAL INVESTMENT</label>
        <input
          type="number"
          value={userInput.annualInvestment}
          onChange={(e) =>
            onInputChange("annualInvestment", e.target.value)
          }
        ></input>
      </div>
      <div>
        <label>EXPECTED RETURN</label>
        <input
          type="number"
          value={userInput.expectedReturn}
          onChange={(e) => onInputChange("expectedReturn", e.target.value)}
        ></input>
      </div>
      <div>
        <label>DURATION</label>
        <input
          type="number"
          value={userInput.duration}
          onChange={(e) => onInputChange("duration", e.target.value)}
        ></input>
      </div>
    </div>
  );
}
