import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { CategorApi } from './Categories/CategoryApi'

export const store = configureStore({
  reducer: {
    [CategorApi.reducerPath]:CategorApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(CategorApi.middleware),
})

setupListeners(store.dispatch)