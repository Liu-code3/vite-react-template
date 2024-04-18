import { createSlice } from "@reduxjs/toolkit";

const homeStore = createSlice({
    name: 'home',
    initialState: {
        userInfo: { name: 'why', age: 18 }
    },
    reducers: {
        changAgeAction (state, action) {
            state.userInfo.age += action.payload
        }
    } 
})

export const { changAgeAction } = homeStore.actions;
export default homeStore.reducer;