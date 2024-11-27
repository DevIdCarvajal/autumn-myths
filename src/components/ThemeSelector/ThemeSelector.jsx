import { useContext } from 'react'

import lightIcon from './day.png'
import darkIcon from './night.png'

import { ThemeContext } from '../../contexts/Theme'

const ThemeSelector = () => {

  const theme = useContext(ThemeContext)

  return (
    <img
      src={theme.lightTheme ? darkIcon : lightIcon}
      onClick={() => theme.setLightTheme(!theme.lightTheme)}
      style={{ width: '24px', margin: '2px' }}
    />
  )
}

export default ThemeSelector
