"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { UpgradeIcon2 } from '../icons'
import { HeroLeft, HeroProgress, HeroRight, useAnimatedProgress } from './HeroSvgIcons'

type UpgradeState = 'ready' | 'win' | 'lose' | 'disabled'

const UpgradeHero = () => {
  const [state, setState] = useState<UpgradeState>('ready');
  const precent = 20
  const animatedPrecent = useAnimatedProgress(precent)
  const lg2Breakpoint = 1110;

  const [hasMounted, setHasMounted] = useState(false)
  const [isLg2Up, setIsLg2Up] = useState(
    () => (typeof window !== 'undefined' ? window.innerWidth >= lg2Breakpoint : false)
  )
  
  useEffect(() => {
    setHasMounted(true)
  }, [])

  useEffect(() => {
    if (!hasMounted) return
    const onResize = () => setIsLg2Up(window.innerWidth >= lg2Breakpoint)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [hasMounted])

  if (!hasMounted) {
    return null
  }

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
      <div className="md:h-[800px] mx-auto relative z-0">
        {state === 'win' ? (
          <Image className='absolute w-full lg:object-cover h-[342px]! md:h-[450px]! lg:h-[1231px] left-0 -z-10' src={'/imgs/upgrade-win.png'} alt='' fill />
        ) : state=='lose' ? (
          <Image className='absolute w-full lg:object-cover h-[342px]! md:h-[450px]! lg:h-[1231px] left-0 -z-10' src={'/imgs/upgrade-lose.png'} alt='' fill />
        ) : (
          <Image className='absolute w-full lg:object-cover h-[342px]! md:h-[450px]! lg:h-[1231px] left-0 -z-10' src={'/imgs/upgrade-default.png'} alt='' fill />
        )}
        <div className='relative z-10 lg2:pt-6 lg2:translate-y-14'>
          <h2 className='uppercase text-center font-bold text-4xl bg-linear-to-b from-[#718EC5] to-[#9CBCFB] bg-clip-text text-transparent'>upgrade</h2>
          
          <div className='flex flex-col lg2:flex-row items-center justify-center lg:py-6 overflow-hidden lg2:overflow-visible'>
            {isLg2Up && <div className='relative translate-x-[68px] z-0'>
              <HeroLeft state={state} />
            </div>}
            <div className='relative z-20 translate-y-4 lg2:translate-y-[13px]'>
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
            {isLg2Up && <div className='relative -translate-x-[70px] -translate-y-0.5'>
              <HeroRight state={state} />
            </div>}

            <div className='lg2:hidden scale-50 sm:scale-75 md:scale-100 flex items-center -translate-y-12 sm:translate-y-0 md:mt-5'>
              <div className='relative w-[390px] overflow-hidden lg2:w-auto translate-x-[68px] z-10'>
                <HeroLeft state={state} />
              </div>
              <div className='relative -translate-x-[70px]'>
                <HeroRight state={state} />
              </div>
            </div>
          </div>

          <div className='flex items-center justify-center -translate-y-24 sm:translate-y-0 md:mt-5'>
            <button 
              className={clsx(
                'flex items-center justify-center gap-2.5 px-7 py-4 h-full uppercase font-bold  cursor-pointer',
                state == 'disabled' ? "bg-brand-disabled! [&>svg]:fill-brand-gray-2 rounded-lg text-brand-gray-2" : "btn [&>svg]:fill-brand-dark text-brand-dark",
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