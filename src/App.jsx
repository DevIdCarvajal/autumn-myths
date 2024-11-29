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
import CocktailDetail from './components/CocktailDetail/CocktailDetail'
import Footer from './components/Footer/Footer'

import { ThemeContext } from './contexts/Theme'

import './App.css'

import { useDispatch } from 'react-redux'
import { fetchCocktails } from './features/cocktail/cocktailSlice'

/*
 *************************
 Definición del componente
 *************************
*/
const App = () => {

  // -------------------- Inicialización de datos y estados -------------------
  
  const [userAge, setUserAge] = useState(0)
  const [userLogged, setUserLogged] = useState(true)
  const [lightTheme, setLightTheme] = useState(true)

  const dispatch = useDispatch()

  // ------------------- Declaración de funciones auxiliares ------------------
  
  // ...
  
  // ------------------- Manejo de asincronía (side effects) ------------------

  // Caso 1: Cuando se carga la primera vez
  //   Mounting (componentDidMount)
  useEffect(() => {
    dispatch(fetchCocktails())
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
                <Route path="/" element={ <AddCocktail /> } />
                <Route path="list" element={ <CocktailList /> } />
                <Route path="list/:id" element={ <CocktailDetail /> } />
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
