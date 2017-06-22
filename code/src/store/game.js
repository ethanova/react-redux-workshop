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
  pods: []
}

export default function gameReducer (state = initialState, action) {
  switch (action.type) {
    case SAVE_POD: {
      const newPod = {
        pilotName: action.pilotName,
        shipName: action.shipName,
        maxSpeed: action.maxSpeed,
        maxAcceleration: action.maxAcceleration,
      }
      return {
        ...state,
        pods: [...state.pods, newPod]
      }
    }
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
