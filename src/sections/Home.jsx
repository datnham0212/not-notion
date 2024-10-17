import React from 'react';
import './static/Home.css'

const Home= () => {
  return (
    <>
      <div className='homeContainer'>
        <div className='overviewContainer'>
          <div className='overview'>
            <div className='overviewLeft'>
              <div className='totalTasks'>
                <h2>Total Tasks: </h2>
              </div>
              <div className='tasksCompleted'>
                <h2>Tasks Completed: </h2>
              </div>
            </div>
            <div className='overviewRight'>
              <div className='percentageDonut' />
            </div>
          </div>
          <div className='dueToday'></div>
        </div>
        <div className='recentActs'></div>
      </div>
    </>
  );
};

export default Home; 
