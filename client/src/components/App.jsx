import React from 'react';
import Carousel from './Carousel.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        collection : ['https://s3.us-east-2.amazonaws.com/airfec/dummy-1000x1000-ArchConversation.jpg', 'https://s3.us-east-2.amazonaws.com/airfec/dummy-1000x1000-Entrance.jpg', 'https://s3.us-east-2.amazonaws.com/airfec/dummy-1000x1000-NYSkyline.jpg']
    };
  }

  render() {
    return (
        <Carousel collection={this.state.collection}/>
    )
  }
}

export default App;