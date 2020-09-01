import React from 'react'
import { Link } from 'gatsby'
import Logo from '../../images/urdaneta-iot-logo.png'
import Nav from './nav/nav'
const Navbar = () => {
  return (
    <div className="w-full text-gray-700 bg-white">
      <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between">
          <Link
            to="/"
            className="text-lg font-semibold text-gray-900  focus:outline-none focus:shadow-outline"
          >
            <img
              src={Logo}
              alt="Urdaneta IOT Consulting"
              className="h-20 mb-0"
            />
          </Link>
        </div>
        <Nav />
      </div>
    </div>
  )
}

export default Navbar
