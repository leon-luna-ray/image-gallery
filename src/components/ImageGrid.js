import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';

const ImageGrid = ({ images }) => {
  // Map images array and return formatted image (map must always return back into the new array it creates)

  return (
    <Container className='text-center'>
      <Row>
        {images.map((image, index) => {
          return (
            <Col key={index} md={6} xl={4}>
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
        })}
      </Row>
    </Container>
  );
};

export default ImageGrid;
