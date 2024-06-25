import { useContext } from 'react';
import { dataContext } from '../Context/DataContext';

const Products = () => {
  const { data } = useContext(dataContext);
  return data.map((product) => {
    return (
      <div className="card">
        <img src={product.foto} alt={product.title} />
        <h3>{product.nombre}</h3>
        <h4>{product.precio}</h4>
        <button>Buy</button>
      </div>
    );
  });
};

export default Products;
