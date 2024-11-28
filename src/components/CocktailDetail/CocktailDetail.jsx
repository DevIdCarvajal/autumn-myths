import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { MainTitle } from '../../styled/basics'

const CocktailDetail = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  const cocktails = useSelector((state) => state.cocktail)

  const cocktail = cocktails.filter((cocktail) => {
    return cocktail.id === id
  })[0]

  return (
    <div>
      <MainTitle>{cocktail.cocktail}</MainTitle>

      <p>MÁS COSAS</p>

      <div>
        <button onClick={() => navigate(-1)}>Volver</button>
        <button onClick={() => navigate('/')}>Añadir nuevo</button>
      </div>
    </div>
  )
}

export default CocktailDetail
