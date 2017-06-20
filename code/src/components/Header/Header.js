import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'
import HeaderTitle from './HeaderTitle'

export const Header = () => (
  <div>
    <HeaderTitle />
    <IndexLink to='/' activeClassName={classes.activeRoute}>
      Home
    </IndexLink>
    {' · '}
    <Link to='/counter' activeClassName={classes.activeRoute}>
      Counter
    </Link>
  </div>
)

export default Header
