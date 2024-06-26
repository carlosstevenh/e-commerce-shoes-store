import { useContext } from 'react';
import { dataContext } from '../Context/DataContext';

import './Products.css';

const Products = () => {
  const { data, car, setCar } = useContext(dataContext);

  const buyShoes = (shoe) => {
    setCar([...car, shoe]);
  };

  return data.map((shoe) => {
    return (
      <div className="card" key={shoe.id}>
        <img src={shoe.foto} alt={shoe.title} />
        <h3>{shoe.nombre}</h3>
        <h4>$ {shoe.precio}</h4>
        <button onClick={() => buyShoes(shoe)}>Buy</button>
      </div>
    );
  });
};

export default Products;
