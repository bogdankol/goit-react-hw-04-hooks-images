import React from "react";
import s from "./Loader.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function LoaderQ() {
  return (
    <div className={s.container}>
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={99000}
      />
    </div>
  );
}

export default LoaderQ;
