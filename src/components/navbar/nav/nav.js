import React from 'react'
import { Link } from 'gatsby'

const nav = () => {
  return (
    <nav className="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
      <Link
        to="/"
        className="rounded px-4 py-2 mt-2 text-sm font-semibold bg-transparent  md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
      >
        Inicio
      </Link>
      <Link
        to="/quienes-somos"
        className="rounded px-4 py-2 mt-2 text-sm font-semibold bg-transparent  md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
      >
        ¿Quiénes Somos?
      </Link>
      {/* <Link
        to="/servicios"
        className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent  md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
      >
        Servicios
      </Link> */}
      <Link
        to="/blog"
        className="rounded px-4 py-2 mt-2 text-sm font-semibold bg-transparent  md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
      >
        Blog
      </Link>
      <Link
        to="/contacto"
        className="rounded px-4 py-2 mt-2 text-sm font-semibold bg-transparent  md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
      >
        Contáctenos
      </Link>
    </nav>
  )
}

export default nav
