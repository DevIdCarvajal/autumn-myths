import { Link } from 'react-router-dom'

import './CocktailItem.css'

const CocktailItem = ({ id, cocktail, image }) => {
  return (
    <div className="CocktailItem">
      <h4>{ cocktail }</h4>

      <img src={ image } alt="" />

      <Link to={`/list/${id}`}>Ver más</Link>
    </div>
  )
}

export default CocktailItem
