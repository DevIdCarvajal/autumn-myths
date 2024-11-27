/*
 *************
 Importaciones
 *************
*/
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router'

import AddCocktail from './components/AddCocktail/AddCocktail'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import CocktailList from './components/CocktailList/CocktailList'
import Footer from './components/Footer/Footer'

import { ThemeContext } from './contexts/Theme'

import './App.css'

/*
 *************************
 Definición del componente
 *************************
*/
const App = () => {

  // -------------------- Inicialización de datos y estados -------------------
  
  const [userAge, setUserAge] = useState(0)
  const [userLogged, setUserLogged] = useState(true)
  const [cocktails, setCocktails] = useState([])
  const [lightTheme, setLightTheme] = useState(true)

  // ------------------- Declaración de funciones auxiliares ------------------
  
  const addCocktail = (cocktailName, cocktailImage) => {
    setCocktails([...cocktails, {
      id: cocktails.length + 1,
      cocktail: cocktailName,
      image: cocktailImage
    }])
  }
  
  // ------------------- Manejo de asincronía (side effects) ------------------

  // Caso 1: Cuando se carga la primera vez
  //   Mounting (componentDidMount)
  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          console.log('Respuesta de red OK pero respuesta de HTTP no OK')
        }
      })
      .then((data) => {
        setCocktails(data.drinks.slice(0, 5).map((item) => {
          return {
            id: item.idDrink,
            cocktail: item.strDrink,
            image: item.strDrinkThumb
          }
        }))
      })
      .catch((error) => {
        console.log('Hubo un problema con la petición Fetch:' + error.message)
      })
  }, [])

  // Caso 2: Va a dispararse para cualquier actualización (incluida la primera)
  //   Updating genérico ("componentDidUpdate")
  /*
  useEffect(() => {
    // ...
  })
  */

  // ------------ Lógica de presentación (renderizado condicional) ------------

  return (
    <div className={ `App ${lightTheme ? 'past' : 'future'}` }>

      <ThemeContext.Provider value={{lightTheme, setLightTheme}}>
        
        <Header title="Cócteles Reactivos" />

        <div>
        {
          !userLogged
          ?
            <>
              Tu edad: 
              <input
                type="number"
                onChange={(event) => setUserAge(event.target.value)}
                style={{width: '40px'}}
              />
              <button onClick={() => userAge > 17 && setUserLogged(true)}>
                Confirmar edad
              </button>
            </>
            :
            <>
              <h2>Nuestros cócteles</h2>

              <Nav />

              <Routes>
                <Route path="/" element={ <AddCocktail addCocktail={addCocktail} /> } />
                <Route path="list" element={ <CocktailList cocktails={cocktails} /> } />
                {/* <Route path="list/:id" element={ <CocktailDetail cocktails={cocktails} /> } /> */}
              </Routes>
            </>
        }
        </div>

        <Footer />
      </ThemeContext.Provider>

    </div>
  )
}

/*
 *************
 Exportaciones
 *************
*/
export default App
