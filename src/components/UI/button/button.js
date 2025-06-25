import React from "react";
import "./button.css";
function Button(props) {
  return (
    <div>
      <button
        className={`Button ${
          props.btnType === "success" ? "Success" : "Danger"
        }`}
        onClick={props.clicked}
      >
        {props.children}
      </button>
    </div>
  );
}

export default Button;
