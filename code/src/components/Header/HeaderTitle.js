import React from 'react'

const HeaderTitle = (props) => (
  <div>
    <h1>The best pod racing app in the whole {props.where}!</h1>
  </div>
)

HeaderTitle.propTypes = {
  where: React.PropTypes.string
}

export default HeaderTitle
