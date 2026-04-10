import React, { useState } from "react";

const API = "http://localhost:5000/api";

function App() {
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [expenses, setExpenses] = useState([]);

  const login = async () => {
    const res = await fetch(`${API}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    setToken(data.token);
  };

  const getExpenses = async () => {
    const res = await fetch(`${API}/expenses`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();
    setExpenses(data);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={login}>Login</button>

      <h2>Expenses</h2>
      <button onClick={getExpenses}>Load</button>
      <ul>
        {expenses.map(e => (
          <li key={e._id}>{e.title} - {e.amount}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;