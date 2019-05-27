import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Imprint from "../Imprint/Imprint";

configure({ adapter: new Adapter() });

describe("<Imprint />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Imprint />);
  });

  it("should render an imprint title", () => {
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('should render a contact', () => {
    expect(wrapper.contains(<strong>Kontakt:</strong>)).toEqual(true);
  })

  it('should render a provider', () => {
    expect(wrapper.contains(<strong>Anbieter:</strong>)).toEqual(true);
  })
});
