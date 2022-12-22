import './task.css';
import TaskItem from './TaskItem';
const Tasks = (props) => {

    const onDeleteHandler = (id) => {
        props.onDeleteHandler(id);
    }

    let taskList = <div>
        No tasks Add Some
    </div>
    if (props.tasks.length > 0) {
        taskList = props.tasks.map((item) => {
            return <TaskItem onDeleteHandler={onDeleteHandler} task={item.task} id={item.id} key={item.id} ></TaskItem>
        })
    }
    
    return <div className="container task-container">
        {taskList}
    </div>
}

export default Tasks;