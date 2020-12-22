import './App.css';
import {useState} from 'react';
import Start from './components/Start';
import InGame from './components/InGame';
import Done from './components/Done';


function App() {
  const [state, setState] = useState(0);
  const [total, setTotal] = useState(null);

  return (
    <div className="App">
      {state === 0 && <Start setTotal={setTotal} setState={setState} />}
      {state === 1 && <InGame total={total} setState={setState}/>}
      {state === 2 && <Done/>}
    </div>
  );
}

export default App;
