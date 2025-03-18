import React from "react";
import "./LoadingSpinner.css";
import { ClipLoader } from "react-spinners";

function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <ClipLoader
        color="#007bff"
        size={50}
      />
    </div>
  );
}

export default LoadingSpinner;
