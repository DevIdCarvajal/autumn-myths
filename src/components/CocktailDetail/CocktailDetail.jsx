import { useParams } from 'react-router-dom'

const CocktailDetail = ({ cocktails }) => {

  const { id } = useParams()
  
  //cocktails.filter(...)

  return (
    <div className="CocktailDetail">
      ...
    </div>
  )
}

export default CocktailDetail
