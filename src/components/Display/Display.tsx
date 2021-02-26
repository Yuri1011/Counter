import React from "react";
import c from "./Display.module.css";
import {Buttons} from "../Buttons/Buttons";

type PropsDisplay = {
    counter: number
    increment: () => void
    reset: () => void
    settings: () => void
    startNumber: any
    maxNumber: any
    setCounter: (number: any) => void
    disabledInc: boolean
    disabledReset: boolean
}

export function Display(props: PropsDisplay) {

    let showDisplayCounter = {
        display: +props.counter ? 'block' : 'none'
    }

    let styleDisplayMessage = {
        display: +props.counter ? 'none' : 'block',
        color: +props.startNumber === +props.maxNumber || props.startNumber < 0 || props.maxNumber < 0 || +props.startNumber > +props.maxNumber ? 'darkred' : 'chartreuse'
    }
    let colorNumberStyle = {
        color: props.counter === +props.maxNumber ? 'red' : 'aquamarine',
        borderColor: props.counter === +props.maxNumber || +props.startNumber === +props.maxNumber || props.startNumber < 0 || props.maxNumber < 0 || +props.startNumber > +props.maxNumber ? 'red' : 'green'
    }
    let inputValidation = () => {
        if (+props.maxNumber === +props.startNumber || +props.maxNumber < 0 || +props.startNumber < 0 || +props.startNumber > +props.maxNumber) {
            return "Incorrect value";
        } else if (+props.maxNumber != 0 || +props.maxNumber > 0) {
            return "enter values and press 'set' ";
        }
    }

    return (
        <div className={c.displayBlock}>
            <div style={colorNumberStyle} className={c.displayStyle}>

                <div className={c.counter} style={showDisplayCounter}>
                    {props.counter}
                </div>

                <div className={c.message} style={styleDisplayMessage}>
                    {inputValidation()}
                </div>

            </div>
            <div className={c.buttonDisplayBlock}>
                <div>
                    <Buttons title={'increment'}
                             disabledButtons={props.disabledInc}
                             reset={props.reset}
                             settings={props.settings}
                             increment={props.increment}/>
                </div>
                <div>
                    <Buttons title={'reset'}
                             disabledButtons={props.disabledReset}
                             settings={props.settings}
                             increment={props.increment}
                             reset={props.reset}/>
                </div>
            </div>
        </div>
    )
}