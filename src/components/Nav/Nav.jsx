import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ThemeContext } from '../../contexts/Theme'

import './Nav.scss'

const Nav = () => {
  const { lightTheme } = useContext(ThemeContext)

  return (
    <nav className="Nav">
      <ul>
        <li className={ !lightTheme && 'dark' }>
          <Link to="/">Nuevo</Link>
        </li>
        <li className={ !lightTheme && 'dark' }>
          <Link to="/list">Listado</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
