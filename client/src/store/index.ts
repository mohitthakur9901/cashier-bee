import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './userSlice/index'
import restaurantReducer from './restaurantSlice/index'
import tokenReducer from './Token/index'
const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    user : userReducer,
    restaurant : restaurantReducer
    ,token : tokenReducer
});


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});


export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;