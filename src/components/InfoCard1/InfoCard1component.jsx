import React from "react";
import "./../../App.scss";

export const InfoCard1component = ({
  title,
  subtitle1,
  subtitle1Value,
  subtitle2,
  subtitle2Value,
  buttonText,
  bodyText1,
  bodyText2,
  onClick
}) => {
  return (
    <div className ="container">
    <div className = "grid" >
      <h1 className = "h1">{title}</h1>
      <div>
        <h2 >{subtitle1}</h2>
        <div>{subtitle1Value}</div>
      </div>
      <div>
        <h2 >{subtitle2}</h2>
        <div >{subtitle2Value}</div>
      </div>
      {bodyText1 && <div>{bodyText1}</div>}
      <div>{bodyText2}</div>
      <button  onClick={onClick}>
        {buttonText}
      </button>
    </div>
    </div>
  );
};
