import React from "react";
import './ButtonReset.css'
type PropsButtonBack = {
    back: () => void
}

export function ButtonReset(props: PropsButtonBack) {
    return (
        <button onClick={props.back} className='buttonBackStyle'>reset</button>
    )
}