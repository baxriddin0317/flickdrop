"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import StatCard from "./StatCard"
import HighlightCard from "./HighlightCard"
import { CaseBigIcon, ContractBigIcon, UpgradeBigIcon } from "../icons"

const ProfileHead = () => {
  const [tradeUrl, setTradeUrl] = useState("")

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText()
      setTradeUrl(text)
    } catch (err) {
      console.error('Failed to paste:', err)
    }
  }

  return (
    <section className='max-w-8xl mx-auto w-full px-1.5 md:px-2 lg:px-8 2xl:px-2'>
      <div className="flex flex-col xl:flex-row justify-center w-full items-stretch bg-brand-dark-2 gap-2.5 rounded-[29px] border border-white/10 p-3.5 md:p-5">
        {/* info case */}
        <div className="flex items-stretch gap-4 h-[136px] md:h-auto">
          {/* img */}
          <div className="size-[122px] md:size-[163px] relative rounded-3xl overflow-hidden">
            <Image className="absolute object-cover size-full" src={'/profile/avatar.jpg'} alt="" fill />
          </div>
          {/* text */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-lg md:text-2xl font-bold text-white">JuicyArt</h3>
              <p className="text-brand-gray-2 text-xxs md:text-sm font-medium text-ellipsis line-clamp-1">ID: 92123821</p>
            </div>
            <div>
              <p className="text-sm md:text-lg font-semibold text-white">Ваш Trade URL</p>
              <p className="text-xxs md:text-base text-brand-gray-2 font-medium text-ellipsis line-clamp-1">
                Найти ссылку можно <Link className="text-brand-yellow underline text-ellipsis" href={'#'}>на сайте Steam</Link>
              </p>
            </div>
            <div className="h-8 md:h-11 w-full flex items-center bg-brand-neutral-4 border border-white/10 rounded-lg gap-2 md:py-2 px-1.5 md:pl-2.5 md:pr-5">
              <button 
                onClick={handlePaste}
                className="flex items-center rounded border border-dashed border-brand-gray-2 bg-brand-gray-2/15 text-xxs md:text-sm font-medium text-brand-gray-3 px-2.5 h-5 md:h-7 cursor-pointer transition-colors hover:bg-brand-gray-2/25" 
                type="button"
              >
                Вставить
              </button>
              <input 
                type="text"
                value={tradeUrl}
                onChange={(e) => setTradeUrl(e.target.value)}
                className="flex-1 text-xxs md:text-sm font-medium text-white placeholder:text-brand-gray-2 bg-transparent border-none outline-none"
                placeholder="steamcommunity.com/tradeo...."
              />
            </div>
          </div>
        </div>
        {/* cards */}
        <div className="flex items-center flex-col md:flex-row w-full gap-2.5">
          {/* === */}
          <div className="grid grid-cols-3 w-full gap-2.5 h-36 md:h-[163px]">
            <StatCard title="Cases" value="1582" icon={<CaseBigIcon />} />
            <StatCard title="Upgrade" value="421" icon={<UpgradeBigIcon />} />
            <StatCard title="Contract" value="32" icon={<ContractBigIcon />} />
          </div>
          {/* === */}
          <div className="grid grid-cols-2 w-full gap-2.5">
            <HighlightCard title="Cases" status="Best" imageUrl="/profile/ak-47.png" color="#3F83E9" />
            <HighlightCard title="Drop" status="Best" imageUrl="/profile/knife.png" color="#D23FE9" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfileHead