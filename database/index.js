const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/espn/');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB has connected');
});

const statsSchema = {
  Offense: {
    Player: { type: String, unique: true },
    Passing: Number,
    Rushing: Number,
    Receiving: Number,
    Touchdowns: Number,
  },
  Defense: {
    Player: { type: String, unique: true },
    Tackles: Number,
    Sacks: Number,
    Interceptions: Number,
    FumblesForced: Number,
  },
  SpecialTeams: {
    Player: { type: String, unique: true },
    FieldGoal: Number,
    ExtraPoint: Number,
  },
};

const Stats = mongoose.model('Stats', statsSchema);

const save = function () {
  console.log('hi im the save function');
};


const funcs = { db, Stats, save };
module.exports = funcs;
