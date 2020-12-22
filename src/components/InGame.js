import React, {useState, useEffect} from 'react';

export default function InGame(props) {
    
    const [numbersToGo, setNumbersToGo] = useState([]);
    const [current, setCurrent] = useState(null);

    useEffect(() => {
        var list = [];
        for (var i = 1; i <= props.total; i++) {
            list.push(i);
        }
        setNumbersToGo(list);
    }, [props.total])

    var next = () => {
        var index = Math.floor(Math.random()*numbersToGo.length);
        var nextElem = numbersToGo[index];
        var copy = numbersToGo;
        copy.splice(index,1);
        if (copy.length === 0) props.setState(2);
        else {
            setNumbersToGo(copy);
            setCurrent(nextElem);
        }
    }

    return (
        <div>
            Cadeautjes te gaan: {numbersToGo.length}<br/>
            {current}<br/>
            <button onClick={next}>Volgende</button>
        </div>
    )
}
