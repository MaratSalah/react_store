/* eslint-disable react/prop-types */

import React from "react";
import ProductCard from "./ProductCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { uniqueId } from "lodash";

const col = (product, i, setProducts, products) => {
  return <Col className="mt-3" md={6} lg={4} xl={3} key={uniqueId()}>
    <ProductCard i={i} product={product} products={products} setProducts={setProducts}></ProductCard>
  </Col>
};

const groupOfCols = (products, setProducts) => {
  const result = [];
  let innerResult = [];
  for (let i = 0; i < products.length; i += 1) {
    if (innerResult.length < 4) {
      innerResult.push(col(products[i], i, setProducts, products));
    } else if (innerResult.length === 4) {
      result.push(innerResult);
      innerResult = [];
      innerResult.push(col(products[i], i, setProducts, products));
    }

    if (i === products.length - 1) {
      result.push(innerResult);
    }
  }
  return result;
};

const groupOfRows = (products, setProducts) => {
  const dataOfCols = groupOfCols(products, setProducts);

  return dataOfCols.map((group) => {
    return <Row key={uniqueId()}>{group.map((col) => col)}</Row>
  });
};

const ShowCase = (props) => {
  // const data = useContext(ProductsContext);
  const { products, setProducts } = props;

  return (
    <Container>
      {groupOfRows(products, setProducts)}
    </Container>
  );
};

export default ShowCase;
