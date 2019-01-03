import React, { Component } from 'react';
import $ from 'jquery';


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
        <h1>HELLO WORLD!</h1>
      </div>
    );
  }
}

export default App;
