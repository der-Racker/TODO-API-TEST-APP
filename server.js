var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
    id: 1,
    description: 'Meet mom for lunch',
    completed: false
}, {
    id: 2,
    description: 'Go to market',
    completed: false
}, {
    id: 3,
    description: 'Let the dog out',
    completed: true
}];


app.get('/', function (req, res) {
    res.send('Todo API Root');
});

// GET /todos          gets the whole collection of todos
app.get('/todos', function(req, res) {
    res.json(todos);
});

// GET /todos/:id(represents variable that will be passed in)        gets a specific todo model
app.get('/todos/:id', function(req, res) {
    var todoId = parseInt(req.params.id, 10);
    var matchedTodo;

    // iterate over the todos array. Find the match.
    todos.forEach(function (todo) {
        if (todoId === todo.id) {
            matchedTodo = todo;
        }
    });

    if (matchedTodo) {
        res.json(matchedTodo);
    } else {
        res.status(404).send();
    }
});

app.listen(PORT, function() {
    console.log('Express listening on port ' + PORT);
});