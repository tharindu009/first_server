import express from 'express';
import bodyParser from 'body-parser';
import todoRouter from './Routes/todos.js';

const app = express();
const PORT = 4000;

app.use(bodyParser.json());

app.use('/todos',todoRouter);

app.get("/", (req, res) => {
    res.send("API Working")
  });

app.listen(PORT, () => console.log(`Server started on PORT:${PORT}`));