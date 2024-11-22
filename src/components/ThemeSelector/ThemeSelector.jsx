import lightIcon from './day.png'
import darkIcon from './night.png'

const ThemeSelector = ({ theme }) => {
  return (
    <img
      src={theme.darkTheme ? darkIcon : lightIcon}
      onClick={() => theme.setDarkTheme(!theme.darkTheme)}
      style={{ width: '24px', margin: '2px' }}
    />
  )
}

export default ThemeSelector
