"use client"
import clsx from "clsx"
import { links } from "@/data/upgradeSkins"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useMobileMenuStore } from "@/store/useMobileMenuStore"
import { BellIcon, ContractIcon, GiftIcon, HomeIcon, MenuBg1, MenuBg2, MenuBg3, MenuBg4, MenuBg5, MenuIcon, SettingsIcon, UpgradeIcon } from "../icons"

const MobileNavigation = () => {
  const pathname = usePathname()
  const isOpen = useMobileMenuStore((state) => state.isOpen)
  const openMenu = useMobileMenuStore((state) => state.openMenu)
  const closeMenu = useMobileMenuStore((state) => state.closeMenu)

  return (
    <>
      <div className="fixed md:hidden bottom-0 w-full h-52 left-0 bg-[linear-gradient(180deg,rgba(12,14,22,0.00)_0%,rgba(12,14,22,0.75)_76.92%)] z-40"></div>
      <div className="fixed md:hidden w-[380px] left-1/2 -translate-x-1/2 bottom-4 z-50">
        <div className="relative h-28 z-0">
          <Image className="absolute size-full object-cover" src={'/imgs/Intersect.svg'} alt="" fill />
        </div>
        <Link className="absolute top-10 left-8" href={'/'}>
          <span>
            <MenuBg1 />
          </span>
          <span className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 [&>svg]:fill-brand-gray-2">
            <HomeIcon />
          </span>
        </Link>
        <Link className="absolute top-10 left-24 -translate-x-2" href={'/bonus'}>
          <span>
            <MenuBg2 />
          </span>
          <span className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 [&>svg]:fill-brand-gray-2">
            <GiftIcon />
          </span>
        </Link>
        <button 
          onClick={openMenu}
          className="absolute top-8 left-1/2 -translate-x-1/2 cursor-pointer"
        >
          <span>
            <MenuBg3 />
          </span>
          <span className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" fill="none">
              <path d="M5.33301 8H26.6663M5.33301 16H26.6663M5.33301 24H26.6663" stroke="#13151C" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
        <Link className="absolute top-10 right-24 translate-x-2" href={'/upgrade'}>
          <span>
            <MenuBg4 />
          </span>
          <span className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 [&>svg]:fill-brand-gray-2">
            <UpgradeIcon />
          </span>
        </Link>
        <Link className="absolute top-10 right-8" href={'/contract'}>
          <span>
            <MenuBg5 />
          </span>
          <span className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 [&>svg]:fill-brand-gray-2">
            <ContractIcon />
          </span>
        </Link>
      </div>

      {/* Overlay */}
      <div 
        className={clsx(
          'fixed inset-0 bg-black/50 transition-opacity duration-300 xl2:hidden z-90',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeMenu}
      />
      {/* Drawer */}
      <div
        className={clsx(
          'fixed xl2:hidden transition-all duration-300 ease-in-out z-99',
          'bg-[linear-gradient(180deg,#181B27_0%,#161822_100%)]',
          'bottom-0 md:right-0 md:h-full md:w-80 md:rounded-none',
          'w-full rounded-t-3xl border border-white/5 border-t-white/10',
          isOpen ? 'md:translate-x-0 translate-y-0' : 'translate-y-full md:translate-y-0 md:translate-x-full'
        )}
      >
        <div className='flex flex-col h-full pt-4 p-6 md:pt-14 pb-14 md:pb-6'>
          {/* Close button */}
          <div className='flex justify-end md:mb-6'>
            <button
              onClick={closeMenu}
              className='flex items-center justify-center size-11 bg-brand-dark shadow-[0_0_13.3px_0_rgba(0,0,0,0.06)_inset] rounded-lg cursor-pointer hover:bg-brand-neutral transition-colors'
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none" className='stroke-brand-gray-2 hover:stroke-white transition-colors'>
                <path d="M15 5L5 15M5 5l10 10" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          <div className="md:hidden max-w-96 w-full mx-auto my-4 flex items-center justify-between px-3.5">
            <Link className='group' href={'#'}>
              <svg className='group-hover:fill-white fill-brand-gray' xmlns="http://www.w3.org/2000/svg" width={32} height={22} viewBox="0 0 20 19" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M17.8314 0.126402C18.9081 -0.356001 20.0624 0.612796 19.8722 1.83936L17.6268 16.3268C17.4102 17.7237 15.9685 18.5252 14.7642 17.8291C13.7564 17.2466 12.2612 16.3501 10.9136 15.4131C10.2408 14.9452 8.18036 13.445 8.43362 12.377C8.65016 11.4638 12.1139 8.03288 14.0933 5.99245C14.8707 5.19096 14.5166 4.72793 13.5984 5.46589C11.3206 7.29653 7.66357 10.0798 6.45423 10.8631C5.38724 11.5542 4.83013 11.6721 4.16562 11.5542C2.95215 11.339 1.82712 11.0058 0.908628 10.6007C-0.332787 10.0531 -0.272318 8.23771 0.907787 7.70904L17.8314 0.126402Z" />
              </svg>
            </Link>
            <Link className='group' href={'#'}>
              <svg className='group-hover:fill-white fill-brand-gray' xmlns="http://www.w3.org/2000/svg" width={32} height={22} viewBox="0 0 22 17" fill="none">
                <path d="M14.4608 11.1022C13.368 11.0319 12.5088 10.1437 12.5088 9.05788C12.5088 9.02164 12.5095 8.9854 12.5117 8.94916V8.95413C12.5095 8.92003 12.508 8.88023 12.508 8.83973C12.508 7.75608 13.3687 6.87069 14.4551 6.80602H14.4608C15.5522 6.86429 16.4144 7.74755 16.4144 8.82907C16.4144 8.87313 16.4129 8.91647 16.41 8.95982V8.95413C16.4122 8.98966 16.4136 9.03159 16.4136 9.07351C16.4136 10.1557 15.5522 11.0404 14.4659 11.1015H14.4601L14.4608 11.1022ZM7.25284 11.1022C6.16 11.0319 5.30077 10.1437 5.30077 9.05788C5.30077 9.02164 5.30149 8.9854 5.30366 8.94916V8.95413C5.30149 8.92003 5.30004 8.88023 5.30004 8.83973C5.30004 7.75608 6.16072 6.87069 7.24706 6.80602H7.25284C8.34424 6.86429 9.20637 7.74755 9.20637 8.82907C9.20637 8.87313 9.20492 8.91647 9.20203 8.95982V8.95413C9.2042 8.98824 9.20564 9.02804 9.20564 9.06854C9.20564 10.1522 8.34496 11.0376 7.25863 11.1022H7.25284ZM18.3672 1.36859C17.0921 0.777385 15.6108 0.309817 14.0602 0.0390823L13.9524 0.0234494C13.9488 0.0227388 13.9444 0.0220284 13.9401 0.0220284C13.9148 0.0220284 13.8931 0.0355295 13.8815 0.055426C13.7123 0.347478 13.5286 0.71201 13.3629 1.08578L13.3318 1.16466C12.5869 1.04741 11.7276 0.980613 10.8525 0.980613C9.97736 0.980613 9.11813 1.04741 8.27987 1.17602L8.37317 1.16395C8.17789 0.716274 7.99129 0.352452 7.78516 0L7.81482 0.0547155C7.80252 0.0341084 7.7801 0.0213175 7.75478 0.0213175C7.75117 0.0213175 7.74683 0.0213178 7.74321 0.0220284C6.08478 0.308396 4.60354 0.775253 3.21923 1.41265L3.32844 1.36717C3.31614 1.37215 3.30602 1.38067 3.29951 1.39133C1.23533 4.26282 0 7.83567 0 11.692C0 12.3365 0.0347165 12.9725 0.10198 13.5993L0.0954702 13.5211C0.09764 13.5417 0.108489 13.5588 0.123677 13.5708C1.67145 14.7085 3.47092 15.6251 5.41287 16.227L5.54016 16.2611C5.54595 16.2633 5.55318 16.264 5.56042 16.264C5.58356 16.264 5.60381 16.2533 5.61611 16.237C6.00305 15.7253 6.37119 15.1455 6.69015 14.5372L6.72414 14.4662C6.72848 14.4576 6.73137 14.447 6.73137 14.4356C6.73137 14.4065 6.71257 14.3823 6.68653 14.3724H6.68581C6.0262 14.1222 5.46856 13.8558 4.93769 13.5502L4.99338 13.5801C4.97241 13.568 4.95866 13.546 4.95866 13.5211C4.95866 13.4991 4.96951 13.4792 4.98615 13.4671C5.0997 13.3832 5.21398 13.2965 5.32246 13.2084C5.33404 13.1992 5.34923 13.1935 5.36514 13.1935C5.37526 13.1935 5.38466 13.1956 5.39262 13.1992H5.3919C6.98885 13.9531 8.86354 14.3937 10.8424 14.3937C12.8212 14.3937 14.6966 13.9531 16.3702 13.1665L16.2929 13.1992C16.3015 13.1949 16.3109 13.1928 16.3218 13.1928C16.3377 13.1928 16.3529 13.1985 16.3645 13.2077C16.473 13.2958 16.5865 13.3839 16.7015 13.4671C16.7181 13.4799 16.729 13.4998 16.729 13.5218C16.729 13.5467 16.7152 13.568 16.6957 13.5801C16.2176 13.8608 15.66 14.1265 15.0792 14.3461L15.0033 14.3717C14.9773 14.3816 14.9584 14.4065 14.9584 14.4349C14.9584 14.4463 14.9613 14.4569 14.9664 14.4662C15.3288 15.1483 15.6962 15.7268 16.1026 16.276L16.0737 16.2355C16.086 16.2526 16.107 16.264 16.1294 16.264C16.1366 16.264 16.1439 16.2625 16.1504 16.2611C18.2225 15.6273 20.0249 14.7106 21.6218 13.5381L21.5748 13.5715C21.5907 13.5602 21.6009 13.5424 21.603 13.5225C21.666 12.9654 21.7014 12.3188 21.7014 11.6643C21.7014 7.81648 20.4632 4.25288 18.3578 1.33662L18.3954 1.39204C18.3896 1.38067 18.3795 1.37144 18.3679 1.36646L18.3672 1.36859Z"  />
              </svg>
            </Link>
            <button className='size-8 flex items-center justify-center cursor-pointer [&>svg]:fill-brand-gray hover:[&>svg]:fill-white'>
              <BellIcon />
            </button>
            <button className='size-8 flex items-center justify-center cursor-pointer [&>svg]:fill-brand-gray hover:[&>svg]:fill-white'>
              <SettingsIcon />
            </button>
          </div>

          {/* Navigation Links */}
          <div className='flex flex-col gap-3 h-full pr-1'>
            {links.map((link) => {
              const isActive = link.href !== '#' && pathname === link.href
              const baseClass =
                'hidden md:flex group items-center gap-2 px-3.5 py-3 font-medium transition-all duration-200 rounded-lg'
              const stateClass = isActive
                ? 'text-white fill-brand-gray-2 bg-white/5'
                : 'text-brand-gray-2 hover:text-white hover:bg-white/5'

              return (
                <Link 
                  key={link.id} 
                  className={`${baseClass} ${stateClass}`} 
                  href={link.href}
                  onClick={closeMenu}
                >
                  <span className={`${isActive ? '[&>svg]:fill-brand-blue [&>svg]:drop-shadow-[0_4px_12.3px_rgba(63,131,233,0.25)]' : '[&>svg]:fill-brand-gray-2 [&>svg]:group-hover:fill-white'}`}>
                    {link.icon}
                  </span>
                  <span>{link.name}</span>
                </Link>
              )
            })}

            <Link 
              className='px-3.5 h-11' 
              href={'/event'}
              onClick={closeMenu}
            >
              <div className='relative h-full w-full mt-2'>
                <div className='absolute size-full event-bg rounded-lg'></div>
                <div className='absolute bottom-0'>
                  <Image className='rounded-lg' src={'/event.png'} width={92} height={54} alt='bg' />
                </div>
                <span className='absolute top-1/2 -translate-y-1/2 right-3.5 z-10 text-brand-gray-2 font-medium'>
                  Event
                </span>
              </div>
            </Link>
          </div>

          <div className="flex md:hidden flex-col gap-2 h-full mt-6">
            <Link 
              className={clsx(
                "flex group items-center gap-2 px-3.5 py-3 font-medium transition-all duration-200 rounded-lg",
                pathname === '/privacy-policy' ? 'text-white fill-brand-gray-2 bg-white/5' : 'text-brand-gray-2 hover:text-white hover:bg-white/5'
              )}
              href='/privacy-policy'
              onClick={closeMenu}
            >
              Privacy Policy
            </Link>
            <Link 
              className={clsx(
                "flex group items-center gap-2 px-3.5 py-3 font-medium transition-all duration-200 rounded-lg",
                pathname === '/privacy-offer' ? 'text-white fill-brand-gray-2 bg-white/5' : 'text-brand-gray-2 hover:text-white hover:bg-white/5'
              )}
              href='/public-offer'
              onClick={closeMenu}
            >
              Public Offer
            </Link>
          </div>
        </div>
      </div>
  </>
  )
}

export default MobileNavigation