// used in WonBanner and LostBanner, created for more abstraction
import React from "react";

function Banner2({ status, children }) {
  return <div className={`${status} banner`}>{children}</div>;
}

export default Banner2;
