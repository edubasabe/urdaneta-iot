import PropTypes from 'prop-types'
import React from 'react'
import Navbar from './navbar/navbar'
import { withPrefix } from 'gatsby'

const Header = ({ siteTitle }) => {
  return (
    <header>
      <Navbar />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
