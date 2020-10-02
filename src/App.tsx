import React from 'react';

import './App.css';
import { Counter } from './Counter';
import { TextField } from './TextField';

const App: React.FC = () =>{
  return<div>
    <TextField 
      text="Hello" 
      person={{firstName:'',lastName:''}}
     
      />
      <Counter>
        {(count, setCount)=>(
          <div>
            {count}
            <button onClick={()=> setCount(count + 1)}>+</button>
          </div>
        )}
      </Counter>
  </div>
}

export default App;
