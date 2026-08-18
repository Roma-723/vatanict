import { combineReducers, configureStore, } from "@reduxjs/toolkit";
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
import storage from 'redux-persist/lib/storage'

import GlobalRequest from "../reducers/GlobalRequest";
import GlobalState from "../reducers/GlobalState";
import LocallhostStateIct from "../reducers/LocallhostStateIct";

const rootReducer = combineReducers({
    GlobalState: GlobalState,
    [GlobalRequest.reducerPath]: GlobalRequest.reducer,
    LocallhostStateIct: LocallhostStateIct,
})

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['GlobalState','GlobalRequest'],
  }

const persistReducerr = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistReducerr,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }).concat(GlobalRequest.middleware)
})

export const persistor = persistStore(store)

export default store