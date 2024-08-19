  import React from 'react';
  import { motion } from 'framer-motion';



  const AnalogClock = ({time,onHourHandPosition}) => {


    const parseTime = (timeString) => {
      const [hoursStr, minutesStr] = timeString.split(':');
      const hours = parseInt(hoursStr, 10);
      const minutes = parseInt(minutesStr, 10);
      return { hours, minutes, seconds: 0 }; 
    };
  
    
    const { hours, minutes, seconds } = time ? parseTime(time) : { hours: 11, minutes: 40, seconds: 15};
   
    const secondsDeg = (seconds / 60) * 360;
    const minutesDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
    const hoursDeg = (hours % 12) / 12 * 360 + (minutes / 60) * 30;

  // Hand Length

    const hourHandLength = '5rem';  
    const minuteHandLength = '6.5rem';
    const secondHandLength = '7rem'; 
    // const radians = (hoursDeg - 90) * (Math.PI / 180); 
    // const x = hourHandLength * Math.cos(radians);
    // const y = hourHandLength * Math.sin(radians);
    // React.useEffect(() => {
    //   if (onHourHandPosition) {
    //     onHourHandPosition({ x, y });   
    //   }
    // }, [x, y, onHourHandPosition]);
    
    
    return (
      <div className="relative w-60 h-60 bg-white border-4 border-white rounded-full  flex items-center  justify-center"
      
      
      >
        {/* Clock Face */}
        <div className="absolute w-full h-full flex items-center justify-center">
          {/* Hour Hand */}
          <motion.div
            className="absolute bg-gray-800 rounded-lg z-10"
            style={{
              width: '6px',
              height: hourHandLength,
           
              transformOrigin: 'bottom center',
              marginLeft: '-3px', // Half the width of the hand (6px / 2)
              marginTop: `-${hourHandLength}` // Height of the hour hand
            }}
            animate={{ rotate: hoursDeg }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          />
          {/* Minute Hand */}
          <motion.div
            className="absolute bg-gray-600 rounded-lg z-10"
            style={{
              width: '6px',
              height: minuteHandLength,
            
              transformOrigin: 'bottom center',
              marginLeft: '-3px', 
              marginTop: `-${minuteHandLength}` 
            }}
            animate={{ rotate: minutesDeg }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          />
          {/* Second Hand */}
          <div
            className="absolute bg-red-400 rounded-lg z-10"
            style={{
              width: '2px',
              height: secondHandLength,
              transform: `rotate(${secondsDeg}deg)`,
              transformOrigin: 'bottom center',
              marginLeft: '-1px', 
              marginTop: `-${secondHandLength}` 
            }}
          />
        </div>
        <div className="absolute bottom-12 text-lg font-normal text-gray-500">
        {hours % 12 === 0 ? 12 : hours % 12}:{minutes < 10 ? `0${minutes}` : minutes} 
      </div>
        
        {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-gray-500 rounded-lg"
          style={{
            width: i % 3 === 0 ? '4px' : '2px', 
            height: '24px',
            transform: `rotate(${i * 30}deg) translate(0, -105px)`, 
            transformOrigin: 'center center',
          }}
        />
      ))}
      </div>
    );
  };

  export default AnalogClock;
