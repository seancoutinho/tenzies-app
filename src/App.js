import React, {useState} from 'react';
import './App.css';
import Die from "./components/Die"

function App() {

  //*********STATE VARIABLES********
  //An array of dice objects
  const [dice, setDice] = useState([])


  return (
    <div className="App">
      <h1 className='title'>Tenzies</h1>
      <p className='instructions'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls</p>
      <div className='dice-container'>
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
      </div>
      <button className='roll'>Roll</button>
    </div>
  );
}

export default App;
