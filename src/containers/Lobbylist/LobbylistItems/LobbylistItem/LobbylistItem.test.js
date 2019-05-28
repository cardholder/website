import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import LobbylistItem from "./LobbylistItem";

configure({ adapter: new Adapter() });

describe("<LobbylistItem />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LobbylistItem game="Mau Mau" actualPlayers={2} maxPlayers={4} />);
  });

  it("should render the game name", () => {
    expect(wrapper.contains(<p>Mau Mau</p>)).toEqual(true);
  });

  it("should render the actual players and maxium players amount", () => {
    expect(wrapper.contains(<p>2 / 4 Spieler</p>)).toEqual(true);
  });
});
