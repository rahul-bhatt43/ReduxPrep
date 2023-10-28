import { createSlice } from "@reduxjs/toolkit";


export const ProductSlice = createSlice({
    name:"product",
    initialState: [],
    reducers:{
        add: (state, action)=>{
            state.push(action.payload);
        },
        remove: (state,action)=>{
            return state.filter((item)=>item.id != action.payload)
        }
    }
})

export const {add, remove} = ProductSlice.actions;

export default ProductSlice.reducer;