import { useState } from 'react';

import './App.css';

import Task from './components/Task/Task';
import AddTask from './components/AddTask/AddTask';

let tasks = [
  {
    id: 'a1',
    task: "This is task 1 "
  },
  {
    id: 'a2',
    task: "task is task 2. Do this task after task 1"
  }
];


function App() {
  const [taskList, setTask] = useState(tasks);
  const onSaveTaskHandler = (newTask) => {
    setTask((prevTasks) => {
      return [...prevTasks, newTask];
    });
  }
  const onDeleteTaskHandler = (taskId) => {
    console.log(taskId);
    let newList = taskList.filter(item => { return item.id.toString() !== taskId });
    setTask(newList);
  }
  return (

    // <React.Fragment>
    // </React.Fragment>

    <>
      <div className="App">
        <h2>Your Tasks</h2>
        <AddTask onSaveTaskHandler={onSaveTaskHandler} />
        <Task onDeleteHandler={onDeleteTaskHandler} tasks={taskList} />
      </div>
    </>
  );
}

export default App;
