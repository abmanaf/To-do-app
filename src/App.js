import React, { useState } from "react";
import "./App.css";

function App() {
  const [itemName, setItemName] = useState("");
  const [storedList, setStoredList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemName.trim() === "") {
      alert("Please enter an item.");
      return;
    }

    setStoredList([...storedList, { text: itemName, isChecked: false }]);
    setItemName("");
  };

  const handleCheckboxChange = (index) => {
    const updatedList = [...storedList];
    updatedList[index].isChecked = !updatedList[index].isChecked;
    setStoredList(updatedList);
  };

  return (
    <div className="main-container">
      <form onSubmit={handleSubmit}>
        <label>To do</label> <br /> <br />
        <input
          style={{ padding: "5px 5px", fontSize: "15px" }}
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />{" "}
        <button
          style={{ cursor: "pointer", padding: "5px 5px", fontSize: "15px" }}
          type="submit"
        >
          Submit
        </button>
      </form>
      <div className="listItems">
        {storedList.length > 0 ? (
          <div>
            <h1>List items</h1>
            <div
              style={{ width: "150px", textAlign: "start", margin: "0 auto" }}
            >
              <ol>
                {storedList.map((item, index) => (
                  <li
                    key={index}
                    className={item.isChecked ? "checked" : ""} // Add a class if checked
                  >
                    {item.text}{" "}
                    <input
                      type="checkbox"
                      id={index}
                      name="myReactCheckbox"
                      checked={item.isChecked || false}
                      onChange={() => handleCheckboxChange(index)}
                    />
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ) : (
          " "
        )}
      </div>
    </div>
  );
}

export default App;
