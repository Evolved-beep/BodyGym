import React from 'react'

const About = () => {
  return (
    <section className='py-20 bg-gray-50'>
      <div className='max-w-4xl mx-auto px-8'>
        <h2 className='text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900'>
          About Us
        </h2>
        <div className='flex flex-col gap-8'>
          <p className='text-lg md:text-xl text-gray-700 leading-relaxed text-center md:text-left'>
            Gym24 is a leading fitness center located near Grushevka metro station, offering over 
            <span className='font-bold text-yellow-600'> 1500 sq. m</span> of space dedicated to 
            top-of-the-line workout equipment from leading brands such as 
            <span className='font-semibold'> Hammer Strength, Life Fitness, and TechnoGym</span>.
          </p>
          
          <p className='text-lg md:text-xl text-gray-700 leading-relaxed text-center md:text-left'>
            Certified trainers at Gym24 provide expert guidance and support to develop 
            <span className='font-bold text-yellow-600'> personalized workout plans</span> tailored 
            to each individual's needs and goals.
          </p>
        </div>
        <div className='flex justify-center mt-12'>
          <button className='px-8 py-4 bg-yellow-400 text-black font-bold text-lg uppercase rounded-lg shadow-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300'>
            Visit Us Today
          </button>
        </div>
      </div>
    </section>
  );
};
export default About