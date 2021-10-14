import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const ImageGrid = ({ data }) => {
  // Map data array and return formatted image (map must always return back into the new array it creates)
  const renderImages = data.map((image, index) => {
    return (
      <Col key={index}>
        {image} {index + 1}
      </Col>
    );
  });

  // Method takes an array and will return rows with in groups of 3
  const renderRows = (images) => {
    // Regrouped items pushed to this array
    const rows = [];
    // Loop through the array and arrange in groups of 3
    while (images.length) {
      rows.push(images.splice(0, 3));
    }
    // When the loop is complete map each group to create a new row
    const renderedRows = rows.map((row, index) => {
      return <Row key={index}>{row}</Row>;
    });

    return renderedRows;
  };

  return <Container>{renderRows(renderImages)}</Container>;
};

export default ImageGrid;
