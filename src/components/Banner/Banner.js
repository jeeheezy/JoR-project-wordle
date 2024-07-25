// This method works but acts more like a template, want something more reusable instead.
// See Banner2
import React from "react";

function Banner({ gameStatus, guessCount, answer }) {
  return (
    <>
      {gameStatus === "won" && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>
              {guessCount === 1 ? "1 guess" : `${guessCount} guesses`}
            </strong>
            .
          </p>
        </div>
      )}

      {gameStatus === "lost" && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Banner;
