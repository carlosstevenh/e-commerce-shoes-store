import { useContext } from 'react';
import { dataContext } from '../Context/DataContext';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

import CarElements from './CarElements';
import CarTotal from './CarTotal';

const CarContent = () => {
  const { car } = useContext(dataContext);

  return car.length > 0 ? (
    <Card>
      <Card.Body>
        <Card.Title>Items list to buy</Card.Title>
        <Card.Text>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th></th>
                <th>Reference</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <CarElements />
            </tbody>
          </Table>
          <CarTotal />
        </Card.Text>
      </Card.Body>
    </Card>
  ) : (
    <h2 className="car-message-center">
      <Badge bg="warning" text="dark">
        The car is empty !!
      </Badge>
    </h2>
  );
};

export default CarContent;
