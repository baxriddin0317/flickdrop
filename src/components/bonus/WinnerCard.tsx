import { itemI } from '@/data/upgradeSkins'
import clsx from 'clsx'
import Image from 'next/image'
import { WinnerGunIcon } from '../icons'

interface props{
  item: itemI
}

const WinnerCard = ({item}: props) => {
  return (
    <div className={clsx(
      "flex items-center justify-between w-full",
      "border-t border-b border-white/10 px-3.5 py-2 lg:py-3 lg:px-7",
      item.id % 2 !== 0 ? "bg-[linear-gradient(270deg,#181B27_0%,#232940_100%)]!" : "bg-transparent"
    )}>
      <div className='flex items-center gap-3.5 md:gap-6'>
        <div className='relative size-12 md:size-[66px] rounded-2xl overflow-hidden'>
          <Image src={item.profileImg} alt='' fill />
        </div>
        <div className='flex flex-col h-full justify-between'>
          <div>
            <h3 className='text-sm md:text-base text-white font-medium'>{item.name}</h3>
            <p className='text-xs font-medium text-brand-gray-2 opacity-45'>{item.date} {item.time}</p>
          </div>
          <div className='flex items-center text-sm md:text-base gap-1 h-3.5 leading-3.5! font-medium mt-3 md:mt-3.5'>
            <p className='text-brand-gray-2'>{item.gunName}</p>
            <span className='block h-full w-0.5 bg-brand-gray-2'></span>
            <p className='text-white font-bold'>Searing Rage</p>
          </div>
        </div>
      </div>

      {/* img */}
      <div className='relative flex right-12 sm:right-16 z-0'>
        <span className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10'>
          <WinnerGunIcon />
        </span>
        <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20 h-12 w-24 sm:w-[140px] sm:h-[70px]'>
          <Image className='size-full' src={item.imgUrl} alt='' fill />
        </div>
      </div>
    </div>
  )
}

export default WinnerCard