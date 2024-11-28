import { configureStore } from '@reduxjs/toolkit'

import cocktailReducer from '../features/cocktail/cocktailSlice'

export default configureStore({
  reducer: {
    cocktail: cocktailReducer,
  },
})
