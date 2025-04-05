import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1999-04-16T17:30:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 2,
    link: 'https://www.google.com/maps/d/edit?mid=1YYJimMeiAskTea1o0h_am81Nmu76ty8&ll=20.149673594726828%2C94.30631032111599&z=3',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Shenzhen, Guangdong',
  },
];

export default data;
