import React from 'react'
import join from "@/data/join.json"

const JoinPrograms = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-5 flex-1'>
        {join.map((element,index) => {
            return(
                <div className='flex items-center gap-3 w-full' key={index}>
                    <img className='h-9' src={element.svg} alt={element.title} />
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <h2 className='text-xl font-semibold'>{element.title}</h2>
                        <p className='text-sm'>{element.content}</p>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default JoinPrograms