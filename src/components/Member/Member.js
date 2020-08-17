import React from 'react';

import ProfilePicture from '../ProfilePicture/ProfilePicture';

const member = props => {
  console.log('[Member] rendering...')
  return (
      <div style={{display: 'flex', padding: '5px'}}>
        <ProfilePicture size={30} />
        <h4 style={{margin: '10px'}}>{props.name}</h4>
      </div>
  )
}

export default member;