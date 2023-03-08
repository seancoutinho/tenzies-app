import React, { useState, useEffect } from "react";
import "./App.css";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
  //*********STATE VARIABLES********
  //An array of dice objects
  const [dice, setDice] = useState(allNewDice);
  const [gameState, setGameState] = useState(false); //False if game hasn't been won yet

  function generateNewDice() {
    return {
      value: Math.ceil(Math.random() * 6),
      id: nanoid(),
      isHeld: false,
    };
  }

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstDiceValue = dice[0].value;
    const allSameNumbers = dice.every((die) => die.value === firstDiceValue);

    if (allHeld && allSameNumbers) {
      setGameState(true);
    }
  }, [dice]);

  function allNewDice() {
    const arrOfDice = [];
    for (let i = 0; i < 10; i++) {
      arrOfDice.push(generateNewDice());
    }
    return arrOfDice;
  }

  function rollDice() {
    gameState ? setDice(allNewDice(),
    setGameState(false)): 
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.isHeld
          ? die
          : { ...die, value: Math.ceil(Math.random() * 6), id: nanoid() };
      })
    );
  }

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const diceElements = dice.map((die) => {
    return (
      <Die
        key={die.id}
        value={die.value}
        isHeld={die.isHeld}
        holdDice={() => holdDice(die.id)}
      />
    );
  });

  return (
    <div className="App">
      {gameState && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls
      </p>
      <div className="dice-container">{diceElements}</div>
      <button onClick={rollDice} className="roll">
        {gameState ? "New Game" : "Roll"}
      </button>
      {gameState && (
        <h1 className="won">
          You Won!!
        </h1>
      )}
    </div>
  );
}

export default App;
