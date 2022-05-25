import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';

const ImageGrid = ({ images, posts }) => {
  // Map images array and return formatted image (map must always return back into the new array it creates)
  console.log(posts);
  // console.log(images);

  const renderPosts = posts.map((post, index) => {
    const { hero_image, title, meta } = post;
    // TODO change this later for production
    const imgUrl = `https://localhost:8000${hero_image.meta.download_url}`
    console.log(post)
    return (
      <Col key={index} md={6} xl={4}>
        <div className='grid-img-div'>
          <Image
            className='grid-img'
            src={hero_image.meta.detail_url}
            // alt={image.alt}
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
