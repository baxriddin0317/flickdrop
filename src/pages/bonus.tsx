import BonusGiftCard from "@/components/bonus/BonusGiftCard"
import BonusSocialCard from "@/components/bonus/BonusSocialCard"
import CardShape from "@/components/bonus/CardShape"
import { BonusBg1 } from "@/components/icons"
import clsx from "clsx"
import { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import WinnersList from "@/components/bonus/WinnersList"

const Bonus = () => {
  const textRef = useRef<HTMLParagraphElement>(null)
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (textRef.current) {
      const textToCopy = textRef.current.textContent || ""
      try {
        await navigator.clipboard.writeText(textToCopy)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (err) {
        console.error("Failed to copy text:", err)
      }
    }
  }
  const giftCardData = [
    {
      id: 1,
      className: "h-[290px]",
      IconColor: "#003CFF6E",
      ImageUrl: "/imgs/gift-1.png",
      deadlineDays: 3,
      color: "#003CFF",
    },
    {
      id: 2,
      className: "h-[290px]",
      IconColor: "#FF00006E",
      ImageUrl: "/imgs/gift-2.png",
      deadlineDays: 4,
      color: "#FF0000",
    },
    {
      id: 3,
      className: "h-[290px]",
      IconColor: "#00FFE16E",
      ImageUrl: "/imgs/gift-3.png",
      deadlineDays: 2,
      color: "#00FFE1",
    },
  ]

  return (
    <>
      <section className="max-w-[1728px] mx-auto px-1.5 lg:px-8 pt-7 space-y-2.5">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-2.5">
          <CardShape className="h-[283px] md:h-[243px]" IconColor="#FF00D06E" imgUrl="/imgs/bonus-1.png">
            <h2 className="text-white text-xl font-bold line-clamp-2 mb-5 w-2/3 md:w-auto">Активируй промокод и бонус твой!</h2>
            <p className="text-brand-gray-2 text-sm xl:text-base font-medium w-2/3 md:w-auto max-w-[454px]">Ищите секретные коды в наших социальных сетях и рассылках, вводите в поле ниже и получайте бонусы и бесплатные кейсы</p>
            <div className="flex items-center mt-auto gap-1.5">
              <input 
                type="text" 
                className={clsx(
                "text-white text-sm xl:text-base font-medium bg-brand-neutral-4 border border-white/10 rounded-lg h-11 px-2.5",
                "placeholder:text-brand-gray-2 shadow-[0_0_14.721px_0_rgba(0,0,0,0.06)_inset] outline-none",
                )}
                placeholder="Введите код"
              />
              <button className="btn text-brand-dark px-4 h-11 rounded-lg font-bold cursor-pointer">Активировать</button>
            </div>
          </CardShape>
          <CardShape className="h-[283px] md:h-[243px]" IconColor="#1E3797" imgUrl="/imgs/bonus-2.png">
            <h2 className="text-white text-xl font-bold line-clamp-2 mb-5 w-2/3 md:w-auto">Добавьте в ник FlickerDrop.gg</h2>
            <p className="text-brand-gray-2 text-sm font-medium max-w-[454px] w-2/3 md:w-auto">Получайте 2 ₽ каждый день, пятикратный бонус через 10 дней и 10% к каждому пополнению.</p>
            <p className="text-brand-yellow text-sm font-medium max-w-[454px] mt-2 w-2/3 md:w-auto">Нужен 5 уровень Steam и пополнение минимум на 50 ₽ за последние 7 дней</p>
            <div className="flex items-center mt-auto gap-1.5">
              <div className="h-11 w-full flex items-center justify-between bg-brand-neutral-4 border border-white/10 rounded-lg gap-11 p-1.5 pl-5">
                <p ref={textRef} className="text-brand-gray-2 line-clamp-1 text-ellipsis font-bold text-sm">FlickerDrop</p>
                <button 
                  onClick={handleCopy}
                  className="flex items-center rounded-lg border border-white/10 bg-brand-neutral-4 text-xxs md:text-sm font-medium text-brand-gray-3 px-2.5 h-9 cursor-pointer transition-colors hover:bg-brand-gray-2/25" 
                  type="button"
                >
                  {copied ? "Скопировано!" : "Копировать"}
                </button>
              </div>
              <button className="bg-brand-green! text-white cursor-pointer px-4 h-11 rounded-lg font-bold border border-white/10">Проверить</button>
            </div>
          </CardShape>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
          <BonusSocialCard IconColor="#0084FF59" bonusPrice={150} imgUrl="/imgs/bonus-tg.png" socialName="TG" />
          <BonusSocialCard IconColor="#A100FF6E" bonusPrice={130} imgUrl="/imgs/bonus-discord.png" socialName="Discord" />
          <BonusSocialCard IconColor="#FF00006E" bonusPrice={160} imgUrl="/imgs/bonus-youtube.png" socialName="YouTube" />
        </div>

        <div className="w-full hidden md:grid grid-cols-1 lg:grid-cols-2 xl2:grid-cols-3 gap-5 lg:gap-2.5">
          {giftCardData.map((card) => (
            <BonusGiftCard key={card.id} {...card} />
          ))}
        </div>

        <div className="w-full md:hidden bonus-gift-swiper-container">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            spaceBetween={20}
            slidesPerView={1}
            loop
            className="pb-7"
          >
            {giftCardData.map((card) => (
              <SwiperSlide key={card.id}>
                <BonusGiftCard {...card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ==== */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl2:grid-cols-3 gap-2.5">
          <WinnersList />
          <WinnersList />
          <WinnersList />
        </div>
      </section>
    </>
  )
}

export default Bonus