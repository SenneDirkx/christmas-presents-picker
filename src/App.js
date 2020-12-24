import './App.css';
import Particles from 'react-particles-js';

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
      <div id="overlay">
      {state === 0 && <Start setTotal={setTotal} setState={setState} />}
      {state === 1 && <InGame total={total} setState={setState} setColor={setColor}/>}
      {state === 2 && <Done/>}
      </div>
      <Particles
        params={{
          "particles": {
              "number": {
                  "value": 160,
                  "density": {
                      "enable": false
                  }
              },
              "size": {
                  "value": 10,
                  "random": true
              },
              "move": {
                  "direction": "bottom",
                  "out_mode": "out"
              },
              "line_linked": {
                  "enable": false
              }
          },
          "interactivity": {
              "events": {
                  "onclick": {
                      "enable": true,
                      "mode": "remove"
                  }
              },
              "modes": {
                  "remove": {
                      "particles_nb": 10
                  }
              }
          }
      }}/>
    </div>
  );
}

export default App;
