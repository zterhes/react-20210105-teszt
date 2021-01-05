import React from "react";
import "./style.css";

import InputField from "./components/InputField";
import ListPage from "./components/ListPage";
import React, { useState } from "react";

export default function App() {
  const [list, setList] = useState([]);

  function handleInput(input) {
    setList(input);
  }

  return (
    <div className="container">
      <div className="row">
        <InputField onChange={handleInput} />
      </div>
      {list.map(data => (
        <ListPage title={data} />
      ))}
    </div>
  );
}
