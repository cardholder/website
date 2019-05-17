import React from "react";
import { Input } from "reactstrap";

import searchIcon from '../../assets/search.svg';

import classes from "./Searchbar.css";

const searchbar = () => (
  <div className={classes.Searchbar}>
    <Input style={{ backgroundImage: "url(" + { searchIcon } + ")" }} />
  </div>
);

export default searchbar;
