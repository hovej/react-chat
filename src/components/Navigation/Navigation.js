import React from 'react';

import classes from './Navigation.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigation = props => {
  return (
    <ul className={classes.Navigation}>
      <NavigationItem location={'/login'}>Logout</NavigationItem>
      <NavigationItem location={'/settings'}>Settings</NavigationItem>
      <NavigationItem location={'/news'}>News</NavigationItem>
      <NavigationItem location={'/home'}>Chat</NavigationItem>
      <h3 className={classes.Title}>REACT CHAT</h3>
    </ul>
  )
}

export default navigation;