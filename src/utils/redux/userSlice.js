import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: "abra"
    },
    reducers: {
        signIn: (state, action) => {
            return { user : action.payload }
        },
        signOut: (state, action) => {
            return { user : null }
        }
    }
})

export const {signIn, signOut} = userSlice.actions;
export default userSlice.reducer;