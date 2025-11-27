import InventoryAndSkins from "@/components/upgrade/InventoryAndSkins"
import UpgradeHero from "@/components/upgrade/UpgradeHero"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { upgradeSkins } from "@/data/upgradeSkins"

export default function UpgradePage() {
  return (
    <>
      <UpgradeHero />

      <div className="max-w-[1728px] mx-auto w-full relative z-10">
        <div className="lg:hidden py-8 px-4">
          <Tabs defaultValue="inventory" className="gap-2 md:gap-4">
            <TabsList className="w-full bg-transparent gap-1.5 md:gap-4">
              <TabsTrigger value="inventory" className="flex-1 bg-brand-neutral-4/50! data-[state=active]:bg-brand-neutral-4! h-11! rounded-[10px]! border border-white/10! text-brand-gray-2! text-xs! font-bold! uppercase">
                Your inventory
              </TabsTrigger>
              <TabsTrigger value="skins" className="flex-1 bg-brand-neutral-4/50! data-[state=active]:bg-brand-neutral-4! h-11! rounded-[10px]! border border-white/10! text-brand-gray-2! text-xs! font-bold! uppercase">
                Skins
              </TabsTrigger>
            </TabsList>
            <TabsContent value="inventory">
              <InventoryAndSkins title="Your inventory" items={[]} />
            </TabsContent>
            <TabsContent value="skins">
              <InventoryAndSkins title="Skins" items={upgradeSkins} />
            </TabsContent>
          </Tabs>
        </div>
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-2.5 md:py-8 px-4">
          <InventoryAndSkins title="Your inventory" items={[]} />
          <InventoryAndSkins title="Skins" items={upgradeSkins} />
        </div>
      </div>
    </>
  )
}

