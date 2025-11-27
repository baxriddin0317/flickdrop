import { useEffect, useState } from "react";
import Image from "next/image";

interface GiveawayProps {
  preview: string;
  type?: string;
  name: string;
  currency?: string;
  price: number;
  date_ends: Date;
  onClick: () => void;
  color: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Giveaway = ({
  preview,
  type,
  name,
  currency,
  price,
  date_ends,
  onClick,
  color,
}: GiveawayProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, "0");
  };

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const difference = new Date(date_ends).getTime() - new Date().getTime();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [date_ends]);

  return (
    <div
      className="relative p-7 w-fit min-w-[547px] overflow-hidden rounded-[24px] bg-gradient-to-br from-[#181b26] from-40% to-80%"
      style={{
        backgroundImage: `linear-gradient(to bottom right, #181b26 40%, ${color} 80%)`,
      }}
      onClick={onClick}
    >
      <div
        className="
    font-family-gilroy
    text-[36px]
    font-bold
    italic
    leading-[43px]
    text-left
    bg-gradient-to-r from-[#ffffff] to-[#999999]
    bg-clip-text 
    text-transparent
  "
      >
        Hourly
      </div>

      <div
        className="
    font-family-gilroy
    text-[24px]
    font-normal
    leading-[29px]
    text-left
    text-white
  "
      >
        Gifts
      </div>
      {type && (
        <h3 className="mt-8 font-family-gilroy text-[16px] leading-[19px] font-medium text-[#768298]">
          {type}
        </h3>
      )}
      <h3 className="mt-1 font-family-gilroy text-[18px] leading-[22px] font-medium text-white">
        {name}
      </h3>
      <div className="mt-5 flex items-center w-fit">
        <span className="flex items-center justify-center min-w-[18px] h-[18px] mr-[5px] bg-[#768298] rounded-[50%] text-[12px]">
          {currency}
        </span>
        <span className="font-family-gilroy text-[16px] leading-[19px] font-bold text-white">{price}</span>
      </div>
      <div className="mt-5 flex items-center gap-3">
        <div className="py-2 px-3 border-transparent rounded-[10px] bg-[#181b27] flex items-center">
          <div className="inline-flex flex-col items-center font-family-gilroy text-[14px] font-bold leading-[18px] text-white">
            <span>{formatNumber(timeLeft.days)}</span>
            <span className="text-[13px] leading-[13px] font-normal text-[#768298]">
              Days
            </span>
          </div>
          <span className="mx-2.5 font-family-helvetica text-[14px] leading-[10px] text-[#768298]">
            :
          </span>
          <div className="inline-flex flex-col items-center font-family-gilroy text-[14px] font-bold leading-[18px] text-white">
            <span>{formatNumber(timeLeft.hours)}</span>
            <span className="text-[13px] leading-[13px] font-normal text-[#768298]">
              Hours
            </span>
          </div>
          <span className="mx-2.5 font-family-helvetica text-[14px] leading-[10px] text-[#768298]">
            :
          </span>
          <div className="inline-flex flex-col items-center font-family-gilroy text-[14px] font-bold leading-[18px] text-white">
            <span>{formatNumber(timeLeft.minutes)}</span>
            <span className="text-[13px] leading-[13px] font-normal text-[#768298]">
              Min
            </span>
          </div>
          <span className="mx-2.5 font-family-helvetica text-[14px] leading-[10px] text-[#768298]">
            :
          </span>
          <div className="inline-flex flex-col items-center font-family-gilroy text-[14px] font-bold leading-[18px] text-white">
            <span>{formatNumber(timeLeft.seconds)}</span>
            <span className="text-[13px] leading-[13px] font-normal text-[#768298]">
              Sec
            </span>
          </div>
        </div>
      </div>
      <Image
        className="absolute top-[6px] right-[-76px]"
        src={preview}
        alt={name}
        width={424}
        height={318}
      />
    </div>
  );
};

export default Giveaway;
