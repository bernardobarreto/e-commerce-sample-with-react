import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './features/cartSlice'

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage
}

const persistedCartReducer = persistReducer(persistConfig, cartSlice.reducer)

const store = configureStore({
  reducer: {
    cart: persistedCartReducer
  },
})

export const persistor = persistStore(store)
export default store