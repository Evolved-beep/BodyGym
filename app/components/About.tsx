import React from 'react'

const About = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-4 mb-6 md:w-4/5 md:m-auto'>
        <h1 className='text-3xl font-bold'>About us</h1>
        <div className='flex flex-col justify-center items-center gap-4 w-4/6 m-auto md:items-start'>
            <p className='text-lg'>
                Gym24 is a leading fitness center located near Grushevka metro station, offering over 1500 sq. m of space dedicated to top-of-the-line workout equipment from leading brands such as Hammer Strengh, Life Fitness, and TechnoGym.
            </p>
            <p className='text-lg'>
                Certified trainers at Gym24 provide expert guidance and support to develop personalized workout plans tailored to each individuals needs and goals.
            </p>
        </div>
    </section>
  )
}

export default About