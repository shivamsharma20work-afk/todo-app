import React, { useState, useEffect } from 'react';
import './app.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/todos')
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  const addTodo = () => {
    fetch('http://3.110.198.104:5000/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ task: input })
    })
    .then(res => res.json())
    .then(newTodo => setTodos([...todos, newTodo]));
    setInput('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Todo App </h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(t => <li key={t.id}>{t.task}</li>)}
      </ul>
    </div>
  );
}

export default App;
