import React, { useState } from "react";
import s from "./Searchbar.module.css";
import PropTypes from "prop-types";

function Searchbar({ giveDataToApp }) {
  const [value, setValue] = useState("");

  const inputHandler = (e) => {
    setValue(e.currentTarget.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(`I am here`)
    giveDataToApp(value);
    setValue("");
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={submitHandler}>
        <button type="submit" className={s.button}>
          <span className="s.label">Search</span>
        </button>

        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={inputHandler}
          value={value}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  giveDataToApp: PropTypes.func.isRequired,
};

export default Searchbar;
