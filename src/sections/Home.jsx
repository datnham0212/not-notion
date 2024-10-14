import React from 'react';
import './static/Home.css'

const Home= () => {
  return (
    <>
      <div className='homeContainer'>
        <div className='overviewContainer'>
          <div className='overview'></div>
          <div className='dueToday'></div>
        </div>
        <div className='recentActs'></div>
      </div>
    </>
  );
};

export default Home; 
