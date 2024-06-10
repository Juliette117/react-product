import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

const ProductList = () => {
    const product = useSelector(state => state.product.products)
    return ( 
        <>
        {
            product.map((product) => (
                <ProductItem product={product} key={index}/>
            ))
        }
        </>
     );
}
 
export default ProductList;