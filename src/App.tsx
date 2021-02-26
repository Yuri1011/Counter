import React, {useEffect, useState} from 'react';
import './App.css';
import {Display} from "./components/Display/Display";
import {DisplaySettings} from "./components/DisplaySettings/DisplaySettings";

function App() {
    let [counter, setCounter] = useState(0);
    let [maxNumber, setMaxNumber] = useState(0);
    let [startNumber, setStartNumber] = useState(0);
    let [disabledInc, setDisabledInc] = useState(false);
    let [disabledReset, setDisabledReset] = useState(false);
    let [disabledSet, setDisabledSet] = useState(true);

    useEffect(() => {
        let valueAsString = localStorage.getItem('maxValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setMaxNumber(newValue);
        }
    }, [])

    let increment = () => {
        counter < maxNumber ? setCounter(++counter) : setCounter(0);
        setDisabledInc(counter === +maxNumber);
        setDisabledReset(false)
    }
    let reset = () => {
        setCounter(startNumber);
        setDisabledInc(false);
        setDisabledReset(true);
    }
    let settings = () => {
        localStorage.setItem('maxValue', maxNumber.toString());
        setCounter(startNumber);
        setDisabledInc(false);
        setDisabledSet(true);
    }

    return (
        <div className='App'>
            <DisplaySettings reset={reset}
                             increment={increment}
                             settings={settings}
                             setDisabledInc={setDisabledInc}
                             setDisabledReset={setDisabledReset}
                             disabledSet={disabledSet}
                             setDisabledSet={setDisabledSet}
                             counter={counter}
                             setCounter={setCounter}
                             startNumber={startNumber}
                             maxNumber={maxNumber}
                             setMaxNumber={setMaxNumber}
                             setStartNumber={setStartNumber}/>
            <Display reset={reset}
                     settings={settings}
                     disabledInc={disabledInc}
                     disabledReset={disabledReset}
                     maxNumber={maxNumber}
                     startNumber={startNumber}
                     setCounter={setCounter}
                     increment={increment}
                     counter={counter}/>
        </div>
    )
}

export default App;



