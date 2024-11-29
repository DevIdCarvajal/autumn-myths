import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import CocktailItem from '../CocktailItem/CocktailItem'

const CocktailList = () => {
  const [totalCocktails, setTotalCocktails] = useState(0)

  const cocktails = useSelector((state) => state.cocktail)

  // Caso 3: Va a dispararse para cualquier actualización (incluida la primera) solamente para aquellos datos que decidamos
  //   Updating específico ("componentDidUpdate")
  useEffect(() => {
    setTotalCocktails(cocktails.length)
  }, [cocktails]) // dependencies

  return (
    <div>
    {
      cocktails.length > 0
      ?
      <>
        {
          cocktails.map((cocktail, index) => {
            return (
              <CocktailItem
                key={index}
                id={cocktail.id}
                cocktail={cocktail.cocktail}
                image={cocktail.image}
              />
            )
          })
        }
        <p>Total: {totalCocktails}</p>
      </>
      :
      <p>No hay cocktails</p>
    }
    </div>
  )
}

export default CocktailList
