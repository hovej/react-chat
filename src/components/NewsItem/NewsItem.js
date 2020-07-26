import React from 'react';

import classes from './NewsItem.module.css';

const newsItem = props => {
  return (
    <div>
      <li className={classes.Content}>{props.content}</li>
    </div>
  )
}

export default newsItem;