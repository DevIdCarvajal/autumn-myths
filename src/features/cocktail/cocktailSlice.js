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
      return [...state, {
        id: state.length + 1,
        ...action.payload
      }]
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCocktails.pending, (state, action) => {
        // ...
      })
      .addCase(fetchCocktails.fulfilled, (state, action) => {
        state.push(...action.payload.drinks.slice(0, 5).map((item) => {
          return {
            id: item.idDrink,
            cocktail: item.strDrink,
            image: item.strDrinkThumb
          }
        }))
      })
      .addCase(fetchCocktails.rejected, (state, action) => {
        // ...
      })
  }
})

export const { add } = cocktailSlice.actions

export default cocktailSlice.reducer
