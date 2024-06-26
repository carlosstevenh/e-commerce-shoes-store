import { useContext } from 'react';
import { dataContext } from '../Context/DataContext';

import CarElements from './CarElements';
import CarTotal from './CarTotal';

const CarContent = () => {
  const { car } = useContext(dataContext);

  return car.length > 0 ? (
    <>
      <CarElements />
      <CarTotal />
    </>
  ) : (
    <h2 className="car-message-center">The car is empty !!</h2>
  );
};

export default CarContent;
