import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleAddGuess(guessInput) {
    const newGuess = {
      guessInput,
      id: crypto.randomUUID(),
    };

    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);
  }
  return (
    <>
      <GuessInput handleAddGuess={handleAddGuess} />
    </>
  );
}

export default Game;
