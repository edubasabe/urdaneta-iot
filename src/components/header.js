import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Navbar from './navbar/navbar'
import Background from '../images/bg-header@2x.jpg'
import { css } from '@emotion/core'

const Header = ({ siteTitle }) => (
  <header
    css={css`
      background-image: url(${Background});
      background-size: cover;
      background-position: right center;
      height: 470px;
    `}
    className="flex items-start flex-col"
  >
    <Navbar />

    <h2 className="text-5xl font-light max-w-3xl ml-12 mt-auto mb-20">
      <q>
        The Internet of Things has the potential to change the world, just as
        the internet did. Maybe even more so.
      </q>
      <br />
      <cite>Kevin Ashton</cite>
    </h2>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
