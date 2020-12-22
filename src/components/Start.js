import React, {useState} from 'react';

export default function Start(props) {
    const [number, setNumber] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    var handleChange = (event) => {
        setNumber(event.target.value);
    }

    var handleSubmit = () => {
        let integer = parseInt(number);
        if (isNaN(integer)) setErrorMsg("Da is geen getal?");
        else {
            props.setTotal(integer);
            props.setState(1);
        }
    }

    return (
        <div>
            <h1>Kerstmis Cadeaus Nummerkes</h1>
            <h3>by Senne</h3>
            <input type="text" value={number} onChange={handleChange}></input><br/>
            {errorMsg}<br/>
            <button onClick={handleSubmit}>Start</button>
        </div>
    )
}
