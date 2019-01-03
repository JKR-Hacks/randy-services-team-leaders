import React, { Component } from 'react';

class Teamleaders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      side: 'Offense',
    };
  }

  changeSide(e) {
    this.setState({
      side: e,
    });
  }

  component() {
    const { sample, photos } = this.props;
    const { side } = this.state;
    const Passing = sample.map(elem => elem.Offense.Passing);
    const passingYards = Math.max(...Passing);
    const Rushing = sample.map(elem => elem.Offense.Rushing);
    const rushingYards = Math.max(...Rushing);
    const Receiving = sample.map(elem => elem.Offense.Receiving);
    const receivingYards = Math.max(...Receiving);
    const Tackles = sample.map(elem => elem.Defense.Tackles);
    const totalTackles = Math.max(...Tackles);
    const Sacks = sample.map(elem => elem.Defense.Sacks);
    const totalSacks = Math.max(...Sacks);
    const Interceptions = sample.map(elem => elem.Defense.Interceptions);
    const totalInterceptions = Math.max(...Interceptions);

    if (side === 'Offense') {
      return (
        <div className="col-lg-3 container alert alert-primary text-center">
          {console.log(photos, 'PHOTOS')}
          <p className="text-dark font-weight-bold text-center">2019 Team Leaders:</p>
          <div className="row">
            <div className="col-sm-6 text-center">
              <input className="btn btn-primary" type="button" value="Offense" onClick={() => this.changeSide('Offense')} />
              {/* <p className="text-dark">Offense</p> */}
            </div>
            <div className="col-sm-6 text-center">
              <input className="btn btn-primary" type="button" value="Defense" onClick={() => this.changeSide('Defense')} />
              {/* <p className="text-dark">Defense</p> */}
            </div>
          </div>
          <br />
          <div className="row col-lg">
            <div className=" text-center border-bottom border-secondary">
              <p className="text-secondary">{sample.map(elem => (elem.Offense.Passing === passingYards ? elem.Offense.Player : null))}</p>
              <p className="h4 text-center text-dark">{passingYards}</p>
            </div>
          </div>
          <br />
          <div className="row col-lg">
            <div className=" text-center border-bottom border-secondary">
              <p className="text-secondary">{sample.map(elem => (elem.Offense.Rushing === rushingYards ? elem.Offense.Player : null))}</p>
              <p className="h4 text-center text-dark">{rushingYards}</p>
            </div>
          </div>
          <br />
          <div className="row col-lg">
            <div className=" text-center border-bottom border-secondary">
              <p className="text-secondary">{sample.map(elem => (elem.Offense.Receiving === receivingYards ? elem.Offense.Player : null))}</p>
              <p className="h4 text-center text-dark">{receivingYards}</p>
            </div>
          </div>
          <br />
          <a href="http://www.espn.com/nfl/team/stats/_/name/lar" target="_blank">
            <p className="text-center">Full Team Statistics</p>
          </a>
        </div>
      );
    } if (side === 'Defense') {
      return (
        <div className="col-lg-3 container alert alert-primary text-center">
          {console.log(photos, 'PHOTOS')}
          <p className="text-dark font-weight-bold text-center">2019 Team Leaders:</p>
          <div className="row">
            <div className="col-sm-6 text-center">
              <input className="btn btn-primary" type="button" value="Offense" onClick={() => this.changeSide('Offense')} />
              {/* <p className="text-dark">Offense</p> */}
            </div>
            <div className="col-sm-6 text-center">
              <input className="btn btn-primary" type="button" value="Defense" onClick={() => this.changeSide('Defense')} />
              {/* <p className="text-dark">Defense</p> */}
            </div>
          </div>
          <br />
          <div className="row col-lg">
            <div className=" text-center border-bottom border-secondary">
              <p className="text-secondary">{sample.map(elem => (elem.Defense.Tackles === totalTackles ? elem.Defense.Player : null))}</p>
              <p className="h4 text-center text-dark">{totalTackles}</p>
            </div>
          </div>
          <br />
          <div className="row col-lg">
            <div className=" text-center border-bottom border-secondary">
              <p className="text-secondary">{sample.map(elem => (elem.Defense.Sacks === totalSacks ? elem.Defense.Player : null))}</p>
              <p className="h4 text-center text-dark">{totalSacks}</p>
            </div>
          </div>
          <br />
          <div className="row col-lg">
            <div className=" text-center border-bottom border-secondary">
              <p className="text-secondary">{sample.map(elem => (elem.Defense.Interceptions === totalInterceptions ? elem.Defense.Player : null))}</p>
              <p className="h4 text-center text-dark">{totalInterceptions}</p>
            </div>
          </div>
          <br />
          <a href="http://www.espn.com/nfl/team/stats/_/name/lar" target="_blank">
            <p className="text-center">Full Team Statistics</p>
          </a>
        </div>
      );
    }
    console.log('oops');
  }

  render() {
    return (
      this.component()
    );
  }
}

export default Teamleaders;
