import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchCocktails = createAsyncThunk('cocktail/fetchCocktails', async () => {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
  const data = await response.json()

  return data
})

export const cocktailSlice = createSlice({
  name: 'cocktail',
  initialState: [],
  reducers: {
    add: (state, action) => {
      // Recibe el estado previo y la acción a realizar y DEVUELVE el estado siguiente de las cosas
      
      return [...state, {
        id: state.length + 1,
        cocktail: action.payload.cocktailName,
        image: action.payload.cocktailImage
      }]
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCocktails.pending, (state, action) => {
        // ...
      })
      .addCase(fetchCocktails.fulfilled, (state, action) => {
        state.cocktail = action.payload.drinks.slice(0, 5).map((item) => {
          return {
            id: item.idDrink,
            cocktail: item.strDrink,
            image: item.strDrinkThumb
          }
        })
      })
      .addCase(fetchCocktails.rejected, (state, action) => {
        // ...
      })
  },
})

export const { add } = cocktailSlice.actions

export default cocktailSlice.reducer
