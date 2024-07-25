import React from "react";
import Banner2 from "../Banner2";

function WonBanner({ guessCount, handleRestart }) {
  return (
    <Banner2 status="happy" handleRestart={handleRestart}>
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {guessCount === 1 ? "1 guess" : `${guessCount} guesses`}
        </strong>
        .
      </p>
    </Banner2>
  );
}

export default WonBanner;
