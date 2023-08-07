import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './features/cartSlice'
import { getDefaultMiddleware } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage
}

const persistedCartReducer = persistReducer(persistConfig, cartSlice.reducer)

const store = configureStore({
  reducer: {
    cart: persistedCartReducer
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  })
})

export const persistor = persistStore(store)
export default store