import { Link } from 'react-router'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/Theme'

import './Nav.scss'

const Nav = () => {
  const theme = useContext(ThemeContext)

  return (
    <nav className="Nav">
      <ul>
        <li className={ !theme.lightTheme && 'dark'}>
          <Link to="/">Añadir</Link>
        </li>
        <li>
          <Link to="/list">Listado</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
