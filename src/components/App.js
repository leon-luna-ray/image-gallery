import React from 'react';
import axios from 'axios';
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
      const userPosts = await axios.get(
        // TODO: Set the base api url to state or way to easily change the search
        'http://localhost:8000/api/v2/pages/?type=home.GalleryPost&fields=image,body'
      );
      // TODO verify if this will work later on
      if (userPosts.status === 200) {
        this.setState({
          posts: userPosts.data.items,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    if (!this.state.posts) {
      return (
        <div>
          <Header />
        </div>
      );
    }
    return (
      <div>
        <Header />
        <ImageGrid images={images} posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
