import React from 'react'

const Header = () => {
  return (
   <section 
  className="relative flex justify-center items-center w-full bg-cover bg-no-repeat"
  style={{
    backgroundImage: "url('/images/gym-accueil.jpg')",
    backgroundPosition: 'center 20%',
    minHeight: '100vh',
    height: 'auto'
  }}
>
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
  
  <div className="relative z-10 text-center text-white max-w-4xl px-6 py-12 landscape:py-8">
    <h1 className="text-3xl sm:text-4xl md:text-7xl landscape:text-3xl font-bold leading-tight mb-4 landscape:mb-2">
      Transform Your Body
    </h1>
    <p className="text-base sm:text-xl md:text-2xl landscape:text-base text-gray-300 mb-6 landscape:mb-4 font-light">
      Free trial with a personal trainer included
    </p>
    <button className="px-8 py-3 landscape:px-6 landscape:py-2 bg-yellow-400 text-black font-bold text-base landscape:text-sm uppercase rounded-lg shadow-2xl hover:bg-yellow-500 hover:scale-105 transition-all duration-300">
      Get Started
    </button>
  </div>

  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
      <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
    </div>
  </div>
</section>
  )
}

export default Header