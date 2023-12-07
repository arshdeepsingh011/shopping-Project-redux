import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name : "cart",
    initialState : [],
    reducers: {
        add : (state,action)=>{
            state.push(action.payload)
        },
        remove : (state,action)=>{
            return state.filter( (item)=> item.id !== action.payload)
        },
    },
})
// code by arshdeepsingh011 github
export default cartSlice.reducer;
export const {add,remove} = cartSlice.actions;