import React from 'react';

const DonutChart = ({ percentage }) => {
  const radius = 150; 
  const strokeWidth = 20; 
  const normalizedRadius = radius - strokeWidth * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <svg width="300" height="300"> 
      <circle
        stroke="#e6e6e6" // Background circle color
        fill="transparent"
        strokeWidth={strokeWidth}
        r={normalizedRadius}
        cx="150" 
        cy="150" 
      />
      <circle
        stroke="#ff9800" // Orange for completed tasks
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeDasharray={`${circumference} ${circumference}`}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx="150" 
        cy="150" 
      />
      <text x="50%" y="50%" textAnchor="middle" stroke="#2196f3" strokeWidth="1px" dy=".3em" fontSize="24" fontFamily="Arial">
        {percentage.toFixed(0)}% {/* Display percentage */}
      </text>
    </svg>
  );
};

export default DonutChart;
