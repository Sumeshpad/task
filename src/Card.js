import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnalogClock from './AnalogClock.js';
import TeammateProfile from './TeammateProfile.js';
import Sarah from "./images/Sarah.jpeg";
import elon from "./images/elon.jpg";
import Isabella from "./images/Isabella.webp";
import Kumail from "./images/Kumail.webp";
import Liam from "./images/Liam.jpg";

const teamMembers = [
  { name: 'Sarah', location: 'Vancouver, Canada', time: '8:40 AM', avatar: Sarah },
  { name: 'Kumail', location: 'Toronto, Canada', time: '11:40 AM', avatar: Kumail },
  { name: 'Ethan', location: 'San Francisco, USA', time: '8:40 AM', avatar: elon },
  { name: 'Isabella', location: 'Toronto, Canada', time: '11:23 AM', avatar: Isabella },
  { name: 'Liam', location: 'London, UK', time: '4:40 PM', avatar: Liam },
];

const clockVariants = {
  centre: { x: '24px' },
  left: { x: '14vw' },
};

function Card() {
  const [isToggled, setIsToggled] = useState(false);
  const [hoveredTime, setHoveredTime] = useState(null);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div 
      className="relative flex items-center justify-center min-h-screen"
    >
     <div className="absolute inset-0 flex space-x-6">
        {[...Array(9)].map((_, i) => (
          <div 
            key={i} 
            className="h-full bg-gray-100" 
            style={{ width: '8%' }} 
          />
        ))}
      </div>
      
      {/* Card */}
      <div 
        className="bg-white shadow-2xl rounded-3xl flex flex-col items-center relative z-10"
        style={{ width: '700px', height: '450px' }}  
      >
      
        <div className="absolute top-6 left-6 flex mt-2 items-center space-x-2">
          <div className="text-3xl font-bold">Team</div>
          <div className="w-2 h-2 bg-green-500 rounded-full shadow-lg"/>
          <div className="text-xs">5 online</div>
        </div>
{/* Switch */}
        <div className="flex flex-col items-center w-full mt-10">
          <div className="flex items-center cursor-pointer">
            <motion.div 
              className="relative block w-10 h-6 rounded-full bg-gray-200 shadow-inner"
              animate={{ backgroundColor: isToggled ? '#16171a' : '#fff' }}
              transition={{ duration: 0.4 }}
              onClick={handleToggle}
            >
              
              <motion.div 
                className="absolute top-1 left-1 bg-white w-4 h-4 rounded-full z-10 shadow-lg" 
                layout
                transition={{ ease: 'easeInOut', duration: 0.3 }}
                animate={{ x: isToggled ? 16 : 0 }}
              />
            </motion.div>
          </div>
        </div>
        
        {/* Clock and Profile */}
        <div className="flex items-center justify-between w-full h-full px-6">
          <motion.div
            
            variants={clockVariants}
            animate={isToggled ? 'left' : 'centre'}
            transition={{ duration: 0.5 }}
          >
            <AnalogClock time={hoveredTime || '11:40 PM'} />
          </motion.div>

          {!isToggled && ( 
            <div className="flex flex-col justify-center w-1/2 space-y-8 h-full">
              {teamMembers.map((member, index) => (
                <TeammateProfile
                  key={index}
                  name={member.name}
                  location={member.location}
                  time={member.time}
                  avatar={member.avatar}
                  onHover={setHoveredTime}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
