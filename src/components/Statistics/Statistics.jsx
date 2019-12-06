import React from 'react';
import T from 'prop-types';
import randomColor from './randomColor';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    <h2 className={styles.title}>{title}</h2>

    <ul className={styles.statList}>
      {stats.map(el => (
        <li
          key={el.id}
          className={styles.statListItem}
          style={{
            backgroundColor: randomColor(),
          }}
        >
          <span className={styles.label}>{el.label}</span>
          <span className={styles.percentage}>{el.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: 'File upload',
};

Statistics.propTypes = {
  title: T.string,
  stats: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      label: T.string.isRequired,
      percentage: T.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
