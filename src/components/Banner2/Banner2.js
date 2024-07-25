// used in WonBanner and LostBanner, created for more abstraction
import React from "react";

function Banner2({ status, children, handleRestart }) {
  return (
    <div className={`${status} banner`}>
      {children}
      <button className="restart" onClick={handleRestart}>
        Restart Game
      </button>
    </div>
  );
}

export default Banner2;
