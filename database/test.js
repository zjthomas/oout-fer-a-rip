// const { Location } = require('./models');

// Location.find({ location: 'Lake Tahoe' })
//   .then((data) => console.log(data[0].data[1]))
//   .catch((err) => console.log(err));

// let a = ('hello-there').split('-')
// a.map((val) => {
//   console.log(val[0].toUpperCase())
//   // val.split('')[0].toUpperCase().join('')
// });

const data = {
  location: 'lake-tahoe',
  stations: 'USS0020K30S,USC00048758',
  lastUpdate: Date.now(),
  lat: 39.1677,
  long: -120.1452,
  map: {
    link: 'https://caltopo.com/map.html#ll=39.17399,-120.02357&z=11&b=mbt',
    image: 'https://zjthomas.s3-us-west-1.amazonaws.com/tahoe-map.png',
  },
  shops: [
    {
      title: 'The Back Country',
      link: 'https://thebackcountry.net/',
      image: 'https://thebackcountry.net/wp-content/uploads/2016/11/the-backcountry-logo-v2.png',
    },
    {
      title: 'Alpenglow Sports',
      link: 'https://www.alpenglowsports.com/',
      image: 'https://static.wixstatic.com/media/478766_d9440aae76e7454d9ed71ea7b9ec385e~mv2.png/v1/fill/w_299,h_101,al_c,q_80,usm_0.66_1.00_0.01/AlpenglowSports_logo.webp',
    },
  ],
  guides: [
    {
      title: 'AlpenGlow Expeditions',
      link: 'https://alpenglowexpeditions.com/expeditions/private-ski-guiding/',
      image: 'https://zjthomas.s3-us-west-1.amazonaws.com/alpenglow-expeditions-logo.png',
    },
    {
      title: 'Alpine Skills',
      link: 'http://www.alpineskills.com/',
      image: null,
    },
  ],
  routes: [
    {
      title: 'Mt. Tallac',
      link: 'https://www.powderproject.com/trail/7000124/mount-tallac-northeast-bowl-ascent',
      image: null,
    },
    {
      title: 'Mikes Ski Tours',
      link: 'https://thebackcountry.net/tahoe-backcountry-adventures/',
      image: null,
    },
  ],
  avalanche: [{
    title: 'Sierra Avalanche Center',
    link: 'https://www.sierraavalanchecenter.org/advisory',
    image: null,
  }],
  data: trimTheFat(data.data),
};
