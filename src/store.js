// Store

import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./components/products/ProductsSlice";

const store = configureStore({
    reducer: {
        product: ProductsSlice,
    }
});

export default store;
