import React from 'react';
import T from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(friend => (
      <li key={friend.id} className={styles.item}>
        <span
          className={`${styles.status} ${
            friend.isOnline ? styles.online : styles.offline
          }`}
        />
        <img
          className={styles.avatar}
          src={friend.avatar}
          alt="profile's avatar"
          width="80"
        />
        <p className={styles.name}>{friend.name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: T.arrayOf(
    T.shape({
      avatar: T.string.isRequired,
      name: T.string.isRequired,
      isOnline: T.bool.isRequired,
      id: T.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
