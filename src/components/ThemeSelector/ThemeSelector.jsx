import lightIcon from './day.png'
import darkIcon from './night.png'

const ThemeSelector = ({ theme }) => {
  return (
    <img
      src={theme.lightTheme ? darkIcon : lightIcon}
      onClick={() => theme.setLightTheme(!theme.lightTheme)}
      style={{ width: '24px', margin: '2px' }}
    />
  )
}

export default ThemeSelector
