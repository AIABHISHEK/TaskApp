import { useState } from 'react';

import './AddTask.css'
import Button from '../button/Button';

import ErrorBox from '../ErrorBox';

const AddTask = (props) => {

    const [task, setTask] = useState('');
    const [error, setError] = useState();

    const onChangeInputTaskHandler = (event) => {
        setTask(event.target.value);
    }
    const onAddTaskHandler = () => {
        if (task.trim().length === 0) {
            setError({
                title: 'task error',
                message: 'input some task'
            });

            return;
        }
        fetch("https://task-app-bb409-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json", {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'Application/json'
            }
        })
            .then((result) => {
                if (result.status === 200) {
                    console.log("task added successfully");
                }
            })
            .catch((error) => {
                console.log(error);
            })
        props.onSaveTaskHandler({ task: task, id: Math.random().toString() });
        console.log("h");

    }

    const onCancelClickHandler = () => {

    }

    const errorHandler = () => {
        setError(null);
    }
    return <div className="container add-task-container">
        <div className="task-label">
            <label>Add Task</label>
        </div>
        <div className="task-input">
            <input onChange={onChangeInputTaskHandler} type='text' name='task' id='task-input' />
        </div>
        <div className="btn-container">
            <Button buttonName='Add Task' onClickHandler={onAddTaskHandler}></Button>
            <Button buttonName='Cancel' cancelClickHandler={onCancelClickHandler}></Button>
        </div>
        {error && <ErrorBox onErrorConfirm={errorHandler} error={error.title} message={error.message} ></ErrorBox>}
    </div>
}

export default AddTask;