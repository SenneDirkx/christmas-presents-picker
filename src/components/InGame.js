import React, {useState, useEffect} from 'react';

export default function InGame(props) {

    const colors = ["#97E5D7", "#D2EBD8", "#EFB0C9", "#FFD4B8", "#FEB7B3", "#A1C9F1"]
    const buttonColors = ["#79B7AC", "#A8BCAD", "#BF8DA1", "#CCAA93", "#CB928F", "#81A1C1"]
    
    const [numbersToGo, setNumbersToGo] = useState([]);
    const [current, setCurrent] = useState(null);
    const [buttonColor, setButtonColor] = useState("#79B7AC")

    useEffect(() => {
        var list = [];
        for (var i = 1; i <= props.total; i++) {
            list.push(i);
        }
        setNumbersToGo(list);
    }, [props.total])

    var next = () => {
        if (numbersToGo.length === 0) {
            props.setState(2);
            return;
        }
        var index = Math.floor(Math.random()*numbersToGo.length);
        var nextElem = numbersToGo[index];
        var copy = numbersToGo;
        copy.splice(index,1);
        setNumbersToGo(copy);
        setCurrent(nextElem);
        let colorIndex = Math.floor(Math.random()*colors.length);
        let newColor = colors[colorIndex];
        let newButtonColor = buttonColors[colorIndex];
        props.setColor(newColor);
        setButtonColor(newButtonColor);
    }

    const style = {
        backgroundColor: buttonColor
    }

    return (
        <div>
            <h1>Cadeautjes te gaan: {numbersToGo.length}</h1><br/>
            <h2>{current}</h2><br/>
            <button id="nextButton" onClick={next} style={style}>Volgende</button>
        </div>
    )
}
