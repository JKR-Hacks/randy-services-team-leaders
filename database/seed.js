const db = require('./index.js');

const sampleData = [{
  id: 1,
  Offense: {
    Player: 'Kath Pauwel', Passing: 95884, Rushing: 1, Receiving: 78309, Touchdowns: 5417,
  },
  Defense: {
    Player: 'Dermot Pendlington', Tackles: 133, Sacks: 231, Interceptions: 44, FumblesForced: 67964,
  },
  SpecialTeams: { Player: 'Rossie Medgewick', FieldGoal: 11013, ExtraPoint: 8040 },
},
{
  id: 2,
  Offense: {
    Player: 'Euell Soame', Passing: 4436, Rushing: 27527, Receiving: 7, Touchdowns: 8751,
  },
  Defense: {
    Player: 'Salome Dosdale', Tackles: 3, Sacks: 6, Interceptions: 49535, FumblesForced: 870,
  },
  SpecialTeams: { Player: 'Judy Boase', FieldGoal: 58418, ExtraPoint: 764 },
},
{
  id: 3,
  Offense: {
    Player: 'Murdock Mattheis', Passing: 80615, Rushing: 83, Receiving: 98, Touchdowns: 90,
  },
  Defense: {
    Player: 'Meridith Avraham', Tackles: 13, Sacks: 936, Interceptions: 72, FumblesForced: 62,
  },
  SpecialTeams: { Player: 'Fredi Paull', FieldGoal: 76, ExtraPoint: 8 },
},
{
  id: 4,
  Offense: {
    Player: 'Ramon Silber', Passing: 7005, Rushing: 30, Receiving: 756, Touchdowns: 72,
  },
  Defense: {
    Player: 'Lissa Astridge', Tackles: 53421, Sacks: 5, Interceptions: 1255, FumblesForced: 4003,
  },
  SpecialTeams: { Player: 'Aurelia Valadez', FieldGoal: 8, ExtraPoint: 23615 },
},
{
  id: 5,
  Offense: {
    Player: 'Bryn Caldroni', Passing: 83461, Rushing: 0, Receiving: 0, Touchdowns: 58093,
  },
  Defense: {
    Player: 'Bogart Labon', Tackles: 70299, Sacks: 685, Interceptions: 4451, FumblesForced: 13,
  },
  SpecialTeams: { Player: 'Charo Arman', FieldGoal: 3279, ExtraPoint: 559 },
},
{
  id: 6,
  Offense: {
    Player: 'Kelvin Balas', Passing: 41, Rushing: 377, Receiving: 724, Touchdowns: 921,
  },
  Defense: {
    Player: 'Karoline Conti', Tackles: 534, Sacks: 95949, Interceptions: 8066, FumblesForced: 84,
  },
  SpecialTeams: { Player: 'Tremayne Santello', FieldGoal: 9, ExtraPoint: 49101 },
},
{
  id: 7,
  Offense: {
    Player: 'Augusta Akehurst', Passing: 66092, Rushing: 6, Receiving: 688, Touchdowns: 2,
  },
  Defense: {
    Player: 'Saunders Bee', Tackles: 372, Sacks: 0, Interceptions: 8441, FumblesForced: 2598,
  },
  SpecialTeams: { Player: 'Ashil Lisciandri', FieldGoal: 52, ExtraPoint: 70 },
},
{
  id: 8,
  Offense: {
    Player: 'Spike Johns', Passing: 0, Rushing: 837, Receiving: 42, Touchdowns: 90,
  },
  Defense: {
    Player: 'Kikelia Smithin', Tackles: 8, Sacks: 73921, Interceptions: 663, FumblesForced: 9246,
  },
  SpecialTeams: { Player: 'Ches Bucklan', FieldGoal: 3955, ExtraPoint: 5 },
},
{
  id: 9,
  Offense: {
    Player: 'Tiffi Gun', Passing: 0, Rushing: 4, Receiving: 6, Touchdowns: 5,
  },
  Defense: {
    Player: 'Bel Scorton', Tackles: 3123, Sacks: 76, Interceptions: 771, FumblesForced: 8898,
  },
  SpecialTeams: { Player: 'Corliss Pinching', FieldGoal: 9837, ExtraPoint: 1374 },
},
{
  id: 10,
  Offense: {
    Player: 'Sophronia Plose', Passing: 8234, Rushing: 47239, Receiving: 3025, Touchdowns: 73282,
  },
  Defense: {
    Player: 'Ulric Erskin', Tackles: 1522, Sacks: 1, Interceptions: 3093, FumblesForced: 44475,
  },
  SpecialTeams: { Player: 'Odey Perrone', FieldGoal: 21, ExtraPoint: 38 },
},
{
  id: 11,
  Offense: {
    Player: 'Gibby Howles', Passing: 1982, Rushing: 7, Receiving: 32526, Touchdowns: 80,
  },
  Defense: {
    Player: 'Breena Pauleit', Tackles: 889, Sacks: 30, Interceptions: 15, FumblesForced: 2,
  },
  SpecialTeams: { Player: 'Izzy Maccree', FieldGoal: 698, ExtraPoint: 3 },
},
{
  id: 12,
  Offense: {
    Player: 'Urbanus Dymick', Passing: 7, Rushing: 3, Receiving: 6951, Touchdowns: 55961,
  },
  Defense: {
    Player: 'Renaldo Blagden', Tackles: 1, Sacks: 64855, Interceptions: 6, FumblesForced: 85713,
  },
  SpecialTeams: { Player: 'Gearalt Chessor', FieldGoal: 45009, ExtraPoint: 1405 },
},
{
  id: 13,
  Offense: {
    Player: 'Meryl McCole', Passing: 23459, Rushing: 783, Receiving: 28020, Touchdowns: 99243,
  },
  Defense: {
    Player: 'Zane Strangeway', Tackles: 53, Sacks: 9683, Interceptions: 2, FumblesForced: 34,
  },
  SpecialTeams: { Player: 'Annalee Chalkly', FieldGoal: 84964, ExtraPoint: 9 },
},
{
  id: 14,
  Offense: {
    Player: 'Jordana Jozaitis', Passing: 84986, Rushing: 4, Receiving: 96028, Touchdowns: 302,
  },
  Defense: {
    Player: 'Rodrique Helleckas', Tackles: 5686, Sacks: 4465, Interceptions: 61695, FumblesForced: 7,
  },
  SpecialTeams: { Player: 'Clarine Schoolcroft', FieldGoal: 62, ExtraPoint: 29 },
},
{
  id: 15,
  Offense: {
    Player: 'Etienne Paulsson', Passing: 3317, Rushing: 3, Receiving: 783, Touchdowns: 138,
  },
  Defense: {
    Player: 'Chrisse Anfusso', Tackles: 2532, Sacks: 3, Interceptions: 32, FumblesForced: 87822,
  },
  SpecialTeams: { Player: 'Mortie Blondelle', FieldGoal: 91354, ExtraPoint: 35 },
},
{
  id: 16,
  Offense: {
    Player: 'Filmer Wardale', Passing: 571, Rushing: 5251, Receiving: 5468, Touchdowns: 41255,
  },
  Defense: {
    Player: 'Timi Warren', Tackles: 1, Sacks: 7109, Interceptions: 4, FumblesForced: 27,
  },
  SpecialTeams: { Player: 'Karlyn Earl', FieldGoal: 14, ExtraPoint: 0 },
},
{
  id: 17,
  Offense: {
    Player: 'Janos Haire', Passing: 60154, Rushing: 4, Receiving: 18, Touchdowns: 1329,
  },
  Defense: {
    Player: 'Herschel Crosi', Tackles: 7, Sacks: 353, Interceptions: 96, FumblesForced: 10,
  },
  SpecialTeams: { Player: 'Piper Basford', FieldGoal: 9886, ExtraPoint: 70168 },
},
{
  id: 18,
  Offense: {
    Player: 'Skipp Wiley', Passing: 1, Rushing: 6, Receiving: 22, Touchdowns: 393,
  },
  Defense: {
    Player: 'Caitlin Jozwiak', Tackles: 5, Sacks: 6943, Interceptions: 781, FumblesForced: 6710,
  },
  SpecialTeams: { Player: 'Lief Gerardin', FieldGoal: 92, ExtraPoint: 81 },
},
{
  id: 19,
  Offense: {
    Player: 'Portia Ogle', Passing: 7, Rushing: 8, Receiving: 9772, Touchdowns: 936,
  },
  Defense: {
    Player: 'Thia Learoid', Tackles: 41, Sacks: 3, Interceptions: 36000, FumblesForced: 19,
  },
  SpecialTeams: { Player: 'Jerrilee Lamb-shine', FieldGoal: 64, ExtraPoint: 922 },
},
{
  id: 20,
  Offense: {
    Player: 'Bran Ludmann', Passing: 3463, Rushing: 788, Receiving: 82880, Touchdowns: 30044,
  },
  Defense: {
    Player: 'Jacenta Witch', Tackles: 37930, Sacks: 9, Interceptions: 18439, FumblesForced: 3551,
  },
  SpecialTeams: { Player: 'Trixi Glendinning', FieldGoal: 35, ExtraPoint: 9572 },
},
{
  id: 21,
  Offense: {
    Player: 'Gawain Kirley', Passing: 8, Rushing: 196, Receiving: 91755, Touchdowns: 2,
  },
  Defense: {
    Player: 'Lynelle Aked', Tackles: 150, Sacks: 1, Interceptions: 62, FumblesForced: 21,
  },
  SpecialTeams: { Player: 'Forester Sarvar', FieldGoal: 5817, ExtraPoint: 2861 },
},
{
  id: 22,
  Offense: {
    Player: 'Margarethe Leas', Passing: 6, Rushing: 2203, Receiving: 4208, Touchdowns: 204,
  },
  Defense: {
    Player: 'Prinz Tefft', Tackles: 259, Sacks: 49989, Interceptions: 263, FumblesForced: 255,
  },
  SpecialTeams: { Player: 'Nicolais Cansdell', FieldGoal: 608, ExtraPoint: 9 },
},
{
  id: 23,
  Offense: {
    Player: 'Lanita Schlagh', Passing: 9, Rushing: 31991, Receiving: 137, Touchdowns: 4,
  },
  Defense: {
    Player: 'Jennifer Riepel', Tackles: 13783, Sacks: 197, Interceptions: 259, FumblesForced: 1292,
  },
  SpecialTeams: { Player: 'Rod Campion', FieldGoal: 46652, ExtraPoint: 28 },
},
{
  id: 24,
  Offense: {
    Player: 'Hadria Godman', Passing: 8182, Rushing: 54, Receiving: 52, Touchdowns: 33617,
  },
  Defense: {
    Player: 'Thorn Twaits', Tackles: 9630, Sacks: 79799, Interceptions: 4204, FumblesForced: 7177,
  },
  SpecialTeams: { Player: 'Sydelle Djordjevic', FieldGoal: 8, ExtraPoint: 950 },
},
{
  id: 25,
  Offense: {
    Player: 'Brittany Sotheron', Passing: 4319, Rushing: 54970, Receiving: 599, Touchdowns: 41,
  },
  Defense: {
    Player: 'Amelia Klulik', Tackles: 193, Sacks: 6, Interceptions: 678, FumblesForced: 4208,
  },
  SpecialTeams: { Player: 'Abie Nacey', FieldGoal: 86, ExtraPoint: 1176 },
},
{
  id: 26,
  Offense: {
    Player: 'Jacklyn Bendare', Passing: 31, Rushing: 3171, Receiving: 832, Touchdowns: 5,
  },
  Defense: {
    Player: 'Isidro Farraway', Tackles: 37904, Sacks: 583, Interceptions: 2, FumblesForced: 648,
  },
  SpecialTeams: { Player: 'Clayborne Antat', FieldGoal: 5, ExtraPoint: 2182 },
},
{
  id: 27,
  Offense: {
    Player: 'Lin Lindemann', Passing: 417, Rushing: 2906, Receiving: 7889, Touchdowns: 191,
  },
  Defense: {
    Player: 'Chick Osmon', Tackles: 1696, Sacks: 5048, Interceptions: 4965, FumblesForced: 5706,
  },
  SpecialTeams: { Player: 'Stoddard Spradbery', FieldGoal: 6372, ExtraPoint: 26 },
},
{
  id: 28,
  Offense: {
    Player: 'Dillon Wreiford', Passing: 48, Rushing: 225, Receiving: 37185, Touchdowns: 57641,
  },
  Defense: {
    Player: 'Antonella Standell', Tackles: 8051, Sacks: 4113, Interceptions: 45, FumblesForced: 82,
  },
  SpecialTeams: { Player: 'Clarice Turmel', FieldGoal: 3046, ExtraPoint: 3735 },
},
{
  id: 29,
  Offense: {
    Player: 'Temple Gandley', Passing: 0, Rushing: 99254, Receiving: 5, Touchdowns: 1665,
  },
  Defense: {
    Player: 'Tracee Jacobs', Tackles: 44046, Sacks: 7197, Interceptions: 9917, FumblesForced: 61,
  },
  SpecialTeams: { Player: 'Kari Drain', FieldGoal: 97, ExtraPoint: 75 },
},
{
  id: 30,
  Offense: {
    Player: 'Sherri Marran', Passing: 4, Rushing: 233, Receiving: 6, Touchdowns: 8837,
  },
  Defense: {
    Player: 'Sapphire Grimestone', Tackles: 711, Sacks: 5, Interceptions: 9, FumblesForced: 1,
  },
  SpecialTeams: { Player: 'Grata Torre', FieldGoal: 2, ExtraPoint: 92988 },
},
{
  id: 31,
  Offense: {
    Player: 'Gawen Nuschke', Passing: 84, Rushing: 3156, Receiving: 99369, Touchdowns: 6827,
  },
  Defense: {
    Player: 'Alejoa Stokey', Tackles: 36725, Sacks: 3808, Interceptions: 4751, FumblesForced: 76,
  },
  SpecialTeams: { Player: 'Joete Benech', FieldGoal: 77, ExtraPoint: 3263 },
},
{
  id: 32,
  Offense: {
    Player: 'Nessi Renshell', Passing: 4, Rushing: 43, Receiving: 7, Touchdowns: 97156,
  },
  Defense: {
    Player: 'Jean Kid', Tackles: 1, Sacks: 76, Interceptions: 4, FumblesForced: 52980,
  },
  SpecialTeams: { Player: 'Madeleine Benduhn', FieldGoal: 4, ExtraPoint: 2507 },
}];


const insertSampleBlogs = () => {
  db.Stats.create(sampleData)
    .then(() => db.disconnect());
};

insertSampleBlogs();
