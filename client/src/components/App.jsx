import React from 'react';
import axios from 'axios';
import Banner from './Banner.jsx';
import BackgroundLayout from './BackgroundLayout.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: [],
      showCarousel: false,
    };
    this.toggleCarousel = this.toggleCarousel.bind(this);
  }

  async componentDidMount() {
    try {
      const response = await axios.get('/Photos/64');
      this.setState({
        collection: response.data,
      });
    } catch (err) {
      console.log(err); //eslint-disable-line
    }
  }

  toggleCarousel() {
    this.setState({
      showCarousel: !this.state.showCarousel,
    });
  }

  render() {
    return (
    <div id='main-slide'>
        <Banner clickFunction={this.toggleCarousel} room={this.state.collection[0]} />
        {this.state.showCarousel ?
        <BackgroundLayout clickFunction={this.toggleCarousel} collection={this.state.collection} /> :
        null
        }
    </div>
    );
  }
}

export default App;
