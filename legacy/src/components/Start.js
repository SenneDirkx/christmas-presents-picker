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

    const style = {
        backgroundColor: "#91d8cb"
    }

    return (
        <div>
            <h1 style={{textAlign: "center"}}>
            🎁
             Cadeau Kiezer</h1>
            <h3>by Senne</h3>
            <input type="text" value={number} onChange={handleChange} style={style}></input><br/>
            <p>{errorMsg}</p><br/>
            <button style={style} onClick={handleSubmit}>Start</button>
        </div>
    )
}
