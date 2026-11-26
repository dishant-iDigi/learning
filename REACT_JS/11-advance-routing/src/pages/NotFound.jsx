import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="notfound-page">
      <h1>404</h1>
      <div className="cloak__wrapper">
        <div className="cloak__container">
          <div className="cloak"></div>
        </div>
      </div>
      <div className="info">
       
        <p className='font-medium'>
          We're fairly sure that page used to be here, but seems to have gone
          missing. We do apologise on it's behalf.
        </p>
        <a href="/">Home</a>
      </div>
    </div>
  );
};

export default NotFound;