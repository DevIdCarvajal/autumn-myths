import { useParams, useNavigate } from 'react-router-dom'
import { MainTitle } from '../../styled/basics'

const CocktailDetail = ({ cocktails }) => {

  const { id } = useParams()
  const navigate = useNavigate()

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
