import React, {useState} from 'react';
import './App.css';
import {Display} from "./components/Display/Display";
import {ButtonIncrement} from "./components/ButtonIncrement/ButtonIncrement";
import {ButtonReset} from "./components/ButtonReset/ButtonReset";


function App() {
    let [counter, setCounter] = useState(0);

    function increment() {
        counter < 5 ? setCounter(++counter) : setCounter(counter);
    }

    function back() {
        counter > 0 ? setCounter(0) : setCounter(counter);
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



