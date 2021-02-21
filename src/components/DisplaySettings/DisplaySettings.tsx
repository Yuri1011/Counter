import React from "react";
import {ButtonSettings} from "../Buttons/ButtonSettings/ButtonSettings";
import c from "./DisplaySettings.module.css";

type DisplaySettingsPropsType = {
    setStartNumber: (number: any) => void
    setMaxNumber: (number: any) => void
    startNumber: any
    maxNumber: any
    setCounter: (number: any) => void
}

export function DisplaySettings({
                                    startNumber,
                                    maxNumber,
                                    setMaxNumber,
                                    setCounter,
                                    setStartNumber
                                }: DisplaySettingsPropsType) {

    let valueMax = React.createRef<HTMLInputElement>();
    let valueStart = React.createRef<HTMLInputElement>();

    let maxValueNumber = () => {
        let number = valueMax.current?.value
        setMaxNumber(number);
    }
    let startValueNumber = () => {
        let number = valueStart.current?.value
        setStartNumber(number);
    }
    let styleInput = {
        color: startNumber === maxNumber || startNumber < 0 || maxNumber < 0 ? 'red' : 'aquamarine',
        borderColor: startNumber === maxNumber || startNumber < 0 || maxNumber < 0 ? 'red' : 'green'
    }

    return (
        <div className={c.displaySettingsBlock}>
            <div>
                <span>max value :</span> <input ref={valueMax}
                                                value={maxNumber}
                                                className={c.inputMax}
                                                style={styleInput}
                                                type={"number"}
                                                onChange={maxValueNumber}/>
            </div>
            <div>
                <span>start value :</span> <input ref={valueStart}
                                                  value={startNumber}
                                                  className={c.inputStart}
                                                  style={styleInput}
                                                  type={"number"}
                                                  onChange={startValueNumber}/>
            </div>
            <div>
                <ButtonSettings maxNumber={maxNumber}
                                startNumber={startNumber}
                                setCounter={setCounter}/>
            </div>
        </div>
    )
}