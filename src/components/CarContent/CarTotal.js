import { useContext } from 'react';
import { dataContext } from '../Context/DataContext';

const CarTotal = () => {
  const { car } = useContext(dataContext);

  const total = car.reduce((sum, shoe) => sum + shoe.precio, 0);

  return (
    <div className="carTotal">
      <h3>Total to pay: ${total}</h3>
    </div>
  );
};

export default CarTotal;
