import React from 'react'
import join from "@/data/join.json"

const JoinPrograms = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 w-full max-w-6xl'>
      {join.map((element, index) => (
        <div 
          key={index}
          className='flex items-start gap-4 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300'
        >
          <div className='flex-shrink-0'>
            <img 
              className='h-10 w-10 md:h-12 md:w-12' 
              src={element.svg} 
              alt={element.title} 
            />
          </div>
          
          <div className='flex flex-col gap-2'>
            <h3 className='text-xl md:text-2xl font-bold text-gray-900'>
              {element.title}
            </h3>
            <p className='text-sm md:text-base text-gray-600 leading-relaxed'>
              {element.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default JoinPrograms