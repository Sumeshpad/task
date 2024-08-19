import React from 'react';

function TeammateProfile({ name, location, time, avatar,onHover }) {
  return (
    <div className="flex items-center justify-between w-full cursor-pointer"
      onMouseEnter={() => onHover(time)}
      onMouseLeave={() => onHover(null)}>
    <div className="flex items-center space-x-8">
      <img 
        src={avatar} 
        alt={`${name}'s avatar`} 
        className="w-10 h-10 rounded-full"
      />
      <div className="flex flex-col">
        <div className="text-m font-semibold">{name}</div>
        <div className="text-xs text-gray-400">{location}</div>
      </div>
    </div>
    <div className="text-xs font-medium text-gray-600">
      {time}
    </div>
  </div>
  );
}

export default TeammateProfile;
