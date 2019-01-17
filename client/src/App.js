/* eslint-disable no-unused-vars */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable import/extensions */
import React, { Component } from 'react';
import $ from 'jquery';
import axios from 'axios';
import Teamleaders from './components/Teamleaders.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sample: [],
      photos: [],
      side: 'Offense',
    };
  }

  componentDidMount() {
    axios.get('/stats',
      {
        method: 'GET',
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        const data = res.data;
        this.setState({
          sample: data,
        });
      });

    axios.get('/photos',
      {
        method: 'GET',
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        const data = res.data;
        this.setState({
          photos: data,
        });
      });
  }

  changeSide(e) {
    this.setState({
      side: e,
    });
  }

  render() {
    const { sample, photos, side } = this.state;
    return (
      <div>
        <Teamleaders
          sample={sample}
          photos={photos}
          changeSide={this.changeSide.bind(this)}
          side={side}
        />
      </div>
    );
  }
}

export default App;
