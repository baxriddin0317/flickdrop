import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'
import { BonusBg1 } from '../icons'

interface props {
  className?: string;
  IconColor: string;
  imgUrl: string;
  socialName: string;
  bonusPrice: number;
}

const BonusSocialCard = ({className, IconColor, imgUrl, socialName, bonusPrice}: props) => {
  return (
    <div 
      className={clsx(
        "w-full h-52 relative flex justify-end rounded-3xl overflow-hidden px-3 py-3 lg:pt-5", 
        "bg-[linear-gradient(270deg,#07080B_0%,#181B27_100%)] border border-white/10",
        className
      )}
    >
      <div className="absolute right-0 top-0 w-full h-full overflow-hidden rounded-3xl">
        <span className="absolute bottom-0 right-0 w-full h-full"><BonusBg1 color={IconColor} /></span>
      </div>
      <div className='absolute bottom-0 left-0 w-56 h-[156px] md:w-72 md:h-48'>
        <Image className='absolute size-full bottom-0 ' src={imgUrl} alt='card-img' fill />
      </div>
      <div className="relative w-52 right-0 flex flex-col items-start justify-between h-full z-10">
        <h2 className='text-xl font-bold text-white'>
          Подписаться <br /> на {socialName}
        </h2>
        <div>
          <span className='text-brand-gray-2 font-medium text-sm text-ellipsis line-clamp-1'>Бонус</span>
          <div className='flex items-center gap-1.5'>
            <span className='flex bg-brand-yellow items-center justify-center size-5 lg:size-5 rounded-full text-brand-dark text-sm font-bold'>$</span>
            <span className='block lg:text-lg font-bold text-white'>{bonusPrice}</span>
          </div>
        </div>
        <button className='bg-brand-neutral-4 border border-white/10 rounded-lg h-11 w-52 flex items-center justify-center text-brand-gray-2 font-bold cursor-pointer'>
        Подписаться
        </button>
      </div>
    </div>
  )
}

export default BonusSocialCard