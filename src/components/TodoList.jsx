
import { useState } from 'react';

const TodoList = props => {

const [newTask, setNewTask] = useState("")
const [todoList, setTodoList] = useState([])




const changeHandler = (e) => {
    setNewTask(e.target.value)
}



const submitHandler = (e) => {
    e.preventDefault();

    const taskItem = {
        text: newTask,
        complete: false
    }

    setTodoList([...todoList, taskItem]);
    setNewTask("");
}

const handleDeleteTask = (taskToDelete) =>{
    const filteredTasks  = todoList.filter((task, i) =>{
        return i !== taskToDelete;
    })
    setTodoList(filteredTasks);
}

const handleTaskComplete = (index) => {
    const updatedTodoList = todoList.map((task, i) => {
        if(index === i) {

            const updatedTask = { ...task, complete: !task.complete };
            return updatedTask;
        }

        return task;
        });
    setTodoList(updatedTodoList);
    }


    return (
        <div class='container'>
            <div class="d-flex flex-column align-items-center">
                <div class='m-3'>
                    <form onSubmit={ submitHandler }>
                        <div class = 'row g-3'>
                            <div class="col-auto">
                                <input type="text" class="form-control" value={newTask} onChange = { changeHandler }/>
                            </div>
                            <div class="col-auto">
                                <input type="submit" class="btn btn-primary form-control" value="Add" />
                            </div>
                        </div>
                    </form>
                </div>
                <div>
                {
                        todoList.map((task, i) => {
                            const taskClasses = ["p-3"];
                            if(task.complete){
                                taskClasses.push("task-complete")
                            }

                            return (
                            <div class="mb-3" key={i}>
                                        
                                            <input checked = {task.complete} type="checkbox" onChange={(e) => handleTaskComplete(i)}/>
                                            <span className = {taskClasses.join(" ")}>{task.text}</span>
                                            <button class="btn btn-dark" onClick = {(e)=>{handleDeleteTask(i)}}>Delete</button>
                            </div>
                        )})
                    }
                </div>
            </div>  
        </div>
    )
}
export default TodoList;