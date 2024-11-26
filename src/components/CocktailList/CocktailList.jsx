import { useEffect, useState } from 'react'

import CocktailItem from '../CocktailItem/CocktailItem'

const CocktailList = ({ cocktails }) => {
  const [totalCocktails, setTotalCocktails] = useState(0)

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
