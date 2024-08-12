const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
const port = 5000;

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json());

// Placeholder data
const todos = [
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
    { id: 3, text: 'Connect frontend to backend', completed: false },
];

// Endpoint to get todos
app.get('/api/todos', (req, res) => {
    res.json(todos);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
