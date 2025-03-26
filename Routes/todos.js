import express from 'express';

const todoRouter = express.Router();

let todoList = [
    {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false
    }
]


todoRouter.get('/', (req, res) => {
    console.log(todoList);
    res.send(todoList);
});

todoRouter.post('/', (req, res) => {
    //console.log("todo list POST");
    const todo = req.body;
    //console.log(todo);
    todoList.push(todo);
    res.send(`Todo ${todo.title} added`);
});

todoRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const foundTodo = todoList.find((todo) => todo.id == id);
    console.log(foundTodo);
    res.send(foundTodo);
});

todoRouter.delete('/:id',(req,res) =>{
    const id = req.params.id;
    todoList = todoList.filter((todo) => todo.id !== id);
console.log(id);
    res.send('List Deleted');
});

export default todoRouter;