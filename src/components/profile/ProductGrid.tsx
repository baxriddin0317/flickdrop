import { upgradeSkins } from "@/data/upgradeSkins"
import ActionPanel from "./ActionPanel"
import SkinCard from "../cards/SkinCard"

const ProductGrid = () => {
  return (
    <section className="max-w-8xl w-full mx-auto px-1.5 md:px-2 lg:px-8 2xl:px-2 pt-5 md:pt-3">
      <ActionPanel />

      <div className="bg-brand-dark rounded-3xl overflow-hidden w-full">
        <div className="xl:hidden px-6 py-2.5 h-[66px] flex items-center justify-between border-b border-brand-gray-2">
          <div className="relative overflow-hidden w-2/3 sm:w-1/2 h-11 rounded-lg bg-brand-neutral-4 border border-white/10 shadow-[0_0_14.721px_0_rgba(0,0,0,0.06)_inset] ">
            <span className="absolute left-3 top-1/2 -translate-y-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                <path d="M13.9995 14.6666C13.9117 14.6671 13.8248 14.6503 13.7435 14.6171C13.6623 14.584 13.5884 14.5351 13.5261 14.4733L9.52614 10.4733C9.4006 10.3478 9.33008 10.1775 9.33008 9.99996C9.33008 9.82243 9.4006 9.65216 9.52614 9.52663C9.65167 9.40109 9.82194 9.33057 9.99947 9.33057C10.177 9.33057 10.3473 9.40109 10.4728 9.52663L14.4728 13.5266C14.5353 13.5886 14.5849 13.6623 14.6187 13.7436C14.6526 13.8248 14.67 13.912 14.67 14C14.67 14.088 14.6526 14.1751 14.6187 14.2563C14.5849 14.3376 14.5353 14.4113 14.4728 14.4733C14.4105 14.5351 14.3366 14.584 14.2554 14.6171C14.1742 14.6503 14.0872 14.6671 13.9995 14.6666Z" fill="#768298" />
                <path d="M6.66504 1.33325C9.61045 1.33325 11.9988 3.72089 11.999 6.66626C11.999 9.61178 9.61056 12.0002 6.66504 12.0002C3.71967 12.0001 1.33203 9.61167 1.33203 6.66626C1.33221 3.721 3.71978 1.33343 6.66504 1.33325ZM6.66602 2.66626C4.45696 2.66626 2.66615 4.45723 2.66602 6.66626C2.66602 8.8754 4.45688 10.6663 6.66602 10.6663C8.87515 10.6663 10.666 8.8754 10.666 6.66626C10.6659 4.45723 8.87507 2.66626 6.66602 2.66626Z" fill="#768298" />
              </svg>
            </span>
            <input className="bg-transparent outline-none absolute size-full pl-9 pr-1 text-white placeholder:text-brand-gray-2 text-sm font-medium" type="text" placeholder="Search" />
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
        </div>
      </div>
    </section>
  )
}

export default ProductGrid