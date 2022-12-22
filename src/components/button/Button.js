import './Button.css';

const Button = (props) => {
    return <div className = 'btn'>
                <button onClick={props.onClickHandler} className = "delete-btn button-86" type = "button" >
                    {props.buttonName}
                </button>
            </div >
}

export default Button;