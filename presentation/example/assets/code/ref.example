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
    this.get5secondSpeed = this.get5secondSpeed.bind(this)
  }

  componentDidMount() {
    this.pilotNameInput.focus()
    // setTimeout(() => {
    //   this.pilotNameInput.focus()
    // })
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

  get5secondSpeed () {
    let speed = 0
    for (let x = 0; x < 5; x++) {
      speed += Number(this.state.shipAcceleration)
    }
    if (speed > this.state.shipMaxSpeed) {
      speed = this.state.shipMaxSpeed
    }
    return speed
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
              ref={(elem) => this.pilotNameInput = elem}
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
          5 second speed: {this.get5secondSpeed()}
        </div>
      </div>

    )
  }
}

export default HomeView
