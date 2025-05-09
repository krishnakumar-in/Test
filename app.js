const express = require('express');
const app = express();

app.use(express.json());

const port = 3000;
app.listen(port, () => {
    console.log("Server Running on PORT:", port);
});

let tasks = [];

//create the route to add a new task

app.post("/tasks", (req, res) => {
    const task = req.body.task;
    tasks.push({id:tasks.length + 1});
    res.status(201).json({message: "Task Created successfully", tasks});
});

//create the route to get all tasks

app.get('/gettasks', (req, res)=>{
    res.status(200).json(tasks);
});

// create a route to update task by its ID

app.put('/updatetasks/:id', (req, res) => {
    const id = parsetInt(req.params.id);
    const task = req.body.task;
    const taskIndex = tasks.findIndex((t)=>t.id === id);
    if(taskIndex !== -1){
        tasks[taskIndex].task = task;
        res.status(200).json({message: 'Task updated successfully', tasks});
    } else {
        res.status(404).json({message: 'Task not found'});
    }
});

// create a route to delete a task

app.delete('/deletetasks/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    tasks = tasks.filter((task) => task.id !== id);
    res.status(200).json({message:'Task deleted Successfully', tasks});
});