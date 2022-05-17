import React from 'react';
import { client } from '../client';
import Header from './Header';
import ImageGrid from './ImageGrid';
import images from './images';
import '../styles/App.css';

class App extends React.Component {

  state = {
    posts: null,
  };

  async componentDidMount() {
    try {
      const imagePosts = await client.getEntries({
        content_type: 'imagePost',
      })
      console.log({imagePosts})
      this.setState({
        posts: imagePosts,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <Header />
        <ImageGrid images={images} />
      </div>
    );
  }
}

export default App;
