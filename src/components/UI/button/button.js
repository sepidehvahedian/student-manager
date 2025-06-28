import React from "react";
import "./button.css";
import PropTypes from "prop-types";

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

export default React.memo(Button);
Button.propTypes = {
  children: PropTypes.string.isRequired,
  clicked: PropTypes.func.isRequired,
  btnType: PropTypes.string,
};
Button.defaultProps = {
  btnType: "success",
};
