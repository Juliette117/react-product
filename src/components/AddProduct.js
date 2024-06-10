import { useRef } from "react"
import { useDispatch } from "react-redux";
import { addProduct } from "./products/ProductsSlice";

const AddProduct = (props) => {
    const product = props.product;
    const textRef = useRef();
    const dispatch = useDispatch();

    const submit = (event) => {
        event.preventDefault();
        dispatch(addProduct(textRef.current.value));
    }
    return ( 
        <>
        <form>
            <h2>Ajouter un produit : </h2>
            <input type="text" ref={textRef} placeholder="Nom du produit"/>
            <input type="number" ref={textRef} placeholder="Prix du produit"/>
            <input type="text" ref={textRef} placeholder="Description du produit"/>
        </form>
        <button onClick={() => dispatchEvent(addProduct(
            product.id, product.name, product.price, product.description))}>Ajouter</button>
        </>
     );
}
 
export default AddProduct;
