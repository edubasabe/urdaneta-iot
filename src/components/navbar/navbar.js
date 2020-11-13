import React from 'react'
import { Link } from 'gatsby'
import Logo from '../../images/urdaneta-iot-logo.png'
import Nav from './nav/nav'
import { FiMail, FiRss, FiBriefcase, FiHome } from 'react-icons/fi'

const Navbar = ({ transparent }) => {
  return (
    <>
      <div
        className={`w-full text-gray-700 bg-white border-gray-200 border-b ${
          transparent ? 'fixed' : 'bg-white'
        }`}
      >
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
      <nav className="bottom-navbar flex fixed bottom-0 left-0 w-full bg-gray-100 border-t py-0 sm:hidden">
        <ul className="flex items-center text-gray-800 w-full justify-around pt-4 pb-4">
          <li className="mr-3 lg:mr-8">
            <Link
              to="/"
              exact="true"
              className="font-semibold hover:text-blue-600 flex flex-col items-center text-xs"
            >
              <FiHome size="1.8em" className="mb-1" />
              Inicio
            </Link>
          </li>
          <li className="mr-3 lg:mr-8">
            <Link
              to="/quienes-somos"
              className="font-semibold hover:text-blue-600 flex flex-col items-center text-xs"
            >
              <FiBriefcase size="1.8em" className="mb-1" />
              Nosotros
            </Link>
          </li>
          <li className="mr-3 lg:mr-8">
            <Link
              to="/blog"
              className="font-semibold hover:text-blue-600 flex flex-col items-center text-xs"
            >
              <FiRss size="1.8em" className="mb-1" />
              Blog
            </Link>
          </li>

          <li className="mr-3 lg:mr-8">
            <Link
              to="/contacto"
              className="font-semibold hover:text-blue-600 flex flex-col items-center text-xs"
            >
              <FiMail size="1.8em" className="mb-1" />
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
