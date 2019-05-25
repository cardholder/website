import React from "react";
import Select from "react-select";
import chroma from "chroma-js";

const select = (props) => {
  const colorStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isDisabled
        ? null
        : state.isSelected
        ? "#76c5b5"
        : state.isFocused
        ? chroma("#76c5b5")
            .alpha(0.1)
            .css()
        : null,
      color: "black"
    }),
    control: (provided, state) => ({
      ...provided,
      boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
      border: "0px"
    }),
    menu: (provided, state) => ({
      ...provided,
      boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
      border: "0px"
    })
  };

  return (
    <Select
      styles={colorStyles}
      value={props.selected}
      onChange={props.onChange}
      options={props.options}
    />
  );
};

export default select;
