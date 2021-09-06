import React from "react";
import s from "./Button.module.css";
import PropTypes from "prop-types";

function Button({ onButtonClick }) {
  const buttonClickHandler = (e) => {
    onButtonClick();
  };

  return (
    <>
      <button type="button" onClick={buttonClickHandler} className={s.btn}>
        Load more
      </button>
    </>
  );
}

Button.propTypes = {
  onButtonClick: PropTypes.func,
}

export default Button;
