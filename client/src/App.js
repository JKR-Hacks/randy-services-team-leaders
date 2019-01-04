import React, { Component } from 'react';
import $ from 'jquery';
import Teamleaders from './components/Teamleaders.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sample: [],
      photos: [],
    };
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/stats',
      error: (err) => {
        console.log(err, 'err');
      },
      success: (data) => {
        this.setState({
          sample: data,
        });
      },
    });
    $.ajax({
      method: 'GET',
      url: '/photos',
      dataType: 'json',
      error: (err) => {
        console.log(err, 'err');
      },
      success: (data) => {
        this.setState({
          photos: data,
        });
      },
    });
  }

  render() {
    const { sample, photos } = this.state;
    return (
      <div>
        <Teamleaders sample={sample} photos={photos} />
      </div>
    );
  }
}

export default App;
