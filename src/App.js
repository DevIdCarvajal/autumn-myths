// imports
import Header from './components/Header/Header'
import './App.css';

// logic
const App = () => {
  // initialization
  // ...
  let year = 2034

  // renderization
  return (
    <div className="App">
      <Header />

      Hola Mundo en el { year > 2030 ? 'futuro' : 'pasado' }

      <footer>FOOTER</footer>
    </div>
  );
}

// export
export default App;
