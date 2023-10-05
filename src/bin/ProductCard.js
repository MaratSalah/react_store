import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const ProductCard = (props) => {
  const picOfProduct = props.product;

  return (
    <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src={process.env.PUBLIC_URL + `/img/${picOfProduct}`} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className="mx-1" variant="outline-primary">Add to cart</Button>
        <ButtonGroup aria-label="Basic example">
          <Button variant="outline-primary">{'<'}</Button>
          <Button variant="outline-primary">0</Button>
          <Button variant="outline-primary">{'>'}</Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
