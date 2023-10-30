import React, { useEffect, useState } from 'react';
import './header.css';

const Header = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const day = time.toLocaleString('default', { weekday: 'long' });
  const month = time.toLocaleString('default', { month: 'long' });
  const dateNumber = time.getDate();
  const year = time.getFullYear();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <div className='headerContainer'>
      <div className='headerWraper'>
        <div className='DateSession'>
          <div className='day'>
            <h1 className='day'>{day}</h1>
          </div>
          <div className='mon_date'>
            <span className='month'>{month}</span>
            <span className='dates'>{dateNumber}{getOrdinalSuffix(dateNumber)}</span>
            <span className='year'>{year}</span>
          </div>
        </div>
        <div className='countdown'>
          <div className='count'>
            <span className='hours'>{hours.toString().padStart(2, '0')}</span>
            <span>:</span>
            <span className='minutes'>{minutes.toString().padStart(2, '0')}</span>
            <span>:</span>
            <span className='seconds'>{seconds.toString().padStart(2, '0')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to get the ordinal suffix for the date number
function getOrdinalSuffix(dateNumber) {
  const suffixes = ['th', 'st', 'nd', 'rd'];
  const remainder = dateNumber % 10;
  const suffix = suffixes[remainder] || suffixes[0];
  return suffix;
}

export default Header;