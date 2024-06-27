import { useContext } from 'react';
import { dataContext } from '../Context/DataContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';

import './Products.css';

const Products = () => {
  const { data, car, setCar, setAlertVisible, alertVisible, alert, setAlert } =
    useContext(dataContext);

  const buyShoes = (shoe) => {
    const isShoeInTheCar = car.some((item) => item.id === shoe.id);
    setAlert({
      message: 'Shoes are already on the shopping list.',
      style: 'warning',
    });
    if (!isShoeInTheCar) {
      setCar([...car, shoe]);
      setAlert({
        message: 'Shoes successfully added to the list.',
        style: 'success',
      });
    }
    setAlertVisible({ ...alertVisible, [shoe.id]: true });

    setTimeout(() => {
      setAlertVisible({ ...alertVisible, [shoe.id]: false });
    }, 1500);
  };

  return data.map((shoe) => {
    return (
      <>
        <Card style={{ width: '18rem' }} key={shoe.id}>
          <Card.Img variant="top" src={shoe.foto} className="imaShoe" />
          <Card.Body>
            <Card.Title>
              {shoe.nombre} - ${shoe.precio}
            </Card.Title>
            <Card.Text>
              Discover ultimate comfort and style with our latest shoes! Perfect
              for any occasion. Shop now and step up your game!
            </Card.Text>
            <Button variant="primary" onClick={() => buyShoes(shoe)}>
              Add to car
            </Button>
          </Card.Body>
          {alertVisible[shoe.id] && (
            <Alert
              variant={alert.style}
              onClose={() =>
                setAlertVisible({ ...alertVisible, [shoe.id]: false })
              }
              dismissible
            >
              {alert.message}
            </Alert>
          )}
        </Card>
      </>
    );
  });
};

export default Products;
