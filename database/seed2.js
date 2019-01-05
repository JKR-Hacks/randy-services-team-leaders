const db = require('./index2.js');

const playerPhotos = [{
  gender: 'male',
  name: { title: 'mr', first: 'kilian', last: 'frenzel' },
  location: {
    street: 'amselweg 157', city: 'putbus', state: 'hessen', postcode: 33453, coordinates: { latitude: '-44.5492', longitude: '33.3508' }, timezone: { offset: '-3:30', description: 'Newfoundland' },
  },
  email: 'kilian.frenzel@example.com',
  login: {
    uuid: '34e0b640-2988-4627-9fd1-2a5bcda94a56', username: 'yellowsnake204', password: 'barron', salt: 'ajMIIxiD', md5: 'b1b70783a66f97bbea6e1e81a0877616', sha1: '04eb839b6755b8e4ab9d2c50c23fe719e4b3005d', sha256: '7ba1703281c52187d91f37dbca13508c8764737ab24196bb92d12010d6668825',
  },
  dob: { date: '1953-10-10T23:02:19Z', age: 65 },
  registered: { date: '2013-01-19T23:59:50Z', age: 5 },
  phone: '0788-6626332',
  cell: '0179-8577984',
  id: { name: '', value: null },
  picture: { large: 'https://randomuser.me/api/portraits/men/35.jpg', medium: 'https://randomuser.me/api/portraits/med/men/35.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/men/35.jpg' },
  nat: 'DE',
}, {
  gender: 'male',
  name: { title: 'mr', first: 'walter', last: 'newman' },
  location: {
    street: '8219 manchester road', city: 'swansea', state: 'mid glamorgan', postcode: 'QS3X 8SZ', coordinates: { latitude: '-52.9430', longitude: '161.8152' }, timezone: { offset: '+8:00', description: 'Beijing, Perth, Singapore, Hong Kong' },
  },
  email: 'walter.newman@example.com',
  login: {
    uuid: 'c9ccfd7c-9fad-4d6d-a3b3-551771019316', username: 'bigmouse304', password: '3232', salt: 'UmtvfCCe', md5: '576220901fe4829de5e4fbc68b4f732d', sha1: 'e7fbf398fab64e6221a63663290b32376e81d702', sha256: '3b708c1743638c66f06d886dd8696c57f651e129d225aadd0c42cb17ee23ae8b',
  },
  dob: { date: '1949-04-05T23:52:15Z', age: 69 },
  registered: { date: '2008-07-24T07:24:50Z', age: 10 },
  phone: '015395 31712',
  cell: '0784-318-694',
  id: { name: 'NINO', value: 'OH 32 65 87 K' },
  picture: { large: 'https://randomuser.me/api/portraits/men/98.jpg', medium: 'https://randomuser.me/api/portraits/med/men/98.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/men/98.jpg' },
  nat: 'GB',
}, {
  gender: 'male',
  name: { title: 'mr', first: 'dave', last: 'walters' },
  location: {
    street: '9091 highfield road', city: 'nottingham', state: 'merseyside', postcode: 'FR0 9NH', coordinates: { latitude: '-26.6109', longitude: '19.6453' }, timezone: { offset: '+3:30', description: 'Tehran' },
  },
  email: 'dave.walters@example.com',
  login: {
    uuid: '4feee6e8-2646-4d97-81d4-d246352469ce', username: 'greengorilla552', password: 'battery', salt: 'cXdFXyu2', md5: 'e2f3a348bcd5f41547b97ac8dde69592', sha1: '482c64471dbe3ed482997bbf155fba1039dd2310', sha256: 'bfe39b8f85b762702efb5a95754762eb655ea2c6538b3f9618d2f631919475c2',
  },
  dob: { date: '1966-08-17T08:30:02Z', age: 52 },
  registered: { date: '2016-10-31T10:21:25Z', age: 2 },
  phone: '017684 90754',
  cell: '0729-213-429',
  id: { name: 'NINO', value: 'YK 53 09 36 E' },
  picture: { large: 'https://randomuser.me/api/portraits/men/74.jpg', medium: 'https://randomuser.me/api/portraits/med/men/74.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/men/74.jpg' },
  nat: 'GB',
}, {
  gender: 'male',
  name: { title: 'mr', first: 'arnim', last: 'clausen' },
  location: {
    street: 'kirchstraße 167', city: 'olpe', state: 'saarland', postcode: 50703, coordinates: { latitude: '13.6785', longitude: '-97.5320' }, timezone: { offset: '+4:00', description: 'Abu Dhabi, Muscat, Baku, Tbilisi' },
  },
  email: 'arnim.clausen@example.com',
  login: {
    uuid: '9368040b-c811-437e-b152-b23ccc097454', username: 'lazyladybug266', password: 'pitchers', salt: 'jqA26mQt', md5: 'f7916242b4eea9a80477d5070d26c05c', sha1: 'e66f178a2deb6f31e3862ee76c38f7e69156db2a', sha256: 'ec792561909ef375bb2522fe4a5545fb41da4a27da6f69cf144dedacdff883bc',
  },
  dob: { date: '1946-10-11T23:18:49Z', age: 72 },
  registered: { date: '2014-04-08T02:58:12Z', age: 4 },
  phone: '0493-5657523',
  cell: '0176-1695310',
  id: { name: '', value: null },
  picture: { large: 'https://randomuser.me/api/portraits/men/47.jpg', medium: 'https://randomuser.me/api/portraits/med/men/47.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/men/47.jpg' },
  nat: 'DE',
}, {
  gender: 'male',
  name: { title: 'mr', first: 'adem', last: 'babacan' },
  location: {
    street: '7040 anafartalar cd', city: 'batman', state: 'İzmir', postcode: 65512, coordinates: { latitude: '-39.5640', longitude: '-175.4135' }, timezone: { offset: '-7:00', description: 'Mountain Time (US & Canada)' },
  },
  email: 'adem.babacan@example.com',
  login: {
    uuid: '67d74101-9e98-48c5-9fb4-9033a30670fd', username: 'crazyzebra831', password: 'daemon', salt: 'VXj0n0ID', md5: '8a0529dc31ac01a1cf4e3a79dbd33157', sha1: 'dc6f44a1046ad6bcf38e8bea1cf096952705b4c7', sha256: '46b2cdd35be94cb27fd1c00566e8c559b1179f1985d46285408036dd2c9e7b28',
  },
  dob: { date: '1971-01-25T20:45:39Z', age: 47 },
  registered: { date: '2011-09-26T15:52:18Z', age: 7 },
  phone: '(646)-235-4686',
  cell: '(521)-026-8205',
  id: { name: '', value: null },
  picture: { large: 'https://randomuser.me/api/portraits/men/54.jpg', medium: 'https://randomuser.me/api/portraits/med/men/54.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/men/54.jpg' },
  nat: 'TR',
}, {
  gender: 'male',
  name: { title: 'mr', first: 'filoteu', last: 'ribeiro' },
  location: {
    street: '7101 rua são joão ', city: 'hortolândia', state: 'piauí', postcode: 99490, coordinates: { latitude: '88.0690', longitude: '-107.9744' }, timezone: { offset: '-6:00', description: 'Central Time (US & Canada), Mexico City' },
  },
  email: 'filoteu.ribeiro@example.com',
  login: {
    uuid: '5e4d189c-d6c7-461e-bf69-0f67602a2e9e', username: 'orangerabbit343', password: 'kitkat', salt: 'kuEKMNrc', md5: 'a913684b1abee2c3d524a423666b20bd', sha1: '543491b6bc758a13e29942900a9ec8e3b57c2ff6', sha256: '31fc6e06e77e3794108f82b58c4c88e686832ba17aebbf088a41f3553af1cfea',
  },
  dob: { date: '1972-05-20T03:20:39Z', age: 46 },
  registered: { date: '2011-05-11T04:04:14Z', age: 7 },
  phone: '(39) 7457-5098',
  cell: '(42) 6531-7128',
  id: { name: '', value: null },
  picture: { large: 'https://randomuser.me/api/portraits/men/7.jpg', medium: 'https://randomuser.me/api/portraits/med/men/7.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/men/7.jpg' },
  nat: 'BR',
}, {
  gender: 'male',
  name: { title: 'mr', first: 'boaz', last: 'albrecht' },
  location: {
    street: '506 paardenveld', city: 'reusel-de mierden', state: 'gelderland', postcode: 72541, coordinates: { latitude: '82.7765', longitude: '-69.9739' }, timezone: { offset: '-6:00', description: 'Central Time (US & Canada), Mexico City' },
  },
  email: 'boaz.albrecht@example.com',
  login: {
    uuid: '826dd3f9-6ab5-4eda-bb8d-d1cc9454b8eb', username: 'brownpeacock843', password: 'kokoko', salt: 'SXo2rAgl', md5: '9d6f96f52b3a9131248db0b51efcb649', sha1: 'f1bf0dde1ce492574f5e1eaf250f4955ca21d5df', sha256: '45e4793ffff218ca54b1de0c2ab9633a948ea03f33635a5829eb5304c8dde8f5',
  },
  dob: { date: '1952-08-24T23:43:22Z', age: 66 },
  registered: { date: '2002-07-06T11:24:19Z', age: 16 },
  phone: '(647)-150-7898',
  cell: '(780)-406-9295',
  id: { name: 'BSN', value: '50782418' },
  picture: { large: 'https://randomuser.me/api/portraits/men/7.jpg', medium: 'https://randomuser.me/api/portraits/med/men/7.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/men/7.jpg' },
  nat: 'NL',
}, {
  gender: 'male',
  name: { title: 'mr', first: 'nicolas', last: 'ambrose' },
  location: {
    street: '5706 richmond ave', city: 'cornwall', state: 'manitoba', postcode: 'B3Y 4V1', coordinates: { latitude: '-20.3083', longitude: '31.4869' }, timezone: { offset: '-8:00', description: 'Pacific Time (US & Canada)' },
  },
  email: 'nicolas.ambrose@example.com',
  login: {
    uuid: '3e9e499b-0c08-4c65-9166-86eba349d58a', username: 'tinytiger749', password: 'sparky', salt: 'fUddORXn', md5: '7163e8b93d05b7dc345926dc6f69dec1', sha1: '72c1d40db4fcb3c37bd3f9e9720a4775ad3be571', sha256: '48896ebfe27d345a417e2b4470fc828b767e95987ee8b57ec21e2facd59726f8',
  },
  dob: { date: '1956-05-26T19:49:31Z', age: 62 },
  registered: { date: '2006-09-10T19:52:51Z', age: 12 },
  phone: '165-718-6320',
  cell: '130-259-9784',
  id: { name: '', value: null },
  picture: { large: 'https://randomuser.me/api/portraits/men/44.jpg', medium: 'https://randomuser.me/api/portraits/med/men/44.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/men/44.jpg' },
  nat: 'CA',
}];

const insertSampleImages = () => {
  db.Photos.create(playerPhotos)
    .then(() => db.disconnect());
};

insertSampleImages();
