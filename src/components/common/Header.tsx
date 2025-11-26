"use client"
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { BellIcon, CashIcon, ContractIcon,  GiftIcon, HomeIcon, OnlinesIcon, SettingsIcon, UpgradeIcon } from '../icons'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { useState } from 'react'
import clsx from 'clsx'

const links = [
  { id: 'main', name: 'Main', href: '/', icon: <HomeIcon /> },
  { id: 'bonus', name: 'Bonus', href: '/bonus', icon: <GiftIcon /> },
  { id: 'upgrade', name: 'Upgrade', href: '/upgrade', icon: <UpgradeIcon /> },
  { id: 'contract', name: 'Contract', href: '/contact', icon: <ContractIcon /> }
]

const currencies = [
  { id: 1, code: 'USD', symbol: '$', name: 'US Dollar', amount: '1052.52' },
  { id: 2, code: 'EUR', symbol: '€', name: 'Euro', amount: '152.52' },
  { id: 3, code: 'RUB', symbol: '₽', name: 'Russian Ruble', amount: '2052.52' },
  { id: 5, code: 'BTC', symbol: '₿', name: 'Bitcoin', amount: '0.025' },
]


const Header = () => {
  const [selected, setSelected] = useState(currencies[0])
  const pathname = usePathname()
  
  return (
    <header className='relative z-10'>
      <div className='max-w-[1728px] flex items-center justify-between w-full mx-auto px-1.5 md:px-4 lg:px-8 gap-2 py-1.5'>
        <div className='flex items-center '>
          <OnlinesIcon />
          <p className='text-sm font-medium text-brand-gray'>
            Online: <span className='text-white'>1052</span> 
          </p>
        </div>

        <div className='hidden lg:flex items-center gap-6'>
          <Link className='text-sm text-brand-gray hover:text-white font-medium' href={'#'}>Privacy Policy</Link>
          <Link className='text-sm text-brand-gray hover:text-white font-medium' href={'#'}>Public Offer</Link>
        </div>

        <div className='hidden lg:flex items-center gap-2.5'>
          <Link className='group' href={'#'}>
            <svg className='group-hover:fill-white fill-brand-gray' xmlns="http://www.w3.org/2000/svg" width={20} height={19} viewBox="0 0 20 19" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M17.8314 0.126402C18.9081 -0.356001 20.0624 0.612796 19.8722 1.83936L17.6268 16.3268C17.4102 17.7237 15.9685 18.5252 14.7642 17.8291C13.7564 17.2466 12.2612 16.3501 10.9136 15.4131C10.2408 14.9452 8.18036 13.445 8.43362 12.377C8.65016 11.4638 12.1139 8.03288 14.0933 5.99245C14.8707 5.19096 14.5166 4.72793 13.5984 5.46589C11.3206 7.29653 7.66357 10.0798 6.45423 10.8631C5.38724 11.5542 4.83013 11.6721 4.16562 11.5542C2.95215 11.339 1.82712 11.0058 0.908628 10.6007C-0.332787 10.0531 -0.272318 8.23771 0.907787 7.70904L17.8314 0.126402Z" />
            </svg>
          </Link>
          <Link className='group' href={'#'}>
            <svg className='group-hover:fill-white fill-brand-gray' xmlns="http://www.w3.org/2000/svg" width={22} height={17} viewBox="0 0 22 17" fill="none">
              <path d="M14.4608 11.1022C13.368 11.0319 12.5088 10.1437 12.5088 9.05788C12.5088 9.02164 12.5095 8.9854 12.5117 8.94916V8.95413C12.5095 8.92003 12.508 8.88023 12.508 8.83973C12.508 7.75608 13.3687 6.87069 14.4551 6.80602H14.4608C15.5522 6.86429 16.4144 7.74755 16.4144 8.82907C16.4144 8.87313 16.4129 8.91647 16.41 8.95982V8.95413C16.4122 8.98966 16.4136 9.03159 16.4136 9.07351C16.4136 10.1557 15.5522 11.0404 14.4659 11.1015H14.4601L14.4608 11.1022ZM7.25284 11.1022C6.16 11.0319 5.30077 10.1437 5.30077 9.05788C5.30077 9.02164 5.30149 8.9854 5.30366 8.94916V8.95413C5.30149 8.92003 5.30004 8.88023 5.30004 8.83973C5.30004 7.75608 6.16072 6.87069 7.24706 6.80602H7.25284C8.34424 6.86429 9.20637 7.74755 9.20637 8.82907C9.20637 8.87313 9.20492 8.91647 9.20203 8.95982V8.95413C9.2042 8.98824 9.20564 9.02804 9.20564 9.06854C9.20564 10.1522 8.34496 11.0376 7.25863 11.1022H7.25284ZM18.3672 1.36859C17.0921 0.777385 15.6108 0.309817 14.0602 0.0390823L13.9524 0.0234494C13.9488 0.0227388 13.9444 0.0220284 13.9401 0.0220284C13.9148 0.0220284 13.8931 0.0355295 13.8815 0.055426C13.7123 0.347478 13.5286 0.71201 13.3629 1.08578L13.3318 1.16466C12.5869 1.04741 11.7276 0.980613 10.8525 0.980613C9.97736 0.980613 9.11813 1.04741 8.27987 1.17602L8.37317 1.16395C8.17789 0.716274 7.99129 0.352452 7.78516 0L7.81482 0.0547155C7.80252 0.0341084 7.7801 0.0213175 7.75478 0.0213175C7.75117 0.0213175 7.74683 0.0213178 7.74321 0.0220284C6.08478 0.308396 4.60354 0.775253 3.21923 1.41265L3.32844 1.36717C3.31614 1.37215 3.30602 1.38067 3.29951 1.39133C1.23533 4.26282 0 7.83567 0 11.692C0 12.3365 0.0347165 12.9725 0.10198 13.5993L0.0954702 13.5211C0.09764 13.5417 0.108489 13.5588 0.123677 13.5708C1.67145 14.7085 3.47092 15.6251 5.41287 16.227L5.54016 16.2611C5.54595 16.2633 5.55318 16.264 5.56042 16.264C5.58356 16.264 5.60381 16.2533 5.61611 16.237C6.00305 15.7253 6.37119 15.1455 6.69015 14.5372L6.72414 14.4662C6.72848 14.4576 6.73137 14.447 6.73137 14.4356C6.73137 14.4065 6.71257 14.3823 6.68653 14.3724H6.68581C6.0262 14.1222 5.46856 13.8558 4.93769 13.5502L4.99338 13.5801C4.97241 13.568 4.95866 13.546 4.95866 13.5211C4.95866 13.4991 4.96951 13.4792 4.98615 13.4671C5.0997 13.3832 5.21398 13.2965 5.32246 13.2084C5.33404 13.1992 5.34923 13.1935 5.36514 13.1935C5.37526 13.1935 5.38466 13.1956 5.39262 13.1992H5.3919C6.98885 13.9531 8.86354 14.3937 10.8424 14.3937C12.8212 14.3937 14.6966 13.9531 16.3702 13.1665L16.2929 13.1992C16.3015 13.1949 16.3109 13.1928 16.3218 13.1928C16.3377 13.1928 16.3529 13.1985 16.3645 13.2077C16.473 13.2958 16.5865 13.3839 16.7015 13.4671C16.7181 13.4799 16.729 13.4998 16.729 13.5218C16.729 13.5467 16.7152 13.568 16.6957 13.5801C16.2176 13.8608 15.66 14.1265 15.0792 14.3461L15.0033 14.3717C14.9773 14.3816 14.9584 14.4065 14.9584 14.4349C14.9584 14.4463 14.9613 14.4569 14.9664 14.4662C15.3288 15.1483 15.6962 15.7268 16.1026 16.276L16.0737 16.2355C16.086 16.2526 16.107 16.264 16.1294 16.264C16.1366 16.264 16.1439 16.2625 16.1504 16.2611C18.2225 15.6273 20.0249 14.7106 21.6218 13.5381L21.5748 13.5715C21.5907 13.5602 21.6009 13.5424 21.603 13.5225C21.666 12.9654 21.7014 12.3188 21.7014 11.6643C21.7014 7.81648 20.4632 4.25288 18.3578 1.33662L18.3954 1.39204C18.3896 1.38067 18.3795 1.37144 18.3679 1.36646L18.3672 1.36859Z"  />
            </svg>
          </Link>
        </div>
      </div>

      <nav className='bg-[linear-gradient(180deg,#181B27_0%,#161822_100%)] py-4'>
        <div className='max-w-[1728px] flex items-center gap-2 justify-between w-full mx-auto px-1.5 md:px-4 lg:px-8'>
          <div className='flex items-center gap-6'>
            {/* logo */}
            <Link className='relative h-[49] md:w-[198px] w-[123px]' href={'/'}>
              <Image className='hidden md:block' src={'/logo.png'} alt='' fill />
              <Image className='block md:hidden' src={'/mobile-logo.png'} alt='' fill />
            </Link>
            {/* menu */}
            <div className='hidden xl2:flex items-center gap-3'>
              {links.map((link) => {
                const isActive = link.href !== '#' && pathname === link.href
                const baseClass =
                  'flex group items-center gap-2 px-3.5 font-medium transition-all duration-200'
                const stateClass = isActive
                  ? 'text-white fill-brand-gray-2'
                  : 'text-brand-gray-2 hover:text-white'

                return (
                  <Link key={link.id} className={`${baseClass} ${stateClass}`} href={link.href}>
                    <span className={`${isActive ? '[&>svg]:fill-brand-blue [&>svg]:drop-shadow-[0_4px_12.3px_rgba(63,131,233,0.25)]' : '[&>svg]:fill-brand-gray-2 [&>svg]:group-hover:fill-white'}`}>
                      {link.icon}
                    </span>
                    <span>{link.name}</span>
                  </Link>
                )
              })}

              <Link className='relative h-11 w-[145px]' href={'#'}>
                <div className='absolute size-full event-bg'></div>
                <div className='absolute bottom-0 '>
                  <Image className='' src={'/event.png'} width={92} height={54} alt='bg' />
                </div>
                <span className='absolute top-1/2 -translate-y-1/2 right-3.5 z-10 text-brand-gray-2 font-medium'>
                 Event
                </span>
              </Link>
            </div>
          </div>
          {/* === */}
          <div className='flex items-center gap-1.5'>
            {/* deposite */}
            <div className='flex items-center justify-between gap-0.5 h-11 rounded-lg bg-brand-neutral pl-0.5 relative'>
              <Listbox value={selected} onChange={setSelected}>
                <ListboxButton className="flex items-center justify-center h-8 md:h-10 w-full px-3 flex-1 bg-brand-neutral shadow-[0_0_13.3px_0_rgba(0,0,0,0.30)_inset] outline-none cursor-pointer rounded-lg gap-2">
                  <span className='flex bg-brand-yellow items-center justify-center size-5 lg:size-6 rounded-full text-brand-dark text-sm lg:text-base font-bold'>{selected?.symbol}</span>
                  <span className='block lg:text-lg font-bold text-white'>{selected?.amount}</span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 15 15" fill="none">
                      <rect width={15} height={15} rx={3} fill="#3C4152" />
                      <path d="M8.39375 9.80833C7.99375 10.3417 7.19375 10.3417 6.79375 9.80833L4.3875 6.6C3.89307 5.94076 4.36345 5 5.1875 5L10 5C10.824 5 11.2944 5.94076 10.8 6.6L8.39375 9.80833Z" fill="#60657E" />
                    </svg>
                  </span>
                </ListboxButton>

                <ListboxOptions
                  anchor="bottom start"
                  transition
                  className={clsx(
                    'w-40 rounded-xl border border-white/5 bg-brand-neutral z-50 p-1 [--anchor-gap:--spacing(1)] empty:invisible',
                    'transition duration-100 ease-out data-closed:scale-95 data-closed:opacity-0 outline-none'
                  )}
                >
                  {currencies.map((currency) => (
                    <ListboxOption
                      key={currency.id}
                      value={currency}
                      className="group flex cursor-default items-center gap-2 rounded-lg px-3 py-1.5 select-none data-focus:bg-white/10"
                    >
                      <span className='flex bg-brand-yellow items-center justify-center size-6 rounded-full text-brand-dark font-bold text-xs'>{currency.symbol}</span>
                      <div className="flex flex-col">
                        <span className="text-sm/6 text-white font-bold">{currency.amount}</span>
                        <span className="text-xs text-brand-gray-2">{currency.code}</span>
                      </div>
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
              <button className='flex items-center justify-center lg:gap-2.5 px-3 md:px-3.5 btn h-full uppercase font-bold text-brand-dark cursor-pointer' type='button'>
                <CashIcon />
                <span className='hidden lg:block'>Deposit</span>
              </button>
            </div>
            {/* profile */}
            <Link className='relative overflow-hidden rounded-[10px] w-10 h-[42px] md:size-11' href={'#'}>
              <Image src={'/profile.jpg'} fill alt='profile' />
            </Link>
            <button className='hidden size-11 md:flex items-center justify-center bg-brand-dark shadow-[0_0_13.3px_0_rgba(0,0,0,0.06)_inset] rounded-[10px] cursor-pointer'>
              <BellIcon />
            </button>
            <button className='hidden size-11 md:flex items-center justify-center bg-brand-dark shadow-[0_0_13.3px_0_rgba(0,0,0,0.06)_inset] rounded-[10px] cursor-pointer'>
              <SettingsIcon />
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header