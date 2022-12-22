import './ErrorBox.css';

import Button from './button/Button';
import React from 'react';
import ReactDOM from 'react-dom';


const Backdrop = (props) => {
    return (<div className='backdrop' onClick={props.onErrorConfirm} ></div>)
}


const ModalOverlay = (props) => {
    return (
        <div className='container error-box'>
            <div>
                <h2>{props.error}</h2>
            </div>
            <div>
                <p>{props.message}</p>
            </div>
            <div>
                <Button onClickHandler={props.onErrorConfirm} buttonName="OK" ></Button>
            </div>
        </div>
    )
}

const ErrorBox = (props) => {
    return <React.Fragment>
        {ReactDOM.createPortal(<Backdrop onErrorConfirm={props.onErrorConfirm} />, document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(<ModalOverlay onErrorConfirm={props.onErrorConfirm} error={props.error} message={props.message} />, document.getElementById('overlay-root'))}

    </React.Fragment>
}

export default ErrorBox;