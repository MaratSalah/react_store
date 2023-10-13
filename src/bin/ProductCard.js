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
          {`${product.cost}$`}
        </Card.Text>
        <ButtonGroup role="group" aria-label="sum">
          <Button variant='outline-secondary'>
            {`${product.count * product.cost}$`}
          </Button>
          <Button className='' onClick={onClickRemove} variant="outline-secondary">
            x
          </Button>
        </ButtonGroup>
        <ButtonGroup className='float-end' role="group" aria-label="plus minus count">
          <Button onClick={onClickPlus} variant="outline-secondary">{'+'}</Button>
          <Button variant="outline-secondary">{product.count}</Button>
          <Button onClick={onClickMinus} variant="outline-secondary">{'-'}</Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
