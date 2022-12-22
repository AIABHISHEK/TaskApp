import './TaskItem.css';
import Button from '../button/Button';

const TaskItem = (props) => {

    const onDeleteHandler = () => {
        console.log(props.id);
        props.onDeleteHandler(props.id);
        console.log("Taskitem delete handler");
    }
    return <div className="task-box container">
        <div className="task">
            {props.task}
        </div>
        <Button onClickHandler={onDeleteHandler} buttonName='delete'></Button>
    </div>
}

export default TaskItem;