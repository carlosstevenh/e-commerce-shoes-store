import { useContext } from 'react';
import { dataContext } from '../Context/DataContext';

import './CarElements.css';

const CarElements = () => {
  const { car } = useContext(dataContext);
  return car.map((shoe) => {
    return (
      <div className="carContent" key={shoe.id}>
        <img src={shoe.foto} alt={shoe.name} />
        <h3 className="name">{shoe.nombre}</h3>
        <h4 className="price">{shoe.precio}</h4>
      </div>
    );
  });
};

export default CarElements;
