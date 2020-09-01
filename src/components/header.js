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
  >
    <div className="antialiased bg-gray-100">
      <div className="w-full text-gray-700 bg-white">
        <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="flex flex-row items-center justify-between p-4">
            <Link
              to="/"
              className="text-lg font-semibold text-gray-900  focus:outline-none focus:shadow-outline"
            >
              Urdaneta IOT Consulting
            </Link>
          </div>
          <Navbar />
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
