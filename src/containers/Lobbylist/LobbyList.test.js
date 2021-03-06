import React, { Fragment } from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Lobbylist } from "./Lobbylist";

import { Alert } from "reactstrap";
import Emoji from "../../components/UI/Emoji/Emoji";
import LobbylistItems from "./LobbylistItems/LobbylistItems";

configure({ adapter: new Adapter() });

describe("<Lobbylist />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Lobbylist connect={() => {}} disconnect={() => {}} resetPlayerID={() => {}} />);
    wrapper.setProps({ connected: true });
  });

  it("should render a error when no connection", () => {
    wrapper.setProps({ error: true });
    expect(
      wrapper.contains(
        <Alert color="danger">
          Es konnte keine Verbindung zum Server aufgebaut werden!
        </Alert>
      )
    ).toEqual(true);
  });

  it("should render a error when no lobbies exist", () => {
    wrapper.setProps({ lobbies: null });
    expect(wrapper.contains(<div>Es existiert noch keine Lobby.</div>)).toEqual(
      true
    );
  });

  it("should render <LobbylistItems />", () => {
    wrapper.setProps({
      lobbies: [
        {
          id: "hAsfh8n",
          game: "Durak",
          visibility: "public",
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
    expect(wrapper.find(LobbylistItems)).toHaveLength(1);
  });
});
