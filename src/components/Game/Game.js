import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import Keyboard from "../Keyboard";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");
  const validatedGuesses = guesses.map((guess) => checkGuess(guess, answer));

  function handleAddGuess(guessInput) {
    const nextGuesses = [...guesses, guessInput];
    setGuesses(nextGuesses);

    if (guessInput === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }
  return (
    <>
      <GuessResults validatedGuesses={validatedGuesses}></GuessResults>
      <GuessInput handleAddGuess={handleAddGuess} gameStatus={gameStatus} />
      {gameStatus === "won" && <WonBanner guessCount={guesses.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
      <Keyboard validatedGuesses={validatedGuesses} />
    </>
  );
}

export default Game;
