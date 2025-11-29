import clsx from "clsx"
import { useState } from "react"
import { UpgradeIcon, ContractIcon, CashIcon, CaseIcon } from "@/components/icons"

const tabs = [
  { id: 'inventory', label: 'Inventory', icon: CashIcon },
  { id: 'cases', label: 'Cases', icon: CaseIcon },
  { id: 'upgrade', label: 'Upgrade', icon: UpgradeIcon },
  { id: 'contract', label: 'Contract', icon: ContractIcon },
]

const ActionPanel = () => {
  const [activeTab, setActiveTab] = useState('cases');
  
  return (
    <div className={clsx(
      "pb-1.5 md:pb-4",
      "flex items-center gap-2.5"
    )}>
      {/* search input */}
      <div className={clsx(
        "hidden xl:block flex-1 relative overflow-hidden w-full h-14 rounded-lg border border-white/10",
        "bg-[linear-gradient(0deg,#10121D_0%,#10121D_100%),linear-gradient(270deg,#181B27_0%,#232940_100%)]"
      )}>
        <span className="absolute left-4 top-1/2 -translate-y-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
            <path d="M13.9995 14.6666C13.9117 14.6671 13.8248 14.6503 13.7435 14.6171C13.6623 14.584 13.5884 14.5351 13.5261 14.4733L9.52614 10.4733C9.4006 10.3478 9.33008 10.1775 9.33008 9.99996C9.33008 9.82243 9.4006 9.65216 9.52614 9.52663C9.65167 9.40109 9.82194 9.33057 9.99947 9.33057C10.177 9.33057 10.3473 9.40109 10.4728 9.52663L14.4728 13.5266C14.5353 13.5886 14.5849 13.6623 14.6187 13.7436C14.6526 13.8248 14.67 13.912 14.67 14C14.67 14.088 14.6526 14.1751 14.6187 14.2563C14.5849 14.3376 14.5353 14.4113 14.4728 14.4733C14.4105 14.5351 14.3366 14.584 14.2554 14.6171C14.1742 14.6503 14.0872 14.6671 13.9995 14.6666Z" fill="#768298" />
            <path d="M6.66504 1.33325C9.61045 1.33325 11.9988 3.72089 11.999 6.66626C11.999 9.61178 9.61056 12.0002 6.66504 12.0002C3.71967 12.0001 1.33203 9.61167 1.33203 6.66626C1.33221 3.721 3.71978 1.33343 6.66504 1.33325ZM6.66602 2.66626C4.45696 2.66626 2.66615 4.45723 2.66602 6.66626C2.66602 8.8754 4.45688 10.6663 6.66602 10.6663C8.87515 10.6663 10.666 8.8754 10.666 6.66626C10.6659 4.45723 8.87507 2.66626 6.66602 2.66626Z" fill="#768298" />
          </svg>
        </span>
        <input className="flex-1 bg-transparent outline-none absolute size-full pl-10 pr-1 text-white placeholder:text-brand-gray-2 text-sm font-medium" type="text" placeholder="Search" />
      </div>
      {/* buttons */}
      <div className="flex- grid grid-cols-6 md:grid-cols-5 w-full xl:w-auto gap-1.5 d:gap-2.5">
        {/* Tab buttons */}
        {tabs.map((tab, idx) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                "group w-full xl:w-[160px] flex items-center justify-center gap-2 h-14 rounded-lg border border-white/10",
                "transition-colors cursor-pointer",
                "col-span-2 md:col-span-1",
                isActive ? "bg-[linear-gradient(270deg,#181B27_0%,#232940_100%)]" : "bg-[linear-gradient(0deg,#10121D_0%,#10121D_100%),linear-gradient(270deg,#181B27_0%,#232940_100%)]",
                tab.id == 'contract' && "col-span-3! md:col-span-1!"
              )}
            >
              <span className={clsx(
                isActive 
                  ? '[&>svg]:fill-brand-blue [&>svg]:drop-shadow-[0_4px_12.3px_rgba(63,131,233,0.25)]' 
                  : '[&>svg]:fill-brand-gray-2 [&>svg]:group-hover:fill-white'
              )}>
                <Icon />
              </span>
              <span className={clsx(
                "font-medium",
                isActive ? "text-white" : "text-brand-gray-2 group-hover:text-white"
              )}>
                {tab.label}
              </span>
            </button>
          )
        })}
        
        {/* Sell all button */}
        <button className="w-full xl:w-[160px] flex items-center justify-center gap-2 h-14 btn cursor-pointer col-span-3 md:col-span-1">
          <span className="font-bold text-brand-dark">Sell all</span>
        </button>
      </div>
    </div>
  )
}

export default ActionPanel