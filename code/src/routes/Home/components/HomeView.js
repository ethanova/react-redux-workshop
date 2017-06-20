import React from 'react'
import classes from './HomeView.scss'

export const HomeView = () => (
  <div>
    <h2>Create your pod-racer!</h2>
    <div className={classes.nameEntry}>
      <div>Pilot Name</div>
      <div><input className={classes.nameInput} /></div>
    </div>
    <div className={classes.nameEntry}>
      <div>Ship Name</div>
      <div><input className={classes.nameInput} /></div>
    </div>
    <div className={classes.nameEntry}>
      <div>Ship Max Speed</div>
      <div><input className={classes.nameInput} /></div>
    </div>
    <div className={classes.nameEntry}>
      <div>Ship Acceleration</div>
      <div><input className={classes.nameInput} /></div>
    </div>
  </div>
)

export default HomeView
