import reducer from "./lobbylist";
import * as actionTypes from "../actions/actionTypes";

describe("lobbylist reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      data: null,
      websocket: null,
      connected: false,
      error: false
    });
  });

  it("should return lobbies", () => {
    expect(
      reducer(undefined, {
        type: actionTypes.MESSAGE_LOBBYLIST,
        data:
          '{"lobbies":[{"id":"hAsfh8n","game":"Durak","visibility":"private","max_players":8,"players":[{"id":0,"name":"PlayerA 1","role":"leader"},{"id":1,"name":"PlayerA 2","role":"player"},{"id":2,"name":"PlayerA 3","role":"player"},{"id":3,"name":"PlayerA 4","role":"player"}]}]}'
      })
    ).toEqual({
      data: [
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
      ],
      websocket: null,
      connected: false,
      error: false
    });
  });
});
