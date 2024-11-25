import './CocktailItem.css'

const CocktailItem = ({ cocktail, image }) => {
  return (
    <div className="CocktailItem">
      <h4>{ cocktail }</h4>

      <img src={ image } alt="" />
    </div>
  )
}

export default CocktailItem
