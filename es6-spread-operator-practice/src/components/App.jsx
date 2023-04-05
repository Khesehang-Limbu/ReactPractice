import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);
  const [isClick, setClick] = useState(false);

  function handleChange(event) {
    setItem(event.target.value);
  }

  function handleClick(event) {
    setItems(preValue => {
      return [...preValue, item]
    })
    setItem("");
  }

  function strikeOut(event){
    setClick(true);
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={item} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>

      <div>
        <ul>
          <li>A Item</li>
          {items.map(currentItem=>{
            return <li onClick={strikeOut} style={isClick ? {textDecoration: "line-through"} : null} value={currentItem}>{currentItem}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
