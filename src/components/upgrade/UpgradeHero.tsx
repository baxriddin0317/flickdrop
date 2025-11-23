"use client"
import { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { UpgradeIcon2 } from '../icons'

type UpgradeState = 'ready' | 'win' | 'lose' | 'disabled'

const UpgradeHero = () => {
  const [state, setState] = useState<UpgradeState>('ready')

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
    <div className="max-w-[1728px] h-[800px] mx-auto relative z-0">
      {state === 'win' ? (
        <Image className='absolute w-[1846px] h-[1231px] left-0 -top-64 -z-10' src={'/imgs/upgrade-win.png'} alt='' width={1846} height={1231} />
      ) : state=='lose' ? (
        <Image className='absolute w-[1846px] h-[1231px] left-0 -top-64 -z-10' src={'/imgs/upgrade-lose.png'} alt='' width={1846} height={1231} />
      ) : (
        <Image className='absolute w-[1846px] h-[1231px] left-0 -top-64 -z-10' src={'/imgs/upgrade-default.png'} alt='' width={1846} height={1231} />
      )}
      <div className='relative z-10 pt-6'>
        <h2 className='uppercase text-center font-bold text-4xl bg-linear-to-b from-[#718EC5] to-[#9CBCFB] bg-clip-text text-transparent'>upgrade</h2>

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
  )
}

export default UpgradeHero