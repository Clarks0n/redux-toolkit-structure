import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';

import userSlice from './slices/user';


const rootReducer = combineReducers({
    userSlice: userSlice.reducer
})

const store = configureStore({
    reducer:rootReducer
})


export default store;