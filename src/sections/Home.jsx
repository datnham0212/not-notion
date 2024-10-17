import React from 'react';
import './static/Home.css';
import DonutChart from './dynamic/DonutChart';

const Home= () => {

  const totalTasks = 5;
  const tasksCompleted = 3;
  const taskPercentage = (tasksCompleted / totalTasks) * 100;

  return (
    <>
      <div className='homeContainer'>
        <div className='overviewContainer'>
          <div className='overview'>
            <div className='overviewLeft'>
              <div className='totalTasks'>
                <h2>Total Tasks: {totalTasks}</h2>
              </div>
              <div className='tasksCompleted'>
                <h2>Tasks Completed: {tasksCompleted}</h2>
              </div>
            </div>
            <div className='overviewRight'>
              <DonutChart percentage={taskPercentage} />
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
