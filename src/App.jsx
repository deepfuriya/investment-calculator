import { useState } from "react";

import InputTab from "./components/InputTab";
import ResultTab from "./components/ResultTab";
import Header from "./components/Header";

export default function App() {
  const [userInput, updateUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleInputChange(valueType, value) {
    updateUserInput((prevVal) => {
      return {
        ...prevVal,
        [valueType]: +value,
      };
    });
  }

  return (
    <div>
      <Header />

      <InputTab onInputChange={handleInputChange} userInput={userInput} />

      <ResultTab userInput={userInput} />
    </div>
  );
}
