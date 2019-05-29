import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { LobbyCreate } from "./LobbyCreate";
import Label from "../../../components/UI/Label/Label";
import Select from "../../../components/UI/Select/Select";
import { Button } from "reactstrap";
import Input from "../../../components/UI/Input/Input";

configure({ adapter: new Adapter() });

describe("<LobbyCreate />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LobbyCreate connect={() => {}} disconnect={() => {}} />);
  });

  it("should render three of <Label />", () => {
    expect(wrapper.find(Label)).toHaveLength(3);
  });

  it("should render two of <Select />", () => {
    expect(wrapper.find(Select)).toHaveLength(2);
  });

  it("should render one <Input />", () => {
    expect(wrapper.find(Input)).toHaveLength(1);
  });

  it("should render two of <Button />", () => {
    expect(wrapper.find(Button)).toHaveLength(2);
  });

  it("should disable <Button /> when is invalid max players amount", () => {
    expect(
      wrapper
        .find(Button)
        .last()
        .props()["disabled"]
    ).toEqual(true);
  });

  it("should render <Button /> as not disabled when is valid max players amount", () => {
    wrapper.setState({
      players: {
        value: 3,
        maximum: 8,
        minimum: 2,
        isValid: true,
        isTouched: true
      }
    });
    wrapper.setProps({
      connected: true
    });
    expect(
      wrapper
        .find(Button)
        .last()
        .props()["disabled"]
    ).toEqual(false);
  });
});
