import express from 'express';
import axios from 'axios';

const todoRouter = express.Router();

let todoList = [];

async function  fetchInitialData() {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");   
        // console.log(response);
        todoList= response.data;
    } 
    catch (error) {
        console.error(error);
        throw error;
    }
}

fetchInitialData();


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