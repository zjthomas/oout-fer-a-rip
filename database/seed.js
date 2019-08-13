const axios = require('axios');
const { Location } = require('./models');

const trimTheFat = (data) => {
  const entries = {};
  data.forEach((entry) => {
    if (!entries[entry.DATE]) {
      entries[entry.DATE] = {};
    }
    if (entry.STATION === 'USC00048758') {
      entries[entry.DATE].SNOW = Number.parseInt(entry.SNOW, 10);
    } else {
      entries[entry.DATE] = {
        DATE: Date.parse(entry.DATE),
        TMAX: Number.parseInt(entry.TMAX, 10),
        TMIN: Number.parseInt(entry.TMIN, 10),
        TAVG: Number.parseInt(entry.TAVG, 10),
        PRCP: Number.parseInt(entry.PRCP, 10),
        SNWD: Number.parseInt(entry.SNWD, 10),
        AWND: Number.parseInt(entry.AWND, 10),
        AWDR: Number.parseInt(entry.AWDR, 10),
        WSFI: Number.parseInt(entry.WSFI, 10),
      };
    }
  });
  return Object.values(entries).sort((a, b) => a.DATE - b.DATE);
};

axios.get('https://www.ncei.noaa.gov/access/services/data/v1', {
  params: {
    dataset: 'daily-summaries',
    stations: 'USS0020K30S,USC00048758',
    startDate: '2018-11-01',
    endDate: '2019-05-31', // 2019-05-31
    format: 'json',
    units: 'standard',
  },
}).then((data) => Location.create({
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
}))
  .then(() => console.log('success'))
  .catch((err) => console.log(err));
