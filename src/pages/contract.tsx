"use client"
import SkinCard from '@/components/cards/SkinCard'
import ContractHero from '@/components/contract/ContractHero'
import { Slider } from '@/components/ui/slider'
import { upgradeSkins, ContractItem } from '@/data/upgradeSkins'
import { useState, useMemo } from 'react'

const Contract = () => {
  const [priceRange, setPriceRange] = useState<number[]>([0, 1500])
  
  // Example contract items - in real app, this would come from state/props
  const contractItems: ContractItem[] = useMemo(() => [
    { id: 1, imgUrl: '/contract/gun-img.png' },
    { id: 2, imgUrl: '/contract/knife.png' },
    { id: 3, imgUrl: '/contract/m4.png' },
    { id: 4, imgUrl: '/contract/skin-1.png' },
    { id: 5, imgUrl: '/contract/ak.png' },
    { id: 6, imgUrl: '/contract/knife.png' },
    { id: 7, imgUrl: '/contract/ak.png' }
  ], [])

  return (
    <>
     <ContractHero 
       items={contractItems}
       totalPrice={1052.52}
       minReward={10}
       maxReward={200}
     />

     <div className="max-w-[1728px] mx-auto w-full relative z-10 px-1.5 lg:px-8 lg:mb-20 -translate-y-44">
      <div className="bg-brand-dark rounded-3xl overflow-hidden w-full">
        <div className="px-6 py-2.5 h-[66px] flex items-center justify-between border-b border-brand-gray-2">
          <h3 className="hidden lg:block text-brand-gray-2 text-ellipsis font-medium text-lg line-clamp-1">Contract</h3>
          <div className="flex items-stretch flex-row-reverse lg:flex-row w-full lg:w-auto gap-2 ">
              <div className="w-1/2 lg:w-[184px] h-11 rounded-lg bg-brand-neutral-4 border border-white/10 shadow-[0_0_14.721px_0_rgba(0,0,0,0.06)_inset] px-3 py-1.5 flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs font-medium tracking-wide text-brand-gray-2">
                  <span>{priceRange[0]} $</span>
                  <span>{priceRange[1]} $</span>
                </div>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  min={0}
                  max={1500}
                  step={10}
                  className="w-full **:data-[slot=slider-track]:-mt-3 **:data-[slot=slider-track]:bg-brand-dark **:data-[slot=slider-track]:h-0.5 **:data-[slot=slider-range]:bg-[#3C4152] **:data-[slot=slider-thumb]:size-2 **:data-[slot=slider-thumb]:bg-brand-gray-2 **:data-[slot=slider-thumb]:border-none **:data-[slot=slider-thumb]:shadow-none **:data-[slot=slider-thumb]:-mt-2.5"
                />
              </div>
              <div className="relative overflow-hidden w-1/2 lg:w-44 xl:w-[254px] h-11 rounded-lg bg-brand-neutral-4 border border-white/10 shadow-[0_0_14.721px_0_rgba(0,0,0,0.06)_inset] ">
                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                    <path d="M13.9995 14.6666C13.9117 14.6671 13.8248 14.6503 13.7435 14.6171C13.6623 14.584 13.5884 14.5351 13.5261 14.4733L9.52614 10.4733C9.4006 10.3478 9.33008 10.1775 9.33008 9.99996C9.33008 9.82243 9.4006 9.65216 9.52614 9.52663C9.65167 9.40109 9.82194 9.33057 9.99947 9.33057C10.177 9.33057 10.3473 9.40109 10.4728 9.52663L14.4728 13.5266C14.5353 13.5886 14.5849 13.6623 14.6187 13.7436C14.6526 13.8248 14.67 13.912 14.67 14C14.67 14.088 14.6526 14.1751 14.6187 14.2563C14.5849 14.3376 14.5353 14.4113 14.4728 14.4733C14.4105 14.5351 14.3366 14.584 14.2554 14.6171C14.1742 14.6503 14.0872 14.6671 13.9995 14.6666Z" fill="#768298" />
                    <path d="M6.66504 1.33325C9.61045 1.33325 11.9988 3.72089 11.999 6.66626C11.999 9.61178 9.61056 12.0002 6.66504 12.0002C3.71967 12.0001 1.33203 9.61167 1.33203 6.66626C1.33221 3.721 3.71978 1.33343 6.66504 1.33325ZM6.66602 2.66626C4.45696 2.66626 2.66615 4.45723 2.66602 6.66626C2.66602 8.8754 4.45688 10.6663 6.66602 10.6663C8.87515 10.6663 10.666 8.8754 10.666 6.66626C10.6659 4.45723 8.87507 2.66626 6.66602 2.66626Z" fill="#768298" />
                  </svg>
                </span>
                <input className="bg-transparent outline-none absolute size-full pl-9 pr-1 text-white placeholder:text-brand-gray-2 text-sm font-medium" type="text" placeholder="Search" />
              </div>
            </div>
        </div>

        <div className="h-[586px] relative p-6 pr-3 z-10">
          {upgradeSkins.length > 0 ? (
            <div className="overflow-y-scroll scroll-style grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-1 min-h-full h-full pr-3">
              {upgradeSkins.map((item) => (
                <SkinCard key={item.id} {...item} />
              ))}
            </div>
          ) : (
            <div className="min-h-full flex items-center justify-center gap-8 flex-col">
              <p className="text-brand-gray-2 lg:text-lg font-medium text-center">
              You don't have any items available yet. <br />
              Open cases and upgrade the item
              </p>
              <button 
                className=" px-5 py-3 lg:px-7 lg:py-4 uppercase font-bold btn cursor-pointer" 
                type='button'
              >
                OPEN cases
              </button>
            </div>
          )}
          {/* shape */}
          <div className="absolute bottom-0 left-0 w-full h-48 bg-[linear-gradient(180deg,rgba(19,21,33,0.00)_0%,#131521_80%)] z-20"></div>
        </div>
      </div>
     </div> 
    </>
  )
}

export default Contract
