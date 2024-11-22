// imports
import { useEffect, useState } from 'react'

import Header from './components/Header/Header'
import Cocktail from './components/Cocktail/Cocktail'
import './App.css'

// presentation logic
const App = () => {
  // ---------- initialization ----------

  let year = 2024
  //let vip = true

  const [darkTheme, setDarkTheme] = useState(false)
  const [vip, setVip] = useState(true)
  const [cocktails, setCocktails] = useState([])
  const [totalCocktails, setTotalCocktails] = useState(0)
  const [cocktailName, setCocktailName] = useState('')
  const [cocktailImage, setCocktailImage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const checkAge = (age) => {
    if (age < 17) {
      return <p>Criaturita, ¿dónde vas?</p>
    }
    else {
      return <p>Disfrute de la noche</p>
    }
  }

  const addCocktail = (cocktailName, cocktailImage) => {
    // Añadir los datos al array
    setCocktails([...cocktails, {
      id: cocktails.length + 1,
      cocktail: cocktailName,
      image: cocktailImage
    }])
  }
  
  const validateCocktail = () => {
    // Si los datos están bien entonces los añado
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
  
  // Side effects (asincronía)

  // Caso 1: Mounting (componentDidMount)
  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          console.log('Respuesta de red OK pero respuesta de HTTP no OK');
        }
      })
      .then((data) => {
        setCocktails(data.drinks.slice(0, 7).map((item) => {
          return {
            id: item.idDrink,
            cocktail: item.strDrink,
            image: item.strDrinkThumb
          }
        }))
      })
      .catch((error) => {
        console.log('Hubo un problema con la petición Fetch:' + error.message);
      })
  }, [])

  // Caso 2: Updating genérico ("componentDidUpdate")
  useEffect(() => {
    // Va a dispararse para cualquier actualización (incluida la primera)
    // ...
  })

  // Caso 3: Updating específico ("componentDidUpdate")
  useEffect(() => {
    // Va a dispararse para cualquier actualización (incluida la primera) solamente para aquellos datos que decidamos

    setTotalCocktails(cocktails.length)
  }, [cocktails]) // dependencies array

  // renderization
  return (
    <div className={ `App ${darkTheme ? 'past' : 'future'}` }>

      <Header
        title="Fantasías animadas de ayer de hoy"
        theme={{darkTheme, setDarkTheme}}
      />
      
      <p>Hola Mundo en el { year > 2030 ? 'futuro' : 'pasado' }</p>
      
      { vip && <p>¡Qué alegría que haya venido!</p> }

      { checkAge(14) }

      <h2>Cócteles</h2>

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
      
      {
        cocktails.length > 0
        ?
        <>
          {
            cocktails.map((cocktail, index) => {
              return (
                <Cocktail
                  //key={cocktail.id}
                  key={index}
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
      
      {/*
        <ul>
          <li>{ cocktail }</li>
        </ul>
        
        //cocktails.map(cocktail => <li>{ cocktail }</li>)
      */}
      
      <footer>FOOTER</footer>
    </div>
  )
}

// export
export default App
