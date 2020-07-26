import React from 'react';

const member = props => {
  console.log('[Member] rendering...')
  return (
    <div>
      <h4 style={{marginBottom: '0'}}>{props.name}</h4>
      <p style={{marginTop: '0'}}>{props.user}</p>
    </div>
  )
}

export default member;