import React from 'react'

const Header = () => {
  return (
    <section className='relative h-[600px] md:h-[800px] flex justify-center items-center w-full bg-cover bg-center shadow-lg' style={{backgroundImage:"url('/images/gym-accueil.jpg')"}}>
      <div className='flex flex-col justify-center items-center h-full w-full bg-black bg-opacity-70'>
        <div className='text-center text-white z-50 w-3/4'>
          <h1 className='text-4xl md:text-6xl font-bold leading-tight'>Free trial with a personal trainer</h1>
          <button className='mt-6 inline-block px-8 py-3 bg-yellow-400 text-black font-bold uppercase rounded-lg shadow-lg hover:bg-yellow-500 transition'>
            Detailled
          </button>
        </div>
      </div>

    </section>
  )
}

export default Header