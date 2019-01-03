import React from 'react';

const Teamleaders = ({ sample }) => (
  <div className="col-lg-3 container alert alert-primary text-center">
    <p className="text-dark font-weight-bold">2019 Team Leaders:</p>
    <div className="row">
      <div className="col-6 col-sm-3 text-center">
        <p className="text-dark">Offense</p>
      </div>
      <div className="col-6 col-sm-3 text-center">
        <p className="text-dark">Defense</p>
      </div>
    </div>
    <div className="row">
      <div className="col-6 col-sm-3 text-center border-bottom border-secondary">
        1
      </div>
    </div>
    <div className="row">
      <div className="col-6 col-sm-3 text-center border-bottom border-secondary">
        2
      </div>
    </div>
    <div className="row">
      <div className="col-6 col-sm-3 text-center border-bottom border-secondary">
        3
      </div>
    </div>
    <a href="http://www.espn.com/nfl/team/stats/_/name/lar" target="_blank"><p>Full Team Statistics</p></a>
  </div>
);

export default Teamleaders;
