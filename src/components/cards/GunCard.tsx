import clsx from "clsx"
import Image from "next/image"

interface props {
  id: number;
  bgColor: string;
  name: string;
  type: string;
  price: string;
  image: string
}

const GunCard = ({id, bgColor, name, price, type, image}: props) => {
  return (
    <div
      className={clsx(
        'relative min-w-[173px] w-[231px] h-[80px] overflow-hidden rounded-[10px] z-0',
        'group',
        'bg-brand-disabled border border-white/5 shadow-[0_0_31.5px_0_rgba(0,0,0,0.55)_inset]'
      )}
    >
      <span className={clsx(
        "absolute z-0 block w-[280px] h-[90px] left-1/2 -translate-x-1/2",
        "group-hover:opacity-0 transition-all duration-300 ease-[cubic-bezier(0.310,-0.105,0.430,1.400)]"
      )}>
        <svg xmlns="http://www.w3.org/2000/svg" width={280} height={90} viewBox="0 0 231 79" fill="none">
          <g filter="url(#filter0_f_5771_434)">
            <path d="M-14.0658 53.517C-18.178 36.3986 0.236332 22.7019 15.4486 31.5641L79.3333 68.7813C82.3897 70.5619 85.8636 71.5 89.4009 71.5H217.099C229.531 71.5 234.871 87.275 224.996 94.8267C222.729 96.5606 219.953 97.5 217.099 97.5H12.2645C3.01834 97.5 -5.02254 91.162 -7.18225 82.1716L-14.0658 53.517Z" fill={bgColor} fillOpacity="0.43" />
          </g>
          <defs>
            <filter id="filter0_f_5771_434" x="-96.3501" y="-52.9139" width="408.174" height="232.114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="40.85" result="effect1_foregroundBlur_5771_434" />
            </filter>
          </defs>
        </svg>
      </span>

      <div className={clsx(
        "absolute z-10 left-2.5 top-1 w-[92px] h-[69px] flex items-center justify-center",
        "group-hover:rotate-23 group-hover:w-12 group-hover:h-9 group-hover:opacity-20 group-hover:left-[100px] transition-all duration-300 ease-[cubic-bezier(0.310,-0.105,0.430,1.400)]"
      )}>
        <Image className="object-contain" src={image} alt="" fill />
      </div>
      <div className={clsx(
        "absolute z-10 right-2.5 top-1/2 -translate-y-1/2 max-w-[109px] w-full",
        "group-hover:-top-full transition-all duration-300 ease-[cubic-bezier(0.310,-0.105,0.430,1.400)]"
      )}>
        <p className="text-brand-gray-2 line-clamp-1 text-xs font-medium text-ellipsis">{name}{id}</p>
        <p className="text-white line-clamp-1 text-sm font-bold text-ellipsis">{type}</p>
        <div className="flex items-center gap-1.5 mt-2">
          <span className='flex bg-brand-yellow items-center justify-center size-4 rounded-full text-brand-dark font-medium text-xs'>$</span>
          <span className="text-sm font-bold text-white">{price}</span>
        </div>
      </div>

      <span className={clsx(
        "absolute z-10 block w-[280px] h-[90px] top-full left-1/2 -translate-x-1/2",
        "group-hover:-top-2 transition-all duration-300 ease-[cubic-bezier(0.310,-0.105,0.430,1.400)]"
      )}>
        <svg xmlns="http://www.w3.org/2000/svg" width={280} height={90} viewBox="0 0 231 79" fill="none">
          <g filter="url(#filter0_f_5771_434)">
            <path d="M-14.0658 53.517C-18.178 36.3986 0.236332 22.7019 15.4486 31.5641L79.3333 68.7813C82.3897 70.5619 85.8636 71.5 89.4009 71.5H217.099C229.531 71.5 234.871 87.275 224.996 94.8267C222.729 96.5606 219.953 97.5 217.099 97.5H12.2645C3.01834 97.5 -5.02254 91.162 -7.18225 82.1716L-14.0658 53.517Z" fill="#FF0000" fillOpacity="0.43" />
          </g>
          <defs>
            <filter id="filter0_f_5771_434" x="-96.3501" y="-52.9139" width="408.174" height="232.114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="40.85" result="effect1_foregroundBlur_5771_434" />
            </filter>
          </defs>
        </svg>
      </span>

      <div className={clsx(
        "absolute z-10 left-0 top-full w-[133px] h-[133px] flex items-center justify-center",
        "group-hover:-top-5 transition-all duration-300 ease-[cubic-bezier(0.310,-0.105,0.430,1.400)]"
      )}>
        <Image className="object-contain" src={'/imgs/gun-1.png'} alt="" fill />
      </div>
      <div className={clsx(
        "absolute flex flex-col items-end gap-1 z-10 right-2.5 top-full max-w-[109px] w-full",
        "group-hover:top-1/2 group-hover:-translate-y-1/2 transition-all duration-300 ease-[cubic-bezier(0.310,-0.105,0.430,1.400)]"
      )}>
        <div className='relative overflow-hidden rounded-[10px] size-11'>
          <Image src={'/profile.jpg'} fill alt='profile' />
        </div>
        <p className="text-white line-clamp-1 text-right text-sm font-bold text-ellipsis">JuicyART</p>
      </div>
    </div>
  )
}

export default GunCard