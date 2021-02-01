import React from "react";
import './ButtonIncrement.css'
type PropsButtonIncrement = {
    increment: () => void
}

export function ButtonIncrement(props: PropsButtonIncrement) {
    return (
        <div>
            <button onClick={props.increment} className='buttonStyle'>inc</button>
        </div>
    )
}