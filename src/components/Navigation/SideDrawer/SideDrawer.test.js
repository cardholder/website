import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import SideDrawer from "./SideDrawer";
import Title from "../../Title/Title";
import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem";
import NavigationItems from "../NavigationItems/NavigationItems";
import Footer from "../../Footer/Footer";

configure({ adapter: new Adapter() });

describe("<SideDrawer />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SideDrawer />);
  });

  it("should render a <Title /> without link", () => {
    expect(wrapper.find(Title)).toHaveLength(1);
  });

  it("should render a <Title /> with <NavigationItem />", () => {
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });

  it("should render <NavigationItems />", () => {
    expect(wrapper.find(NavigationItems)).toHaveLength(1);
  });

  it("should render a <Footer />", () => {
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
});
