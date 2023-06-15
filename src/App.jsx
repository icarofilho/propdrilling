import { useState } from "react";

import { Button } from "./Button";
import "./App.css";

function App() {
  const [num, setNum] = useState(0);

  const handlerIncrease = () => setNum((n) => n + 1);

  return (
    <>
      <div></div>
      <h1>{num}</h1>
      <div className="card">
        <Button handlerIncrease={handlerIncrease} />
      </div>
    </>
  );
}

export default App;
