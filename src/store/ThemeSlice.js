import { createSlice } from "@reduxjs/toolkit";


export const ThemeSlice = createSlice({
    name:"theme",
    initialState:false,
    reducers:{
        setToggle: (state)=>{
            return !(state)
        },
    }
})

export const {setToggle} = ThemeSlice.actions;

export default ThemeSlice.reducer;