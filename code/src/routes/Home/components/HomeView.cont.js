import { connect } from 'react-redux'
// import { pickPlayer } from './reducer'
import { savePod } from '../../../store/game'

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */

import HomeView from './HomeView'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapDispatchToProps = (dispatch) => {
  return {
    savePod: (pilotName, shipName, maxSpeed, maxAcceleration) => {
      dispatch(savePod(pilotName, shipName, maxSpeed, maxAcceleration))
    },
  }
}

const mapStateToProps = (state) => ({
  // if the component needs state, deliver it through here
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
