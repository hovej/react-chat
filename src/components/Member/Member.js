import React from 'react';

const member = props => {
  console.log('[Member] rendering...')
  return (
    <p>{props.name}</p>
  )
}

export default member;