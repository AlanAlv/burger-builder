import React from 'react';
import classes from './Input.module.css';

const input = (props) => {
    let inputElement = null;

    switch (props.elementType){
        case ('input'):
            inputElement = <input 
                className={classes.inputElement}
                {...props.elementConfig} 
                onChange={props.changed}
                value={props.value}/>;
            break;
        case ('textarea'):
                inputElement = <textarea 
                    className={classes.inputElement}
                    {...props.elementConfig} 
                    onChange={props.changed}
                    value={props.value}/>;
                break;
        case ('select'):
                inputElement = 
                    <select 
                        className={classes.inputElement}
                        onChange={props.changed}
                        value={props.value}
                    >
                        {props.elementConfig.options.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.displayValue}
                            </option>

                        ))}
                    </select>;
                break;
        default: 
            inputElement = <input 
                className={classes.inputElement} 
                {...props.elementConfig} 
                onChange={props.changed}
                value={props.value}/>
    }
    return (
        <div className={classes.Input}>
            <label>{props.label}</label>
            {inputElement}
        </div>
    );
};

export default input;