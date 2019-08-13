import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/Header.css';

const Header = ({ location }) => (
  <div className={styles.header}>
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <img className={styles.logoPhoto} src="https://zjthomas.s3-us-west-1.amazonaws.com/mountain.jpg" alt="logo" />
        <h3 className={styles.name}>Shredopedia</h3>
      </div>
      <div>
        <h1>{location.split('-').map((val) => (val.split('')[0].toUpperCase() + val.slice(1))).join(' ')}</h1>
      </div>
      <div className={styles.searchBar}>
        <input type="text" value="search" />
      </div>
    </div>
  </div>
);

export default Header;

Header.propTypes = {
  location: PropTypes.string,
};
Header.defaultProps = {
  location: 'lake-tahoe',
};
