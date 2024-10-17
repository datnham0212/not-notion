import React from 'react';

const DonutChart = ({ percentage }) => {
  const radius = 50;
  const strokeWidth = 15;
  const normalizedRadius = radius - strokeWidth * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <svg width="120" height="120">
      <circle
        stroke="#e6e6e6"
        fill="transparent"
        strokeWidth={strokeWidth}
        r={normalizedRadius}
        cx="60"
        cy="60"
      />
      <circle
        stroke="#4caf50"
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeDasharray={`${circumference} ${circumference}`}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx="60"
        cy="60"
      />
      <text x="50%" y="50%" textAnchor="middle" stroke="#51c5cf" strokeWidth="1px" dy=".3em">
        {percentage}%
      </text>
    </svg>
  );
};

export default DonutChart;
