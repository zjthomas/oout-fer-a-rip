import React from 'react';
import Forecast from './Forecast';
import styles from './styles/Weather.css';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: this.props.lat,
      long: this.props.long,
      forecast: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { lat, long } = this.state;
    fetch(`weather/${lat},${long}`, {
      method: 'GET',
    }).then(data => data.json())
      .then(data => this.setState({ forecast: data }))
      .catch(err => console.log(err));
  }

  render() {
    const { forecast } = this.state;
    return (
      <div className={styles.weather}>
        {forecast.map((period) => {
          if (period.isDaytime) {
            return <Forecast period={period} />;
          }
        })}
      </div>
    );
  }
}

export default Weather;
