import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedName, setSelectedName] = useState('');

  const handleChange = (event) => {
    setSelectedName(event.target.value);
  };
  const handleSubmit = () => {
    alert(selectedName);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "15px", marginLeft: "5px" }}>
      <label>Enter Name</label>
      <input type="text" value={selectedName} onChange={handleChange} style={{ width: "230px" }} />
      <button style={{ width: "240px" }}onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
