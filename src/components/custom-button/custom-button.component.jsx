import React from "react";

import "./custom-button.styles.scss";

function CustomButton({ children, isGoogleSignIn, ...otherProps }) {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children.toUpperCase()}
    </button>
  );
}

export default CustomButton;
