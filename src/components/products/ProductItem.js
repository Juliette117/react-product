import { putProduct, deleteProduct } from "./ProductsSlice";
import { useRef } from "react";
import { useDispatch } from "react-redux";


const ProductItem = (props) => {
    const product = props.product;

    const textRef = useRef();
    const dispatch = useDispatch();

    const submit = (event) => {
        event.preventDefault();
        dispatch(putProduct(textRef.current.value));
        dispatch(deleteProduct(textRef.current.value));
    }

    return (
        <div>
            <p>{product.description}</p>
            <form>
                <input type="text" ref={textRef} placeholder="Modifier un produit" />
            </form>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Nom</th>
                        <th scope="col">Prix</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* for */}
                    <tr>
                        <th scope="row">{action.payload.id}</th>
                        <td>{action.payload.name}</td>
                        <td>{action.payload.price}</td>
                        <td>{action.payload.description}</td>
                        <td>
                            <button onClick={() => dispatchEvent(putProduct(product.id))}>Modifier</button>
                            <button onClick={() => dispatchEvent(deleteProduct(product.id))}>X</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>


    );
}

export default { ProductItem };