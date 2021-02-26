import React, {ChangeEvent} from "react";
import c from "./DisplaySettings.module.css";
import {Buttons} from "../Buttons/Buttons";

type DisplaySettingsPropsType = {
    setStartNumber: (number: any) => void
    setMaxNumber: (number: any) => void
    startNumber: any
    maxNumber: any
    setCounter: (number: any) => void
    increment: () => void
    reset: () => void
    settings: () => void
    counter: number
    setDisabledInc: (boolean: boolean) => void
    setDisabledReset: (boolean: boolean) => void
    setDisabledSet: (boolean: boolean) => void
    disabledSet: boolean
}

export function DisplaySettings(props: DisplaySettingsPropsType) {

    let maxValueNumber = (event: ChangeEvent<HTMLInputElement>) => {
        let number = event.currentTarget.value
        props.setMaxNumber(number);
        props.setDisabledInc(true);
        props.setDisabledReset(true);
        props.setDisabledSet((+number < 0) || (+number === +props.startNumber) || (+number > +props.maxNumber));
    }

    let startValueNumber = (event: ChangeEvent<HTMLInputElement>) => {
        let number = event.currentTarget.value
        props.setStartNumber(number);
        props.setDisabledInc(true);
        props.setDisabledReset(true);
        props.setDisabledSet((+number <= 0) || (+number >= +props.maxNumber) || (+number > +props.maxNumber));
    }

    let styleInputMax = {
        color: +props.startNumber > +props.maxNumber || +props.maxNumber < 0 || +props.startNumber === +props.maxNumber ? 'red' : 'aquamarine',
        borderColor: +props.startNumber > +props.maxNumber || +props.maxNumber < 0 || +props.startNumber === +props.maxNumber ? 'red' : 'green'
    }
    let styleInputStart = {
        color: +props.startNumber > +props.maxNumber || +props.startNumber < 0 || +props.startNumber === +props.maxNumber ? 'red' : 'aquamarine',
        borderColor: +props.startNumber > +props.maxNumber || +props.startNumber < 0 || +props.startNumber === +props.maxNumber ? 'red' : 'green'
    }

    return (
        <div className={c.displaySettingsBlock}>
            <div>
                <span>max value :</span> <input
                value={props.maxNumber}
                className={c.inputMax}
                style={styleInputMax}
                type={"number"}
                onChange={maxValueNumber}/>
            </div>
            <div>
                <span>start value :</span> <input
                value={props.startNumber}
                className={c.inputStart}
                style={styleInputStart}
                type={"number"}
                onChange={startValueNumber}/>
            </div>
            <div>
                <Buttons title={'settings'}
                         disabledButtons={props.disabledSet}
                         increment={props.increment}
                         settings={props.settings}
                         reset={props.reset}/>
            </div>
        </div>
    )
}