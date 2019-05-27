import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import StoreLogo from "./StoreLogo";

configure({ adapter: new Adapter() });

describe("<StoreLogo />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<StoreLogo />);
  });

  it("should render an image", () => {
    expect(wrapper.find('img')).toHaveLength(1);
  });

});
