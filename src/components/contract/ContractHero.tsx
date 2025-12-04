"use client"
import clsx from 'clsx'
import Image from 'next/image'
import { useState, useMemo, useEffect } from 'react'
import { ContractItem } from '@/data/upgradeSkins'
import { ContractBigColorIcon, Hexagon2Icon, HexagonEmptyIcon, HexagonIcon } from '../icons'

interface ContractHeroProps {
  items?: ContractItem[]
  totalPrice?: number
  minReward?: number
  maxReward?: number
}

// Hook to know if viewport is xl or larger (Tailwind's default: 1280px)
const useIsXl = () => {
  const [isXl, setIsXl] = useState(false)

  useEffect(() => {
    const check = () => {
      if (typeof window !== 'undefined') {
        setIsXl(window.innerWidth >= 1280)
      }
    }

    check()
    window.addEventListener('resize', check)

    return () => {
      window.removeEventListener('resize', check)
    }
  }, [])

  return isXl
}

const ContractHero = ({ 
  items = [], 
  totalPrice = 1052.52,
  minReward = 10,
  maxReward = 200
}: ContractHeroProps) => {
  const [state, setState] = useState<'signed' | 'unsigned'>('unsigned');
  const isXl = useIsXl();

  const handleToggle = () => {
    if(state === "signed"){
      setState("unsigned");
    }else{
      setState("signed");
    }
  }
  
  const slots = useMemo(() => {
    const slotsArray: (ContractItem | { isEmpty: true; slotNumber: number })[] = []
    
    for (let i = 0; i < 10; i++) {
      if (i < items.length) {
        slotsArray.push(items[i])
      } else {
        slotsArray.push({ isEmpty: true, slotNumber: i + 1 })
      }
    }
    
    return slotsArray
  }, [items])

  const itemCount = items.length

  const topCount = isXl ? 3 : 2

  const leftTopSlots = slots.slice(0, topCount)
  const leftBottomSlots = slots.slice(topCount, 5)

  const rightTopSlots = slots.slice(5, 5 + topCount)
  const rightBottomSlots = slots.slice(5 + topCount, 10)

  return (
    <>
      <div className="xl2:h-[800px] mx-auto relative z-0">
        <Image 
          className='absolute top-0 opacity-20 lg:-translate-y-48 w-full lg:object-cover h-[342px]! md:h-[450px]! lg:h-auto! left-0 -z-10 mix-blend-screen' 
          src={'/contract/contract-bg.png'} 
          alt='' 
          fill 
        />

        <div className='relative z-10 pt-8 lg:pt-16 h-full overflow-hidden'>
          <h2 className={clsx(
            "hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 z-0",
            "uppercase text-[206px] leading-40 font-black",
            "bg-[linear-gradient(180deg,rgba(113,142,197,0.08)_5.08%,rgba(156,188,251,0.00)_94.92%)] bg-clip-text text-transparent"
          )}>Contract</h2>
          
          <div className='relative z-0 mx-auto max-w-[1353px]'>
            {/* Left side - 5 slots */}
            <div
              className={clsx(
                "flex flex-col",
                "xl:absolute left-2 xl2:-left-5 top-10 z-20"
              )}
            >
              <div className="flex gap-3 lg:gap-6 justify-center">
                {leftTopSlots.map((slot, index) => (
                  <HexagonSlot key={index} slot={slot} state={state} />
                ))}
              </div>
              <div className="flex gap-3 lg:gap-6 justify-center">
                {leftBottomSlots.map((slot, index) => (
                  <HexagonSlot key={index + topCount} slot={slot} state={state} />
                ))}
              </div>
            </div>

            {/* Right side - 5 slots */}
            <div
              className={clsx(
                "flex flex-col",
                "xl:absolute right-2 xl2:-right-6 2xl:-right-10 top-10 z-20"
              )}
            >
              <div className="flex gap-3 lg:gap-6 justify-center">
                {rightTopSlots.map((slot, index) => (
                  <HexagonSlot key={index + 5} slot={slot} state={state} />
                ))}
              </div>
              <div className="flex gap-3 lg:gap-6 justify-center">
                {rightBottomSlots.map((slot, index) => (
                  <HexagonSlot key={index + 5 + topCount} slot={slot} state={state} />
                ))}
              </div>
            </div>
            <Image className="hidden xl2:block absolute left-1/2 -translate-x-1/2 ml-8 -translate-y-3 min-w-[1353px] object-contain z-0" src={"/contract/contract-hero.png"} alt="contract hero" width={1352} height={436} />
            <Image className="xl2:hidden mx-auto min-w-[298px] translate-y-10 object-contain" src={"/contract/contract-hero-mobile.png"} alt="contract hero" width={298} height={392} />
          </div>


          {/* Center info card */}
          <div className="relative z-20 -translate-y-full xl2:translate-y-0 w-44 mx-auto">
            {/* Counter */}
            <div className="font-medium text-brand-gray-2 line-clamp-1 text-center mt-4 xl2:mt-1">
              <span className='text-white'>{itemCount}</span>\10
            </div>

            {/* Card */}
            <div className="relative translate-y-2">
              {/* Icon */}
              <div className="flex justify-center">
                <ContractBigColorIcon />
              </div>

              {/* Text */}
              <div className="text-center text-white -translate-y-5">
                <p className="text-sm text-brand-gray-2">
                  {itemCount} предметов на:
                </p>
                <p className="text-xl font-bold text-white">
                  $ {totalPrice.toFixed(2)}
                </p>
                <p className="pt-2 text-xs text-brand-gray-2 mt-6">
                  Вы получите предмет на сумму:
                </p>
                <p className="text-lg line-clamp-1 text-white font-semibold mt-1.5">
                  от <span className='italic text-brand-green'>${minReward}</span> до <span className='italic text-brand-green'>${maxReward}</span>
                </p>
              </div>

              {/* Button */}
              <button
                type="button"
                onClick={handleToggle}
                className="btn w-full h-14 mt-2 xl2:mt-8 cursor-pointer"
              >
                Подписать
              </button>
            </div>
          </div>
          
        </div>
      </div> 
    </>
  )
}

// Hexagon Slot Component
interface HexagonSlotProps {
  slot: ContractItem | { isEmpty: true; slotNumber: number };
  state: 'signed' | 'unsigned';
}

const HexagonSlot = ({ slot, state }: HexagonSlotProps) => {
  const isFilled = !('isEmpty' in slot)
  
  return (
    <div className='relative w-[121px] h-[136px] md:w-[150px] md:h-[168px] flex items-center justify-center'>
      {/* Hexagon Shape */}
      {/* className='absolute inset-0 w-full h-full'  */}
      {isFilled ? state == "signed" ? <Hexagon2Icon /> : <HexagonIcon /> : <HexagonEmptyIcon />}
      
      {/* Content */}
      <div className='relative z-10 w-full h-full flex items-center justify-center'>
        {isFilled ? (
          <>
            {/* Item Image */}
            <div className='relative w-[90px] h-[68px] md:w-[112px] md:h-[84px]'>
              <Image
                src={slot.imgUrl}
                alt={`Item ${slot.id}`}
                fill
                className='object-cover'
              />
            </div>
          </>
        ) : (
          <span className='text-brand-gray-2 text-3xl md:text-4xl font-medium line-clamp-1'>{slot.slotNumber}</span>
        )}
      </div>
    </div>
  )
}

export default ContractHero
