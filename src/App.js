import React, { useState } from "react";

function App() {
  const [itemName, setItemName] = useState("");
  const [storedList, setStoredList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemName.trim() === "") {
      alert("Please enter an item.");
      return;
    }

    setStoredList([...storedList, itemName]);
    setItemName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>To do</label> <br />
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {storedList.length > 0 ? (
        <ul>
          <h1>List items</h1>
          {storedList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        "list is empty"
      )}
    </div>
  );
}

export default App;
