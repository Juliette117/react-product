import { createSlice } from "@reduxjs/toolkit";

const ProductsSlice = createSlice({
    name: "products",
    initialState: {
        products: []
    },
    reducers: {
        addProduct: (state, action) => {
            const newProduct = {
                id: Date.now(),
                name: action.payload.name,
                price: action.payload.price,
                description: action.payload.description,
            }
            state.products.push(newProduct)
        },
        putProduct: (state, action) => {

        },
        deleteProduct: (state, action) => {

        },
    }
});
export const {addProduct, putProduct, deleteProduct} = ProductsSlice.actions;
export default ProductsSlice.reducer;