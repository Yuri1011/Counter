import React from "react";
import './Display.css';

type PropsDisplay = {
    counter: number
}

export function Display(props: PropsDisplay) {

    let colorNumber = {
        color: props.counter === 5 ? 'red' : 'black',
        borderColor:props.counter === 5 ? 'red' : 'black'
    }

    return (
        <div className='display' style={colorNumber}>
            {props.counter}
        </div>
    )
}