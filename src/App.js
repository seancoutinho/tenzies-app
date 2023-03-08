import React, {useState} from 'react';
import './App.css';
import Die from "./components/Die";
import { nanoid } from 'nanoid';

function App() {

  //*********STATE VARIABLES********
  //An array of dice objects
  const [dice, setDice] = useState(allNewDice)
  
  function generateNewDice() {
    return {
      value: Math.ceil(Math.random() * 6),
      id: nanoid(),
      isHeld: false
    }
  }

  function allNewDice() {
    const arrOfDice = []
    for(let i=0; i<10; i++) {
      arrOfDice.push(generateNewDice())
    }
    return arrOfDice;
  }

  function rollDice() {
    setDice(allNewDice());
  }

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
        return die.id === id ? 
            {...die, isHeld: !die.isHeld} :
            die
    }))
}


  const diceElements = dice.map(die => {
    return <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)}/>;
  })

  return (
    <div className="App">
      <h1 className='title'>Tenzies</h1>
      <p className='instructions'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls</p>
      <div className='dice-container'>
        {diceElements}
      </div>
      <button onClick={rollDice} className='roll'>Roll</button>
    </div>
  );
}

export default App;
