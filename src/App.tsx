import React, {useEffect, useState} from 'react';
import './App.css';
import {Display} from "./components/Display/Display";
import {DisplaySettings} from "./components/DisplaySettings/DisplaySettings";

function App() {
    let [counter, setCounter] = useState(0);
    let [maxNumber, setMaxNumber] = useState('0');
    let [startNumber, setStartNumber] = useState('0');

    useEffect(() => {
        let valueAsString = localStorage.getItem('maxValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setMaxNumber(newValue);
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('maxValue', maxNumber);
    }, [maxNumber])

    let increment = () => {
        counter < Number(maxNumber) ? setCounter(++counter) : setCounter(counter);
    }

    return (
        <div className='App'>
            <DisplaySettings setMaxNumber={setMaxNumber}
                             setStartNumber={setStartNumber}
                             setCounter={setCounter}
                             maxNumber={maxNumber}
                             startNumber={startNumber}/>
            <Display counter={counter}
                     increment={increment}
                     maxNumber={maxNumber}
                     startNumber={startNumber}
                     setCounter={setCounter} />
        </div>
    )
}

export default App;



