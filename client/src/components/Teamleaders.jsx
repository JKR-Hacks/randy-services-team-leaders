import React, { Component } from 'react';

class Teamleaders extends Component {
  constructor(props) {
    super(props);
  }


  component() {
    const { sample, photos } = this.props;
    const Passing = sample.map(elem => elem.Offense.Passing);
    const passingYards = Math.max(...Passing);
    const Rushing = sample.map(elem => elem.Offense.Rushing);
    const rushingYards = Math.max(...Rushing);
    const Receiving = sample.map(elem => elem.Offense.Receiving);
    const receivingYards = Math.max(...Receiving);
    return (

      <div className="col-lg-3 container alert alert-primary text-center">
        {console.log(photos, 'PHOTOS')}
        <p className="text-dark font-weight-bold">2019 Team Leaders:</p>
        <div className="row">
          <div className="col-sm-3 text-center">
            <p className="text-dark">Offense</p>
          </div>
          <div className="col-sm-3 text-center">
            <p className="text-dark">Defense</p>
          </div>
        </div>
        <div className="row">
          <div className=" text-center border-bottom border-secondary">
            {sample.map(elem => (elem.Offense.Passing === passingYards ? elem.Offense.Player : null))}
            {' '}
            {passingYards}
          </div>
        </div>
        <div className="row">
          <div className=" text-center border-bottom border-secondary">
            {sample.map(elem => (elem.Offense.Rushing === rushingYards ? elem.Offense.Player : null))}
            {' '}
            {rushingYards}
          </div>
        </div>
        <div className="row">
          <div className=" text-center border-bottom border-secondary">
            {sample.map(elem => (elem.Offense.Receiving === receivingYards ? elem.Offense.Player : null))}
            {' '}
            {receivingYards}
          </div>
        </div>
        <a href="http://www.espn.com/nfl/team/stats/_/name/lar" target="_blank"><p>Full Team Statistics</p></a>
      </div>
    );
  }

  render() {
    return (
      this.component()
    );
  }
}

export default Teamleaders;
