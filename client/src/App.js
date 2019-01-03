import React, { Component } from 'react';
import $ from 'jquery';
import Teamleaders from './components/Teamleaders.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sample: [],
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
  }

  render() {
    const { sample } = this.state;
    return (
      <div>
        <Teamleaders sample={sample} />
      </div>
    );
  }
}

export default App;
