import InventoryAndSkins from "@/components/upgrade/InventoryAndSkins"
import UpgradeHero from "@/components/upgrade/UpgradeHero"
import { upgradeSkins } from "@/data/upgradeSkins"

export default function UpgradePage() {
  return (
    <>
      <UpgradeHero />
      <div className="max-w-[1728px] mx-auto relative z-10 grid grid-cols-1 2xl:grid-cols-2 gap-2.5 py-8 px-4">
        <InventoryAndSkins title="Your inventory" items={[]} />
        <InventoryAndSkins title="Skins" items={upgradeSkins} />
      </div>
    </>
  )
}

