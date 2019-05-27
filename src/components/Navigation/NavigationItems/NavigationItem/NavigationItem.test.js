import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import NavigationItem from "./NavigationItem";
import { NavLink } from "react-router-dom";

configure({ adapter: new Adapter() });

describe("<Footer />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavigationItem to="/lobby" exact />);
  });

  it("should render a <NavLink /> with 'to' property", () => {
    expect(wrapper.find(NavLink).first().props().to).toEqual("/lobby");
  });

  it("should render a <NavLink /> with 'exact' property", () => {
    expect(wrapper.find(NavLink).first().props().exact).toEqual(true);
  });
});
