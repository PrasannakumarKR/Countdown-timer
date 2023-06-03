import React, { useState } from "react";
import "./App.css"
const Timer = () => {

    let [count, setCount] = useState(``);
    const [buttonClicked, setButtonClicked] = useState(false);

    function handleInputChange(event) {
        setCount(Math.floor(event.target.value));
    }

    const decrease = () => {

        if (!buttonClicked) {
            if (count >= 0) {
                setCount((count--))
            }
            setTimeout(decrease, 1000);
            setButtonClicked(true);
        }
    }

    const reset = () => {
        window.location.reload();
    }

    return (
        <div className="viewport">
            <div className="display">
                <h1>Countdown-Timer</h1>
                <div>
                    <input className="count" type="number" value={count} onChange={handleInputChange} />
                </div>
                <div className="button">
                    <button onClick={decrease} disabled={buttonClicked}>Start</button>
                    <button onClick={reset} >Reset</button>
                </div>
            </div>
        </div>
    );
}

export default Timer;