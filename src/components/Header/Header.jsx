import ThemeSelector from '../ThemeSelector/ThemeSelector'

const Header = ({ title }) => {
  return (
    <header>
      <h1>{ title }</h1>

      <ThemeSelector />
    </header>
  )
}

export default Header
