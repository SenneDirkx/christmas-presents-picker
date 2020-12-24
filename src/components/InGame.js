import React, {useState, useEffect} from 'react';

export default function InGame(props) {

    const colors = ["#97E5D7", "#D2EBD8", "#EFB0C9", "#FFD4B8", "#FEB7B3", "#A1C9F1"]
    const buttonColors = ["#79B7AC", "#A8BCAD", "#BF8DA1", "#CCAA93", "#CB928F", "#81A1C1"]
    
    const [numbersToGo, setNumbersToGo] = useState([]);
    const [current, setCurrent] = useState(null);
    const [buttonColor, setButtonColor] = useState("#79B7AC");

    const animationSound = new Audio('./anim.mp3');
    const endSound = new Audio('./end.mp3');

    useEffect(() => {
        var list = [];
        for (var i = 1; i <= props.total; i++) {
            list.push(i);
        }
        setNumbersToGo(list);
    }, [props.total]);

    var animationStep = (end, number) => {
        if (end) {
            endSound.currentTime = 0;
            endSound.play();
        } else {
            animationSound.currentTime = 0;
            animationSound.play();
        }
        setCurrent(number);
    }

    var next = () => {
        if (numbersToGo.length === 0) {
            props.setState(2);
            return;
        }
        var index = Math.floor(Math.random()*numbersToGo.length);
        var nextElem = numbersToGo[index];
        var copy = [...numbersToGo];
        copy.splice(index,1);

        const delays = [50, 55, 60, 70, 80, 100, 120, 140, 170, 200, 250, 280, 330, 350, 410, 460, 500, 540, 600];
        var sum = 0;
        for (var i = 0; i < delays.length; i++) {
            sum = sum + delays[i];
            let animElem = copy[Math.floor(Math.random()*copy.length)]
            setTimeout(() => animationStep(false, animElem), sum);
        }

        setTimeout(() => {
            animationStep(true, nextElem);
            setNumbersToGo(copy);
            let colorIndex = Math.floor(Math.random()*colors.length);
            let newColor = colors[colorIndex];
            let newButtonColor = buttonColors[colorIndex];
            props.setColor(newColor);
            setButtonColor(newButtonColor);
        }, sum+1200);
    }

    const style = {
        backgroundColor: buttonColor
    }

    return (
        <div>
            <h1>Nog {numbersToGo.length} <img src="https://www.flaticon.com/svg/static/icons/svg/1139/1139982.svg" alt="Cadeautjes" width="80" height="80"/> te gaan</h1><br/>
            <h2>{current}</h2><br/>
            <button id="nextButton" onClick={next} style={style}>Volgende</button>
        </div>
    )
}
