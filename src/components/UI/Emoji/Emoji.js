import React, { Fragment } from "react";
import classes from "./Emoji.css";

const emoji = () => (
  <Fragment>
    <div id="main-ctr" className={classes.Emoji}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="151"
        height="110"
        viewBox="0 0 151 110"
      >
        <g id="Page-1" fill="none" fillRule="evenodd">
          <circle id="face" cx="75" cy="55" r="50" fill="#FFEB97" />
          <g id="face-components">
            <path
              id="mouth"
              stroke="#000"
              strokeWidth="3"
              d="M61.5 76.903h27.003"
              strokeLinecap="round"
            />
            <path
              id="l-eye"
              stroke="#000"
              strokeWidth="5"
              d="M47 63.5c1.38 0 2.5-1.12 2.5-2.503S48.38 58.5 47 58.5s-2.5 1.114-2.5 2.497c0 1.382 1.12 2.503 2.5 2.503z"
              strokeLinecap="round"
            />
            <path
              id="r-eye"
              stroke="#000"
              strokeWidth="5"
              d="M101.5 64c1.38 0 2.5-1.12 2.5-2.503S102.88 59 101.5 59 99 60.114 99 61.497C99 62.88 100.12 64 101.5 64z"
              strokeLinecap="round"
            />
          </g>
        </g>
      </svg>
    </div>
  </Fragment>
);

export default emoji;
