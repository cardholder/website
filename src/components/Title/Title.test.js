import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Title from "./Title";
configure({ adapter: new Adapter() });

describe("<Title />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Title />);
  });

  it("should render a h1-tag", () => {
    expect(wrapper.find('h1')).toHaveLength(1);
  });
});
