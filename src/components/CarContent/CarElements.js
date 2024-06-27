import { useContext } from 'react';
import { dataContext } from '../Context/DataContext';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { MdDelete } from 'react-icons/md';
import Alert from 'react-bootstrap/Alert';

import './CarElements.css';

const CarElements = () => {
  const { car, setCar, setShowAlert, showAlert } = useContext(dataContext);

  const deleteShoes = (shoe) => {
    const newProductsCar = car.filter((item) => item.id !== shoe.id);
    setCar(newProductsCar);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 1500);
  };

  return car.map((shoe) => {
    return (
      <>
        <tr key={shoe.id}>
          <td>
            <Col xs={6} md={4}>
              <Image src={shoe.foto} roundedCircle className="imgTotal" />
            </Col>
          </td>
          <td>{shoe.nombre}</td>
          <td>{shoe.precio}</td>
          <td>
            <Button variant="danger" onClick={() => deleteShoes(shoe)}>
              <MdDelete />
            </Button>{' '}
          </td>
        </tr>
        {showAlert && (
          <Alert
            variant="danger"
            onClose={() => setShowAlert(false)}
            dismissible
          >
            Shoes were removed from the shopping list.
          </Alert>
        )}
      </>
    );
  });
};

export default CarElements;
