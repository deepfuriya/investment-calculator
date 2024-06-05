import { useState } from "react";

import InputTab from "./components/InputTab";
import ResultTab from "./components/ResultTab";
import Header from "./components/Header";

export default function App() {
  const [values, setValues] = useState();

  return (
    <div>
      <Header/>

      <InputTab />

      <ResultTab />
    </div>
  );
}
