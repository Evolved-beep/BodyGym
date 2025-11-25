import React from 'react'
import JoinPrograms from './JoinPrograms'

const Join = () => {
  return (
   <section className='flex flex-col justify-center items-center w-full px-6 md:px-12 lg:w-3/5 m-auto py-16'>
    <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl mb-10 text-center'>
      Reasons to join
    </h1>
    <JoinPrograms />
  </section>
  )
}

export default Join