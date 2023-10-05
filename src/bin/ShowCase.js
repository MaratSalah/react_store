import React from "react";
import ProductCard from "./ProductCard.js";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { uniqueId } from "lodash";

const col = (colProduct) => {
  return <Col className="mt-3" md={6} lg={4} xl={3} key={uniqueId()}>
    <ProductCard product={colProduct}></ProductCard>
  </Col>
};

const groupOfCols = (colsProducts) => {
  const result = [];
  let innerResult = [];
  for (let i = 0; i < colsProducts.length; i += 1) {
    if (innerResult.length < 4) {
      innerResult.push(col(colsProducts[i]));
    } else if (innerResult.length === 4) {
      result.push(innerResult);
      innerResult = [];
      innerResult.push(col(colsProducts[i]));
    }

    if (i === colsProducts.length - 1) {
      result.push(innerResult);
    }
  };
  return result;
};

const groupOfRows = (rowsProducts) => {
  const dataOfCols = groupOfCols(rowsProducts);
  
  return dataOfCols.map((group) => {
    return <Row key={uniqueId()}>{group.map((col) => col)}</Row>
  });
};

const ShowCase = (props) => {
  const { products } = props;

  return (
    <Container>
      {groupOfRows(products)}
    </Container>
  );
};

export default ShowCase;
