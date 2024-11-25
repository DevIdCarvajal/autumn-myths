import { useState } from 'react'

const AddCocktail = ({ addCocktail }) => {
  const [cocktailName, setCocktailName] = useState('')
  const [cocktailImage, setCocktailImage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  
  const validateCocktail = () => {
    if (
      cocktailName &&
      cocktailName.length > 4 &&
      cocktailImage
    ) {
      addCocktail(cocktailName, cocktailImage)
      setErrorMessage('')
    }
    else {
      setErrorMessage('Los datos están mal')
    }
  }

  return (
    <div>
      <p>Nuevo cóctel:
        <input
          type="text"
          onChange={(event) => setCocktailName(event.target.value)}
        />
      </p>
      <p>Nueva imagen:
        <input
          type="text"
          onChange={(event) => setCocktailImage(event.target.value)}
        />
      </p>

      <button onClick={validateCocktail}>Añadir</button>

      { errorMessage && <p>Hay un error</p> }
    </div>
  )
}

export default AddCocktail
