import { configureStore } from "@reduxjs/toolkit";

import cartSlice from './cartSlice'
import uiSlice from './uiSlice'
import userSlice from './userSlice'


export const store = configureStore({
    reducer: {
        cart: cartSlice,
        ui: uiSlice,
        user: userSlice
    }
})