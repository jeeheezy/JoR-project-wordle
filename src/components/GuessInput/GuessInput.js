import React from "react";

function GuessInput({ handleAddGuess }) {
  const [guessInput, setGuessInput] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (guessInput.length !== 5) {
      window.alert("Please enter exactly 5 characters.");
      return;
    }

    handleAddGuess(guessInput);
    console.log({ guess: guessInput });
    setGuessInput("");
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => handleSubmit(event)}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        value={guessInput}
        type="text"
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        onChange={(event) => {
          event.preventDefault();
          setGuessInput(event.target.value.toUpperCase());
        }}
      ></input>
    </form>
  );
}

export default GuessInput;
