import { configureStore } from '@reduxjs/toolkit'
import userdataReducer from './userdataSlice'

export const store = configureStore({
    reducer: {
        userdata: userdataReducer,
    },
})

