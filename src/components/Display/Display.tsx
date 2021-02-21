import React from "react";
import c from "./Display.module.css";
import {ButtonIncrement} from "../Buttons/ButtonIncrement/ButtonIncrement";
import {ButtonReset} from "../Buttons/ButtonReset/ButtonReset";

type PropsDisplay = {
    counter: number
    increment: () => void
    startNumber: any
    maxNumber: any
    setCounter: (number: any) => void
}

export function Display({counter, increment, maxNumber, startNumber, setCounter}: PropsDisplay) {

    let colorNumberStyle = {
        color: counter === Number(maxNumber) ? 'red' : 'aquamarine',
        borderColor: counter === Number(maxNumber) || startNumber === maxNumber || startNumber < 0 || maxNumber < 0 ? 'red' : 'green'
    }
    let styleDisplayCounter = {
        display: counter ? 'block' : 'none'
    }
    let styleDisplayMessage = {
        display: counter ? 'none' : 'block',
        color: startNumber === maxNumber || startNumber < 0 || maxNumber < 0 ? 'darkred' : 'chartreuse',
    }
    let inputValidation = () => {
        if (maxNumber === startNumber || maxNumber < 0 || startNumber < 0) {
            return "Incorrect value";
        } else if (maxNumber != 0 || maxNumber > 0) {
            return "enter values and press 'set' ";
        }
    }

    return (
        <div className={c.displayBlock}>
            <div style={colorNumberStyle} className={c.displayStyle}>

                <div className={c.counter} style={styleDisplayCounter}>
                    {counter}
                </div>
                <div className={c.message} style={styleDisplayMessage}>
                    {inputValidation()}
                </div>

            </div>
            <div className={c.buttonDisplayBlock}>
                <ButtonIncrement counter={counter}
                                 startNumber={startNumber}
                                 increment={increment}
                                 maxNumber={maxNumber}/>
                <ButtonReset
                    maxNumber={maxNumber}
                    startNumber={startNumber}
                    counter={counter}
                    setCounter={setCounter}/>
            </div>
        </div>
    )
}