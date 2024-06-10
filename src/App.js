import logo from './logo.svg';
import './App.css';
import ProductList from './components/products/ProductList';
import AddProduct from './components/AddProduct';

function App() {
  return (
    <div className="App">
      <AddProduct/>
      <ProductList/>
    </div>
  );
}

export default App;
