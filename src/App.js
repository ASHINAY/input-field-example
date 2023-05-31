import React from 'react';
import './App.css';

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "15px",marginLeft:"5px" }}>
      <label>Enter Name</label>
      <input type="text" style={{ width: "230px" }} />
      <button style={{ width: "240px" }}
      onClick={() => {
          alert("The name typed in textbox");
        }}>Submit</button>
    </div>
  );
}

export default App;
