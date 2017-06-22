// import { PLAYER_PICKED } from '../routes/PlayerPicker/reducer'

// ------------------------------------
// Constants
// ------------------------------------
export const SAVE_POD = 'SAVE_POD'

// ------------------------------------
// Actions
// ------------------------------------

export function savePod (pilotName, shipName, maxSpeed, maxAcceleration) {
  return {
    type: SAVE_POD,
    pilotName,
    shipName,
    maxSpeed,
    maxAcceleration,
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
}

export default function gameReducer (state = initialState, action) {
  switch (action.type) {
    // case PICK_PLAYER: {
    //   return {
    //     ...state
    //   }
    // }
    default: return state
  }
}

// ------------------------------------
// Selectors
// ------------------------------------

// export const getEvents = (globalState) => globalState.game.events
// export const getTeams = (globalState) => globalState.game.teams

// export function getCurrentPlayersIds (globalState) {
//   return [
//     globalState.game.teams[Teams.HOME][Positions.OFFENSE],
//     globalState.game.teams[Teams.HOME][Positions.DEFENSE],
//     globalState.game.teams[Teams.AWAY][Positions.OFFENSE],
//     globalState.game.teams[Teams.AWAY][Positions.DEFENSE]
//   ]
// }