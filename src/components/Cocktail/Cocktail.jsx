import './Cocktail.css'

const Cocktail = ({ cocktail, image }) => {
//const Cocktail = (props) => {
  return (
    <div className="Cocktail">
      <h4>{ cocktail }</h4>
      {/* <h4>{ props.cocktail }</h4> */}

      <img src={ image } alt="" />
      {/* <img src={ props.image } alt="" /> */}
    </div>
  )
}

export default Cocktail
