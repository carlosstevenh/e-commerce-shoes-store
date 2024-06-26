import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { dataContext } from '../Context/DataContext';

import './Products.css';

const Products = () => {
  const { data, car, setCar } = useContext(dataContext);

  const buyShoes = (shoe) => {
    setCar([...car, shoe]);
  };

  return data.map((shoe) => {
    return (
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
      </Card>
    );
  });
};

export default Products;
