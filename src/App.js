import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedName, setSelectedName] = useState('');
  const [emailId, setEmailId] = useState('');

  const handleChange = (event) => {
    setSelectedName(event.target.value);
  };
  const handleSubmit = () => {
    alert("Hi" + selectedName.toUpperCase() + ", Email: " + emailId);
  };
  const handleClear = () => {
    setSelectedName('');
  };
  const handleEmailChange = (event) => {
    setEmailId(event.target.value.toLowerCase());
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "15px", marginLeft: "5px" }}>
      <label>Enter Name</label>
      <input type="text" value={selectedName} onChange={handleChange} style={{ width: "230px" }} />
      <label>Email Id</label>
      <input type="text" value={emailId} onChange={handleEmailChange} style={{ width: "230px" }} />
      <button style={{ width: "240px" }} onClick={handleSubmit}>Submit</button>
      <button style={{ width: "240px" }} onClick={handleClear}>Clear</button>
    </div>
  );
}

export default App;
