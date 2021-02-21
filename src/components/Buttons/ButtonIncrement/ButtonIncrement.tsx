import React from "react"
import c from "./ButtonIncrement.module.css";

type ButtonIncrementPropsType = {
    counter: number
    increment: () => void
    maxNumber: any
    startNumber: any
}

export function ButtonIncrement({counter, increment, maxNumber, startNumber}: ButtonIncrementPropsType) {
    let disabledButton = counter === Number(maxNumber) || startNumber < 0 || maxNumber < 0 || startNumber === maxNumber;

    return (
        <div className={c.buttonIncrBlockStyle}>
            <button onClick={increment}
                    className={c.buttonIncrStyle}
                    disabled={disabledButton}>increment
            </button>
        </div>
    )
}