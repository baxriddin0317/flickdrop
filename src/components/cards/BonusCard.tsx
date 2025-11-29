import { useEffect, useState } from "react";
import Image from "next/image";

interface BonusCardProps {
  preview: string;
  name: string;
  value: string;
  date_ends: Date;
  onClick: () => void;
  color: string;
  btnColor: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const BonusCard = ({
  preview,
  name,
  value,
  date_ends,
  onClick,
  color,
  btnColor
}: BonusCardProps) => {
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
      className="relative p-7 w-fit rounded-[24px] bg-gradient-to-br from-[#181b26] from-40% to-80%"
      style={{
        backgroundImage: `linear-gradient(to bottom right, #181b26 40%, ${color} 80%)`,
      }}
    >
      <div className="font-family-gilroy text-4xl text-white leading-11 font-extrabold">
        {value}
      </div>
      <h3 className="mt-4 font-family-gilroy text-[22px] font-medium text-[#768298]">
        {name}
      </h3>
      <h5 className="mt-9 font-family-gilroy text-[18px] font-medium leading-[22px] text-[#768298]">
        Time to receive
      </h5>
      <div className="mt-2.5 flex items-center gap-3">
        <div className="py-3 px-6 border border-[#232736] border-solid rounded-lg bg-[#1f2230] flex items-center">
          <span className="font-family-gilroy text-[14px] font-bold leading-[18px] text-white">
            {formatNumber(timeLeft.days)}
          </span>
          <span className="mx-2.5 font-family-helvetica text-[14px] leading-[10px] text-[#768298]">
            :
          </span>
          <span className="font-family-gilroy text-[14px] font-bold leading-[18px] text-white">
            {formatNumber(timeLeft.hours)}
          </span>
          <span className="mx-2.5 font-family-helvetica text-[14px] leading-[10px] text-[#768298]">
            :
          </span>
          <span className="font-family-gilroy text-[14px] font-bold leading-[18px] text-white">
            {formatNumber(timeLeft.minutes)}
          </span>
          <span className="mx-2.5 font-family-helvetica text-[14px] leading-[10px] text-[#768298]">
            :
          </span>
          <span className="font-family-gilroy text-[14px] font-bold leading-[18px] text-white">
            {formatNumber(timeLeft.seconds)}
          </span>
        </div>
        <button
          className="py-3 px-7 rounded-lg font-family-gilroy text-black font-medium transition-all linear cursor-pointer"
          style={{ backgroundColor: btnColor }}
          onMouseEnter={(e) => e.currentTarget.style.filter = 'brightness(0.9)'}
          onMouseLeave={(e) => e.currentTarget.style.filter = 'brightness(1)'}
          onClick={onClick}
        >
          get a bonus
        </button>
      </div>
      <Image
        className="absolute top-[-37px] right-0"
        src={preview}
        alt={name}
        width={200}
        height={200}
      />
    </div>
  );
};

export default BonusCard;
