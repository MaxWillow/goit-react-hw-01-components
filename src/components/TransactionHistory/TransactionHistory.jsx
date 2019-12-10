import React from 'react';
import T from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styles.transactionHistory}>
    <thead className={styles.tableHeader}>
      <tr>
        <th className={styles.tableColumns}>Amount</th>
        <th className={styles.tableColumns}>Type</th>
        <th className={styles.tableColumns}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(item => (
        <tr key={item.id} className={styles.tableRows}>
          <td className={styles.tableColumns}>{item.type}</td>
          <td className={styles.tableColumns}>{item.amount}</td>
          <td className={styles.tableColumns}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      type: T.string.isRequired,
      amount: T.string.isRequired,
      currency: T.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
