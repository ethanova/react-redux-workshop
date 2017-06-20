import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'
import HeaderTitle from './HeaderTitle'

export const Header = () => (
  <div>
    <HeaderTitle where='galaxy' />
    <IndexLink to='/' activeClassName={classes.activeRoute}>
      Pod Creator
    </IndexLink>
    {' · '}
    <Link to='/counter' activeClassName={classes.activeRoute}>
      Player
    </Link>
  </div>
)

export default Header
