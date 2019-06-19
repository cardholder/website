import * as actionTypes from "./actionTypes";

export const setUsername = username => {
  return {
    type: actionTypes.SET_USERNAME,
    username: username
  };
};

export const setPlayerID = player_id => {
  return {
    type: actionTypes.SET_PLAYERID,
    player_id: player_id
  };
};
