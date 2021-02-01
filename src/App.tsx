import React, {useState} from 'react';
import './App.css';
import {Display} from "./components/Display/Display";
import {ButtonIncrement} from "./components/ButtonIncrement/ButtonIncrement";
import {ButtonReset} from "./components/ButtonReset/ButtonReset";


function App() {
    const [counter, setCounter] = useState(0);

    function increment() {
        if (counter < 5)
            setCounter(counter + 1);
    }

    function back() {
        if (counter > 0) {
            setCounter(0);
        }
    }

    return (
        <div className='App'>
            <Display counter={counter}/>
            <ButtonIncrement increment={increment}/>
            <ButtonReset back={back}/>
        </div>
    )
}

export default App;



