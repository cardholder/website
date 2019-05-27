import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Footer from "../Footer/Footer";
import NavigationItem from "../Navigation/NavigationItems/NavigationItem/NavigationItem";
import StoreLogo from "../StoreLogo/StoreLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

configure({ adapter: new Adapter() });

describe("<Footer />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

  it("should render an imprint <NavigationItem />", () => {
    expect(wrapper.find(NavigationItem)).toHaveLength(1);
  });

  it("should render two <StoreLogo />", () => {
    expect(wrapper.find(StoreLogo)).toHaveLength(2);
  });

  it("should render a github reference", () => {
    expect(
      wrapper.contains(
        <a href="https://github.com/cardholder">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      )).toEqual(true);
  });
});
