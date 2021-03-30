
import React from 'react'

export default function FunctionClick() {
    function ClickedEvent(){
        console.log('button Clicked');
    }

    return (
        <div>
            <button onClick={ClickedEvent()}>Click</button>
        </div>
    )
}

