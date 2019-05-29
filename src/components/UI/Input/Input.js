import React from "react";
import { Input } from "reactstrap";
import classes from "./Input.css";

const input = props => {
  const inputClasses = [classes.Input];

  if (!props.isValid && props.isTouched) {
    inputClasses.push(classes.Error);
  }

  return (
    <Input
      className={inputClasses.join(" ")}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default input;
