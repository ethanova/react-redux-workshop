import React from 'react'
import classes from './HomeView.scss'

class HomeView extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      pilotName: '',
      shipName: '',
      shipMaxSpeed: 0,
      shipAcceleration: 0
    }

    this.setPilotName = this.setPilotName.bind(this)
    this.setShipMaxSpeed = this.setShipMaxSpeed.bind(this)
    this.setShipAcceleration = this.setShipAcceleration.bind(this)
  }

  setPilotName (e) {
    this.setState({
      pilotName: e.target.value
    }, () => setTimeout(console.log(this.state), 1000))
  }

  setShipMaxSpeed (e) {
    this.setState({
      shipMaxSpeed: e.target.value
    })
  }

  setShipAcceleration (e) {
    this.setState({
      shipAcceleration: e.target.value
    })
  }

  render () {
    return (
      <div>
        <h2>Create your pod-racer!</h2>
        <div className={classes.nameEntry}>
          <div>Pilot Name</div>
          <div>
            <input
              className={classes.nameInput}
              value={this.state.pilotName}
              onChange={this.setPilotName}
            />
          </div>
        </div>
        <div className={classes.nameEntry}>
          <div>Ship Name</div>
          <div>
            <input
              className={classes.nameInput}
              value={this.state.shipName}
              onChange={(e) => this.setState({ shipName: e.target.value })}
            />
          </div>
        </div>
        <div className={classes.nameEntry}>
          <div>Ship Max Speed (km/s)</div>
          <div>
            <input
              className={classes.nameInput}
              value={this.state.shipMaxSpeed}
              onChange={this.setShipMaxSpeed}
            />
          </div>
        </div>
        <div className={classes.nameEntry}>
          <div>Ship Acceleration (km/s/s)</div>
          <div>
            <input
              className={classes.nameInput}
              value={this.state.shipAcceleration}
              onChange={this.setShipAcceleration}
            />
          </div>
        </div>
        <div>
          
        </div>
      </div>

    )
  }
}

export default HomeView
