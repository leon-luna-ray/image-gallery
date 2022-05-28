import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';

const ImageGrid = ({ posts }) => {
  console.log(posts);

  const renderPosts = posts.map((post, index) => {
    const { image, title, meta } = post;
    // TODO change this later for production
    const imgUrl = `http://localhost:8000${image.url}`
    return (
      <Col key={index} md={6} xl={4}>
        <div className='grid-img-div'>
          <Image
            className='grid-img'
            src={imgUrl}
            thumbnail
            fluid
          />
        </div>

        <p className='img-caption text-capitalize'>{title}</p>
      </Col>
    );
  });

  return (
    <Container className='text-center'>
      <Row>{renderPosts}</Row>
    </Container>
  );
};

export default ImageGrid;
