import React from 'react';
import styles from './styles/Forecast.css';

const Forecast = ({ period }) => (
  <div className={styles.forecast}>
    <h5 className={styles.header}>{period.name}</h5>
    <img className={styles.image} src={period.icon} alt="icon" />
    <p className={styles.details}>{period.detailedForecast}</p>
  </div>
);

export default Forecast;
