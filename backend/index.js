const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let todos = [{ id: 1, task: "Learn Docker Compose" }];

app.get('/todos', (req, res) => res.json(todos));

app.post('/todos', (req, res) => {
    const newTodo = { id: Date.now(), task: req.body.task };
    todos.push(newTodo);
    res.json(newTodo);
});

app.listen(5000, () => console.log('Backend running on port 5000'));