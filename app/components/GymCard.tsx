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

const GymCard:React.FC<GymCardProps> = ({plans}) => {
    console.log(plans);
  return (
    <section className='grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 gap-4'>
            {plans.map((plan,index) => {
                return(
                    <div className='w-[280px] h-[420px] bg-[#222222] p-5 rounded-lg' key={index}>
                        <div className='flex flex-col justify-center items-center h-full gap-3'>
                            <h1 className='text-3xl'>{plan.name}</h1>
                            <span className='text-2xl mb-3'>${plan.price}</span>
                            <ul className='flex flex-col justify-center items-center w-full flex-1'>
                                {plan.features.map((el,index) => {
                                    return(
                                        <li key={index} className='gap-4 text-center inline-block text-lg'>{el}</li>
                                    )
                                })}
                            </ul>
                            <button className='mt-6 inline-block px-8 py-3 bg-yellow-400 text-black font-bold uppercase rounded-lg shadow-lg hover:bg-yellow-500 transition'>Buy</button>
                        </div>
                    </div>
                    )
                })}

    </section>
  )
}

export default GymCard