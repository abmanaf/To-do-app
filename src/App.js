import React, { useState } from "react";
import "./App.css";

function App() {
  const [itemName, setItemName] = useState("");
  const [storedList, setStoredList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemName.trim() === "") {
      alert("Please enter an item.");
      return;
    }

    if (editIndex !== null) {
      // Edit existing item
      const updatedList = [...storedList];
      updatedList[editIndex].text = itemName;
      setStoredList(updatedList);
      setEditIndex(null);
    } else {
      // Add new item
      setStoredList([...storedList, { text: itemName, isChecked: false }]);
    }

    setItemName("");
  };

  const handleCheckboxChange = (index) => {
    const updatedList = [...storedList];
    updatedList[index].isChecked = !updatedList[index].isChecked;
    setStoredList(updatedList);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setItemName(storedList[index].text);
  };

  const handleCancel = () => {
    setEditIndex(null);
    setItemName(""); // Clear the input field
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
        />
        <button
          style={{ cursor: "pointer", padding: "5px 5px", fontSize: "15px" }}
          type="submit"
        >
          {editIndex !== null ? "Update" : "Submit"}
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
                  <li key={index} className={item.isChecked ? "checked" : ""}>
                    {editIndex === index ? (
                      // Display input field for editing
                      <span>{item.text}</span>
                    ) : (
                      // Display item text
                      item.text
                    )}
                    <input
                      type="checkbox"
                      id={index}
                      name="myReactCheckbox"
                      checked={item.isChecked || false}
                      onChange={() => handleCheckboxChange(index)}
                    />
                    {editIndex === index ? (
                      <>
                        <button onClick={handleCancel}>Cancel</button>
                      </>
                    ) : (
                      <button onClick={() => handleEdit(index)}>Edit</button>
                    )}
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
