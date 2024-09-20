import React from 'react'
import membership from '@/data/membership.json'
import GymCard from './GymCard'

const Gym = () => {
  return (
    <section className='flex flex-col justify-center items-center gap-4'>
        <h1 className='text-3xl font-bold mb-5'>Gym Membership</h1>
        <div className=''>
          <GymCard plans={membership}/>
        </div>
    </section>
  )
}

export default Gym