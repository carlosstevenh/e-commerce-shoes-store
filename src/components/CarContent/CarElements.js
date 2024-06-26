import { useContext } from 'react';
import { dataContext } from '../Context/DataContext';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

import './CarElements.css';

const CarElements = () => {
  const { car } = useContext(dataContext);
  return car.map((shoe) => {
    return (
      <tr>
        <td>
          <Col xs={6} md={4}>
            <Image src={shoe.foto} roundedCircle className="imgTotal" />
          </Col>
        </td>
        <td>{shoe.nombre}</td>
        <td>{shoe.precio}</td>
      </tr>
    );
  });
};

export default CarElements;
