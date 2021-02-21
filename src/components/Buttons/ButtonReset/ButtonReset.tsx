import React from "react";
import c from "./ButtonReset.module.css";

type ButtonResetPropsType = {
    maxNumber: any
    startNumber: any
    counter: number
    setCounter: (number: any) => void
}

export function ButtonReset({maxNumber, startNumber, counter, setCounter}: ButtonResetPropsType) {
    let disabledButtonReset = startNumber < 0 || maxNumber < 0 || startNumber === maxNumber
    let reset = () => {
        counter > 0 ? setCounter(startNumber) : setCounter(counter);
    }


    return (
        <div className={c.buttonResetBlockStyle}>
            <button onClick={reset}
                    className={c.buttonResetStyle}
                    disabled={disabledButtonReset}>reset
            </button>
        </div>
    )
}