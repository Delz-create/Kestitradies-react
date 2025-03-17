import React from "react";
import { TailSpin } from "react-loader-spinner";
import "./LoadingSpinner.css";

function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <TailSpin
        color="#007bff"
        height={50}
        width={50}
      />
    </div>
  );
}

export default LoadingSpinner;
