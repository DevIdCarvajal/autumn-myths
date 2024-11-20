// imports
import { useState } from 'react'

import Header from './components/Header/Header'
import Cocktail from './components/Cocktail/Cocktail'
import './App.css'

// presentation logic
const App = () => {

  // initialization
  let year = 2024

  //let vip = true
  const [vip, setVip] = useState(true)
  const [cocktails, setCocktails] = useState([
    {
      id: 1,
      cocktail: 'Bloody Mary',
      image: 'https://www.georgesliquor.com/wp-content/uploads/2017/12/classic-bloody-mary-720x720-recipe.jpg'
    },
    {
      id: 2,
      cocktail: 'Sex on the beach',
      image: 'https://grumman.com.co/wp-content/uploads/2023/02/cocteles_grumman_5.jpg'
    },
    {
      id: 3,
      cocktail: 'Manhattan',
      image: 'https://grumman.com.co/wp-content/uploads/2023/02/cocteles_grumman_5.jpg'
    },
    {
      id: 4,
      cocktail: 'Bombero Torero',
      image: 'https://grumman.com.co/wp-content/uploads/2023/02/cocteles_grumman_5.jpg'
    }
  ])
  const [cocktailName, setCocktailName] = useState('')
  const [cocktailImage, setCocktailImage] = useState('')

  const checkAge = (age) => {
    if (age < 17) {
      return <p>Criaturita, ¿dónde vas?</p>
    }
    else {
      return <p>Disfrute de la noche</p>
    }
  }

  const addCocktail = () => {
    // Añadir los datos al array
    setCocktails([...cocktails, {
      id: cocktails.length + 1,
      cocktail: cocktailName,
      image: cocktailImage
    }])
  }

  // renderization
  return (
    <div className={ year > 2030 ? 'App future' : 'App past' }>
      <Header />
      
      <button onClick={() => {
        //vip = !vip
        setVip(!vip)
      }}>Alternar VIPeidad</button>
      
      <p>Hola Mundo en el { year > 2030 ? 'futuro' : 'pasado' }</p>
      
      { vip && <p>¡Qué alegría que haya venido!</p> }

      { checkAge(14) }

      <h2>Cócteles</h2>

      <div>
        <p>Nuevo cóctel:
          <input type="text" onChange={(event) => setCocktailName(event.target.value)} />
        </p>
        <p>Nueva imagen:
          <input type="text" onChange={(event) => setCocktailImage(event.target.value)} />
        </p>

        <button onClick={addCocktail}>Añadir</button>
      </div>
      
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
