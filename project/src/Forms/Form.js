import React from 'react';
import './Form.css';

const Form = (props) => {
    let inputElement = null;

    switch ( props.elementType ) {
        case ( 'input' ):
        inputElement = <input className='InputElement'
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}/>;
        break;
        case ( 'textarea' ):
        inputElement = <textarea className= 'InputElement'
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed} />;
        break;
    default:
    inputElement = <input className='InputElement'
    {...props.elementConfig}
    value={props.value}
    onChange={props.changed} />;
}

return (
    <div className= 'Input'>
        <label className='Label' >{props.label}</label>
        {inputElement}
    </div>
);
}


export default Form;