import React from 'react'

interface ICard {
    name:string,
    price:number,
    features:string[],
    buttonText:string
}

interface GymCardProps {
    plans:ICard[]
}

const GymCard: React.FC<GymCardProps> = ({ plans }) => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4'>
      {plans.map((plan, index) => (
        <div 
          key={index}
          className='bg-[#1a1a1a] border-2 border-gray-800 p-8 rounded-2xl hover:border-yellow-400 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/20'
        >
          <div className='flex flex-col items-center h-full gap-6'>
            <h3 className='text-3xl font-bold text-white'>{plan.name}</h3>
            <div className='text-center'>
              <span className='text-5xl font-bold text-yellow-400'>£{plan.price}</span>
              <p className='text-gray-400 text-sm mt-1'>per month</p>
            </div>
            <ul className='flex flex-col gap-4 w-full flex-1 mt-4'>
              {plan.features.map((feature, idx) => (
                <li 
                  key={idx} 
                  className='text-gray-300 text-center flex items-center justify-center gap-2'
                >
                  <span className='text-yellow-400'>✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className='w-full py-4 bg-yellow-400 text-black font-bold uppercase rounded-lg shadow-lg hover:bg-yellow-500 hover:shadow-xl transition-all duration-300'>
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default GymCard