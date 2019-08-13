import React from 'react';
import Graph from './Graph';
import Header from './Header';
import Map from './Map';
import List from './List';
import Weather from './Weather';
import styles from './styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line react/state-in-constructor
    this.state = {
      location: {},
      graphData: {
        DATE: [],
        TMAX: [],
        TMIN: [],
        TAVG: [],
        PRCP: [],
        SNOW: [],
        SNWD: [],
        AWND: [],
        AWDR: [],
        WSFI: [],
      },
    };
  }

  componentDidMount() {
    fetch('location', {
      method: 'GET',
    }).then((data) => data.json())
      .then((data) => {
        this.setState({ location: data });
        return data.data;
      })
      .then((data) => this.prepData(data))
      .catch((err) => console.log(err));
  }

  prepData(data) {
    const { graphData } = this.state;
    data.forEach((day) => {
      const keys = Object.keys(day);
      keys.forEach((key) => {
        graphData[key].push({ t: new Date(day.DATE), y: day[key] });
      });
    });
    this.setState({ graphData });
  }

  render() {
    const { location, graphData } = this.state;
    const {
      routes,
      guides,
      shops,
      avalanche,
    } = location;
    return (
      <div className={styles.container}>
        <Header location={location.location} />
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <Map map={location.map} />
            <Graph graphData={graphData} />
          </div>
          <div className={styles.lower}>
            <div className={styles.weather}>
              {location.lat
                && <Weather lat={location.lat} long={location.long} />}
              <List heading="Avalanche Advisory" list={avalanche} />
            </div>
            <div className={styles.resources}>
              <List heading="Routes" list={routes} />
              <List heading="Shops" list={shops} />
              <List heading="Guides" list={guides} />
            </div>
          </div>
          
        </div>
        
      </div>
    );
  }
}

export default App;
