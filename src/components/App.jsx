import React from 'react';

import user from './Profile/user.json';
import Profile from './Profile/Profile';

import statisticalData from './Statistics/statistical-data.json';
import Statistics from './Statistics/Statistics';

import friends from './FriendList/friends.json';
import FriendList from './FriendList/FriendList';

import transactions from './TransactionHistory/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';

const App = () => (
  <>
    <Profile user={user} />
    <Statistics stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);

export default App;
