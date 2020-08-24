import React from 'react';

import Navigation from '../../components/Navigation/Navigation';

const layout = props => {
  const style = {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'white',
    color: 'black'
  }
  if (props.darkMode) {
    style.backgroundColor = 'black';
    style.color = 'white';
  }
  return (
    <div style={style}>
      <Navigation />
      {props.children}
    </div>
  );
}

export default layout;