import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; 
import {  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, cartReducer);
const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;

/* 
configureStore: This function creates the Redux store with various options.

reducer: This property is an object where you specify the slice reducers. 
In this case, the key cart corresponds to the cartReducer. 
This means that the state of the cart slice in the store will be managed by cartReducer.

store: This is the Redux store instance that holds the application's state. 
The store object will be used throughout your app to access and update the state.
*/