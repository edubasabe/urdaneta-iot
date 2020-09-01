import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const Ul = styled.ul`
  display: flex;
  list-style-type: none;
`

const Navbar = () => {
  return (
    <nav>
      <Ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/quienes-somos">¿Quiénes Somos?</Link>
        </li>
        <li>
          <Link to="/servicios">Servicios</Link>
        </li>
        <li>
          <Link to="/contacto">Contáctenos</Link>
        </li>
      </Ul>
    </nav>
  )
}

export default Navbar
