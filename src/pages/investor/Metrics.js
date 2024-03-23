import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function Metrics() {
  const data = [
    { name: 'Total Funding Provided', funding: 100 },
    { name: 'Success Rate of Funded Projects', successRate: 0.8 },
    { name: 'Feedback from Entrepreneurs and Students', feedback: 4.5 },
  ];

  const barSize = 40;

  const getBarX = (index) => {
    if (index === 0) {
      return 291.333;
    } else if (index === data.length - 1) {
      return 431.333;
    } else {
      return index * (barSize + 10) + 301.333;
    }
  };

  return (
    <div>
      <h2>Metrics and Analytics</h2>
      <BarChart width={1200} height={500} margin={{ left: 100, right: 100 }} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[0, 'dataMax']} />
        <Tooltip />
        <Legend />
        {data.map((entry, index) => (
          <Bar
            key={`bar-${index}`}
            dataKey={Object.keys(entry)[1]}
            fill={['#8884d8', '#82ca9d', '#ffc658'][index]}
            x={getBarX(index)}
            y={50}
            width={barSize}
            height={entry[Object.keys(entry)[1]] * 100}
          />
        ))}
      </BarChart>
    </div>
  );
}
