import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { LobbylistItems } from "./LobbylistItems";
import LobbylistItem from "./LobbylistItem/LobbylistItem";

configure({ adapter: new Adapter() });

describe("<LobbylistItems />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LobbylistItems />);
  });

  it("should render a <LobbylistItem />", () => {
    wrapper.setProps({
      lobbies: [
        {
          id: "hAsfh8n",
          game: "Durak",
          visibility: "private",
          max_players: 8,
          players: [
            {
              id: 0,
              name: "PlayerA 1",
              role: "leader"
            },
            {
              id: 1,
              name: "PlayerA 2",
              role: "player"
            },
            {
              id: 2,
              name: "PlayerA 3",
              role: "player"
            },
            {
              id: 3,
              name: "PlayerA 4",
              role: "player"
            }
          ]
        }
      ]
    });
    expect(wrapper.find(LobbylistItem)).toHaveLength(1);
  });

  it("should render nothing when no lobbies exist", () => {
    expect(wrapper.find(LobbylistItem)).toHaveLength(0);
  });
});
