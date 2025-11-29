"use client"
import { useState, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import clsx from 'clsx'
import 'swiper/css'
import 'swiper/css/free-mode'
import GunCard from '../cards/GunCard'

type FilterType = 'all' | 'top'

interface WeaponItem {
  id: number
  name: string
  type: string
  price: string
  image: string
  bgColor: string
}

const weaponItems: WeaponItem[] = [
  {
    id: 1,
    name: 'Specialist Gloves',
    type: 'Lt. Commander',
    price: '1052.52',
    image: '/gun.png',
    bgColor: '#FF0000'
  },
  {
    id: 2,
    name: 'Specialist Gloves',
    type: 'Lt. Commander',
    price: '1052.52',
    image: '/gun.png',
    bgColor: '#0051ff'
  },
  {
    id: 3,
    name: 'Specialist Gloves',
    type: 'Lt. Commander',
    price: '1052.52',
    image: '/gun.png',
    bgColor: '#DD00FF'
  },
  {
    id: 4,
    name: 'Specialist Gloves',
    type: 'Lt. Commander',
    price: '1052.52',
    image: '/gun.png',
    bgColor: '#FF8800'
  },
  {
    id: 5,
    name: 'Specialist Gloves',
    type: 'Lt. Commander',
    price: '1052.52',
    image: '/gun.png',
    bgColor: '#FF006F'
  },
  {
    id: 6,
    name: 'Specialist Gloves',
    type: 'Lt. Commander',
    price: '1052.52',
    image: '/gun.png',
    bgColor: '#FF0000'
  },
  {
    id: 7,
    name: 'Specialist Gloves',
    type: 'Lt. Commander',
    price: '1052.52',
    image: '/gun.png',
    bgColor: '#0051ff'
  },
  {
    id: 8,
    name: 'Specialist Gloves',
    type: 'Lt. Commander',
    price: '1052.52',
    image: '/gun.png',
    bgColor: '#DD00FF'
  },
  {
    id: 9,
    name: 'Specialist Gloves',
    type: 'Lt. Commander',
    price: '1052.52',
    image: '/gun.png',
    bgColor: '#FF8800'
  }
]

const WeaponSlider = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('top')
  const [items, setItems] = useState<WeaponItem[]>(weaponItems)
  const [newlyAddedId, setNewlyAddedId] = useState<number | null>(null)
  const itemIdCounter = useRef(weaponItems.length + 1)

  // Yangi item qo'shish funksiyasi
  const addNewItem = () => {
    const newItem: WeaponItem = {
      id: itemIdCounter.current++,
      name: 'Specialist Gloves',
      type: 'Lt. Commander',
      price: '1052.52',
      image: '/gun.png',
      bgColor: ['#FF0000', '#0051ff', '#DD00FF', '#FF8800', '#FF006F'][Math.floor(Math.random() * 5)]
    }
   
    setItems(prevItems => [newItem, ...prevItems])
    setNewlyAddedId(newItem.id)
    
    setTimeout(() => {
      setNewlyAddedId(null)
    }, 800)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      addNewItem()
    }, 7000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='max-w-[1728px] mx-auto px-1.5 lg:px-8'>
      <div className="w-full overflow-hidden relative bg-[#101217] rounded-20 border border-white/5 shadow-[0_0_13.3px_0_rgba(0,0,0,0.30)_inset] py-1.5 px-2.5 lg:p-2.5 z-0">
        <div className="absolute z-20 left-2.5 flex flex-col">
          <button
            onClick={() => setActiveFilter('all')}
            className={clsx(
              'flex items-center border justify-center h-10 w-14 rounded-t-lg font-medium transition-all cursor-pointer',
              activeFilter === 'all'
                ? 'bg-brand-neutral-3 text-white border-white/10  shadow-[0_0_13.3px_0_rgba(128,168,255,0.12)_inset]'
                : 'bg-brand-disabled text-brand-gray-2 hover:text-white border-brand-disabled'
            )}
          >
            All
          </button>
          <button
            onClick={() => setActiveFilter('top')}
            className={clsx(
              'flex items-center border justify-center h-10 w-14 rounded-b-lg font-medium transition-all cursor-pointer',
              activeFilter === 'top'
                ? 'bg-brand-neutral-3 text-white border-white/10 shadow-[0_0_13.3px_0_rgba(128,168,255,0.12)_inset]'
                : 'bg-brand-disabled text-brand-gray-2 hover:text-white border-brand-disabled'
            )}
          >
            Top
          </button>
        </div>

        <div className='absolute right-0 top-0 z-20 h-full w-[72px] lg:w-[97px] bg-[linear-gradient(270deg,#101217_0%,rgba(16,18,23,0.00)_100%)]'></div>

        <div 
          className="relative weapon-slider-container"
          onWheel={(e) => e.preventDefault()}
          onTouchMove={(e) => e.preventDefault()}
          onMouseDown={(e) => e.preventDefault()}
        >
          <Swiper
            modules={[FreeMode]}
            freeMode={true}
            slidesPerView="auto"
            spaceBetween={4}
            className="weapon-swiper"
            allowTouchMove={false}
            allowSlideNext={false}
            allowSlidePrev={false}
            simulateTouch={false}
            touchStartPreventDefault={true}
            touchMoveStopPropagation={true}
            preventClicks={false}
            preventClicksPropagation={false}
            onWheel={(e) => e.preventDefault()}
          >
            {items.map((item) => (
              <SwiperSlide 
                key={item.id} 
                className={clsx(
                  "w-auto!",
                  newlyAddedId === item.id && "weapon-slide-new",
                  newlyAddedId !== null && newlyAddedId !== item.id && "weapon-slide-shift"
                )}
              >
                <GunCard id={item.id} bgColor={item.bgColor} name={item.name} type={item.type} image={item.image} price={item.price} />
              </SwiperSlide>
            ))}
            {/* Extra slide to allow scrolling to edge */}
            <SwiperSlide className="w-8!"></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default WeaponSlider

