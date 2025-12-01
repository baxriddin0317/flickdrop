import React from 'react'
import { BonusBg1 } from '../icons'
import clsx from 'clsx'
import Image from 'next/image'

const CardShape = ({children, className, IconColor, imgUrl}: {children: React.ReactNode, className?: string, IconColor: string, imgUrl: string}) => {
  return (
    <div className={clsx("w-full relative rounded-3xl border border-white/10 bg-brand-disabled px-3.5 py-4 lg:py-6 lg:px-7", className)}>
      <div className="absolute right-0 top-0 w-full h-full overflow-hidden rounded-3xl">
        <span className="absolute bottom-0 right-0 w-full h-full"><BonusBg1 color={IconColor} /></span>
      </div>
      <div className='absolute bottom-0 right-0'>
        <Image className='w-[312px] h-[259px] lg:w-[405px] lg:h-[293px]' src={imgUrl} alt='card-img' width={405} height={293} />
      </div>
      <div className="relative flex flex-col items-start w-full h-full z-10">
        {children}
      </div>
    </div>
  )
}

export default CardShape