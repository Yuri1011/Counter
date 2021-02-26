import React from 'react'

type ButtonsPropsType = {
    title: string
    increment: () => void
    reset: () => void
    settings: () => void
    disabledButtons: boolean

}

export function Buttons(props: ButtonsPropsType) {

    let buttons = () => {
        if (props.title === 'increment') {
            props.increment();
        } else if (props.title === 'reset') {
            props.reset();
        } else if (props.title === 'settings') {
            props.settings();
        }
    }
    return (
        <div>
            <button onClick={buttons} disabled={props.disabledButtons}>{props.title}</button>
        </div>
    )
}