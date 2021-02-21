import React, {useEffect} from "react";
import c from "./ButtonSettings.module.css";

type ButtonSettingsPropsType = {
    maxNumber: any
    startNumber: any
    setCounter: (number: any) => void
}

export function ButtonSettings({maxNumber, setCounter, startNumber}: ButtonSettingsPropsType) {

    let disabledButtonSettings = startNumber < 0 || maxNumber < 0 || startNumber === maxNumber;

    useEffect(() => {
        let valueAsString = localStorage.getItem('startValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setCounter(newValue);
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('startValue', startNumber)
    }, [startNumber])

    let settingsSend = () => {
        setCounter(startNumber);
    }

    return (
        <div>
            <button onClick={settingsSend}
                    className={c.buttonSettingsStyle}
                    disabled={disabledButtonSettings}>Setting
            </button>
        </div>
    )
}