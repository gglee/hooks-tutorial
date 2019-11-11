import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Info from './components/Info';
import ContextSample from './components/ContextSample';
import CounterUseReducer from './components/CounterUseReducer';
import InfoUseReducer from './components/InfoUseReducer';
import Average from './components/Average';

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Average />
      <InfoUseReducer />
      <CounterUseReducer />
      <ContextSample />
      <Counter />
      <hr />
      <button
        type="button"
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  );
}

export default App;
