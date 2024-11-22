import ThemeSelector from '../ThemeSelector/ThemeSelector'

const Header = ({ title, theme }) => {
  return (
    <header>
      <h1>{ title }</h1>

      <ThemeSelector theme={theme} />
    </header>
  )
}

export default Header
