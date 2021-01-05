import React, { useState } from "react";

export default () => {
  const [input, setInput] = useState();

  const handleSubmit = value => {
    value.preventDefault();
  };

  return (
    <div className="col-4 justify-content-center">
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit(event)}>
        {console.log(input)}
        <input
          type="text"
          value={input}
          onSubmit={e => setInput(e.target.value)}
        />
        <button type="submit" className="btn">
          Hozzáadás
        </button>
      </form>
    </div>
  );
};
