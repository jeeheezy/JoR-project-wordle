import React from "react";
import Banner2 from "../Banner2";

function LostBanner({ answer, handleRestart }) {
  return (
    <Banner2 status="sad" handleRestart={handleRestart}>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner2>
  );
}

export default LostBanner;
