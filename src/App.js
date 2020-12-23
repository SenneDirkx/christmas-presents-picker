import './App.css';
import {useState} from 'react';
import Start from './components/Start';
import InGame from './components/InGame';
import Done from './components/Done';


function App() {
  const [state, setState] = useState(0);
  const [total, setTotal] = useState(null);
  const [color, setColor] = useState("#97E5D7");

  var style = {backgroundColor:color};

  return (
    <div className="App" style={style}>
      {state === 0 && <Start setTotal={setTotal} setState={setState} />}
      {state === 1 && <InGame total={total} setState={setState} setColor={setColor}/>}
      {state === 2 && <Done/>}
    </div>
  );
}

export default App;
