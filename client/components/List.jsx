import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import styles from './styles/List.css';

const List = ({ heading, list }) => (
  <div className={styles.wrapper}>
    <h3>{heading}</h3>
    {list.length > 0
      && list.map(item => <ListItem item={item} />)}
  </div>
);

export default List;

List.propTypes = {
  heading: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
    image: PropTypes.string,
  })),
};
List.defaultProps = {
  heading: '',
  list: [],
};
