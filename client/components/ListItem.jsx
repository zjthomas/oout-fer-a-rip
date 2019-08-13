import React from 'react';
import styles from './styles/ListItem.css';

const ListItem = ({ item }) => (
  <div className={styles.item}>
    <a href={item.link}>
      {!item.image
      && <h5>{item.title}</h5>}
      {item.image
      && <img className={styles.image} src={item.image} alt="item" />}
    </a>
  </div>
);

export default ListItem;
