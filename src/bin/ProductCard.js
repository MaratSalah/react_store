/* eslint-disable react/prop-types */

import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import update from 'immutability-helper';

const ProductCard = (props) => {
  const { img: picOfProduct } = props.product;
  const { product, i, products, setProducts} = props;

  const onClickPlus = () => {
    const { count } = product;
    const newProducts = update(products, { [i]: { count: { $set: count + 1 } } });
    setProducts(newProducts);
  }

  const onClickMinus = () => {
    const { count } = product;
    if (count > 0) {
      const newProducts = update(products, { [i]: { count: { $set: count - 1 } } });
      setProducts(newProducts);
    }
  }

  const onClickRemove = () => {
    const newProducts = update(products, { [i]: { count: { $set: 0 } } });
    setProducts(newProducts);
  }

  return (
    <Card style={{ width: '16rem' }}>
      <Card.Img style={{ height: '24rem' }} variant="top" src={process.env.PUBLIC_URL + `/img/${picOfProduct}`} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the content.
        </Card.Text>
        <Card.Text>
        {`${product.count * product.cost}$`}
        </Card.Text>
        <ButtonGroup className='float-end' role="group" aria-label="sum">
          <Button className='' onClick={onClickRemove} variant="outline-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
            </svg>
          </Button>
        </ButtonGroup>
        <ButtonGroup role="group" aria-label="plus minus count">
          <Button onClick={onClickPlus} variant="outline-secondary">{'+'}</Button>
          <Button variant="outline-secondary">{product.count}</Button>
          <Button onClick={onClickMinus} variant="outline-secondary">{'-'}</Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
