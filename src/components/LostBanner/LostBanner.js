import React from "react";
import Banner2 from "../Banner2";

function LostBanner({ answer }) {
  return (
    <Banner2 status="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner2>
  );
}

export default LostBanner;
