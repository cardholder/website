import React from "react";
import { Input } from "reactstrap";

import searchIcon from "../../assets/search.svg";

import classes from "./Searchbar.css";

const searchbar = () => {
  return (
    <div className={classes.Searchbar}>
      <Input
        style={{ backgroundImage: "url(" + { searchIcon } + ")" }}
        onKeyPress={event => {
          if (event.key === "Enter") {
            this.sendMessage("React ist besser!");
          }
        }}
      />
    </div>
  );
};

export default searchbar;
