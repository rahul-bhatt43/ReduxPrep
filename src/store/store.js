import { configureStore } from "@reduxjs/toolkit";
import productreducer from './ProductSlice'
import themeReducer from './ThemeSlice'

const store = configureStore({
    reducer:{
        product: productreducer,
        theme: themeReducer,
    }
})
export default store;