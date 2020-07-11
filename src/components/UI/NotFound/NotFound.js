import React from 'react';
import { Link } from 'react-router-dom';

const notFound = props => (
  <div>
    <h1>Error 404: Page not found</h1>
    <p>Plese return back to the <Link to='/home'>home</Link> screen.</p>
  </div>
)

export default notFound;