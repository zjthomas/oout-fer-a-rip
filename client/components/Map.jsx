import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/Map.css';

const Map = ({ map }) => (
  <div className={styles.map}>
    <a className={styles.link} href={map.link}>
      <img className={styles.photo} src={map.image} alt="map" />
    </a>
  </div>
);

export default Map;

Map.propTypes = {
  map: PropTypes.shape({
    link: PropTypes.string,
    image: PropTypes.string,
  }),
};

Map.defaultProps = {
  map: {
    link: '',
    image: '',
  },
};
