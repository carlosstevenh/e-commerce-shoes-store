import { useContext } from 'react';
import { dataContext } from '../Context/DataContext';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import CarElements from './CarElements';
import CarTotal from './CarTotal';

const CarContent = () => {
  const { car } = useContext(dataContext);

  return car.length > 0 ? (
    <>
      <Container>
        <Row>
          <Col xs={6} md={3}></Col>
          <Col xs={6} md={6}>
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
                        <th></th>
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
          </Col>
          <Col xs={6} md={3}></Col>
        </Row>
      </Container>
    </>
  ) : (
    <h2 className="car-message-center">
      <Badge bg="warning" text="dark">
        The car is empty !!
      </Badge>
    </h2>
  );
};

export default CarContent;
