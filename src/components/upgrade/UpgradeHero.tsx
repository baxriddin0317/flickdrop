"use client"
import { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { HeroLeftBottom, HeroRightBottom, UpgradeIcon2 } from '../icons'
import { HeroLeft, HeroProgress, HeroRight, useAnimatedProgress } from './HeroProgress'
import { Span } from 'next/dist/trace'

type UpgradeState = 'ready' | 'win' | 'lose' | 'disabled'

const UpgradeHero = () => {
  const [state, setState] = useState<UpgradeState>('ready')
  const precent = 20
  const animatedPrecent = useAnimatedProgress(precent)

  const handleUpgrade = () => {
    if (state === 'ready') {
      setState('win')
    } else if (state === 'win') {
      setState('lose')
    } else if (state === 'lose') {
      setState('disabled')
    } else {
      setState('ready')
    }
  }   


  return (
    <>
      <div className=" h-[800px] mx-auto relative z-0">
        {state === 'win' ? (
          <Image className='absolute w-full object-cover h-[1231px] left-0 -z-10' src={'/imgs/upgrade-win.png'} alt='' fill />
        ) : state=='lose' ? (
          <Image className='absolute w-full object-cover h-[1231px] left-0 -z-10' src={'/imgs/upgrade-lose.png'} alt='' fill />
        ) : (
          <Image className='absolute w-full object-cover h-[1231px] left-0 -z-10' src={'/imgs/upgrade-default.png'} alt='' fill />
        )}
        <div className='relative z-10 pt-6 translate-y-14'>
          <h2 className='uppercase text-center font-bold text-4xl bg-linear-to-b from-[#718EC5] to-[#9CBCFB] bg-clip-text text-transparent'>upgrade</h2>
          
          <div className='flex items-center justify-center py-6'>
            <div className='relative translate-x-[68px] z-0'>
              <span className='absolute left-14 top-7 text-sm text-brand-gray-2 font-medium'>Ваш предмет</span>
              <HeroLeft state={state} />
              <span className='hidden 2xl:block absolute bottom-7 -z-10 translate-y-full left-1/2 -translate-x-1/2'><HeroLeftBottom /></span>
              <Image className='absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2' src={'/gun-img.png'} alt='' width={210} height={157} />
              <div className={clsx(
                "flex flex-col items-end justify-end",
                "absolute z-10 right-28 bottom-14 max-w-[109px] w-full"
              )}>
                <p className="text-brand-gray-2 line-clamp-1 text-xs font-medium text-ellipsis">Specialist Gloves</p>
                <p className="text-white line-clamp-1 text-sm font-bold text-ellipsis">Lt. Commander</p>
                <div className="flex items-center gap-1.5">
                  <span className='flex bg-brand-yellow items-center justify-center size-4 rounded-full text-brand-dark font-medium text-[10px]'>$</span>
                  <span className="text-sm font-bold text-white">1052.52</span>
                </div>
              </div>
            </div>
            <div className='relative z-20 translate-y-[13px]'>
              <HeroProgress state={state} progress={precent} />
              <div className='absolute flex flex-col items-center justify-center top-1/2 left-1/2 -translate-y-1/2 -mt-4 ml-0.5 -translate-x-1/2'>
                <p className='text-center text-brand-gray-2 text-sm font-medium'>{state == 'win' ? 'Вы выиграли!' : state == 'lose' ? 'Вы проиграли Попробуйте еще!' : (<span>Шанс <br /> выигрыша</span>)}</p>
                <p className={clsx(
                  ' text-[46px] font-bold text-center ',
                  state == 'win' ? 'text-brand-green text-shadow-[0_4px_36px_rgba(27,76,42,0.50)]' : state == 'lose' ? 'text-brand-red text-shadow-[0_4px_36px_rgba(27,76,42,0.50)]' : 'text-brand-blue-2 text-shadow-[0_4px_36px_rgba(98,183,255,0.50)]'
                )}>
                {Math.round(animatedPrecent)}%
                </p>
              </div>
            </div>
            <div className='relative -translate-x-[70px] -translate-y-0.5'>
              <span className='absolute right-14 top-7 text-sm text-brand-gray-2 font-medium'>Апгрейд</span>
              <HeroRight state={state} />
              <span className='hidden 2xl:block absolute bottom-7 -z-10 translate-y-full right-1/2 translate-x-1/2'><HeroRightBottom /></span>
              <Image className='absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2' src={'/gun-img.png'} alt='' width={210} height={157} />
              <div className={clsx(
                "flex flex-col",
                "absolute z-10 left-24 bottom-[53px] max-w-[109px] w-full"
              )}>
                <p className="text-brand-gray-2 line-clamp-1 text-xs font-medium text-ellipsis">Specialist Gloves</p>
                <p className="text-white line-clamp-1 text-sm font-bold text-ellipsis">Lt. Commander</p>
                <div className="flex items-center gap-1.5">
                  <span className='flex bg-brand-yellow items-center justify-center size-4 rounded-full text-brand-dark font-medium text-[10px]'>$</span>
                  <span className="text-sm font-bold text-white">1052.52</span>
                </div>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-center mt-5'>
            <button 
              className={clsx(
                'flex items-center justify-center gap-2.5 px-7 py-4 h-full uppercase font-bold  cursor-pointer',
                state == 'disabled' ? "bg-brand-disabled! [&>svg]:fill-brand-gray-2 rounded-[10px] text-brand-gray-2" : "btn [&>svg]:fill-brand-dark text-brand-dark",
              )} 
              type='button'
              onClick={handleUpgrade}
            >
              <UpgradeIcon2 />
              Upgrade
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default UpgradeHero