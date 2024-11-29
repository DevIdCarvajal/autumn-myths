import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { MainTitle } from '../../styled/basics'

const CocktailDetail = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  const cocktails = useSelector((state) => state.cocktail)
  
  const cocktail = cocktails.find((cocktail) => {
    return cocktail.id === id
  })

  return (
    <div>
      <MainTitle>{cocktail?.cocktail}</MainTitle>

      <button onClick={() => navigate(-1)}>Volver</button>
      <button onClick={() => navigate('/')}>Nuevo</button>
    </div>
  )
}

export default CocktailDetail
