import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    udata: [],
    logout: false,
    userapi: JSON.parse(localStorage.getItem("shopping data")),
    oneuserdata: null
}

export const userdataSlice = createSlice({
    name: "userdata",
    initialState,
    reducers: {
        fromdata: (state, action) => {
            state.udata = [...state.udata, action.payload]
            state.oneuserdata = [...state.udata, action.payload]
        },
        userlogout: (state, action) => {
            state.logout = action.payload
        },
    },
})


export const { fromdata, userlogout } = userdataSlice.actions

export default userdataSlice.reducer