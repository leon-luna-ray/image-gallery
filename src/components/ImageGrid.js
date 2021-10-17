import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';

const ImageGrid = ({ images }) => {
  // Map images array and return formatted image (map must always return back into the new array it creates)
  const renderImages = images.map((image, index) => {
    return (
      <Col key={index}>
        <div className='grid-img-div'>
          <Image
            className='grid-img'
            src={image.url}
            alt={image.alt}
            thumbnail
            fluid
          />
        </div>

        <p className='img-caption text-capitalize'>{image.title}</p>
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
      return (
        <Row className='img-row' key={index}>
          {row}
        </Row>
      );
    });

    return renderedRows;
  };

  return (
    <Container className='text-center'>{renderRows(renderImages)}</Container>
  );
};

export default ImageGrid;
