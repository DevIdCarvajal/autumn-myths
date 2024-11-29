import { Link } from 'react-router-dom'

import './CocktailItem.css'

const CocktailItem = ({ id, cocktail, image }) => {

  return (
    <div className="CocktailItem">
      <h4>{ cocktail }</h4>

      <div>
        <img src={ image } alt="" />
      </div>
      
      <div>
        <Link to={`/list/${id}`}>Ver más</Link>
      </div>
    </div>
  )
}

export default CocktailItem
