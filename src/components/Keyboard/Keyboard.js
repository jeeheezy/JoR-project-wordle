import React from "react";
import styles from "./Keyboard.module.css";

const ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

function getLetterStatus(validatedGuesses) {
  const letterStatuses = {};
  const flattenedLetters = validatedGuesses.flat();
  flattenedLetters.forEach(({ letter, status }) => {
    const currentStatus = letterStatuses[letter];

    if (currentStatus === undefined) {
      letterStatuses[letter] = status;
      return;
    }

    const STATUS_RANKS = {
      correct: 1,
      misplaced: 2,
      incorrect: 3,
    };
    const loggedStatusRank = STATUS_RANKS[currentStatus];
    const newStatusRank = STATUS_RANKS[status];
    if (newStatusRank < loggedStatusRank) {
      letterStatuses[letter] = status;
    }
  });

  return letterStatuses;
}

function Keyboard({ validatedGuesses }) {
  const statusByLetter = getLetterStatus(validatedGuesses);

  return (
    <div className={styles.keyboard}>
      {ROWS.map((row, index) => (
        <div className={styles.row} key={index}>
          {row.map((letter) => (
            <div
              key={letter}
              className={`${styles.letter} ${styles[statusByLetter[letter]]}`}
            >
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
