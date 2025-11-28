import { ContractIcon, GiftIcon, HomeIcon, UpgradeIcon } from "@/components/icons";
import { InventoryItem } from "@/components/upgrade/InventoryAndSkins";

export const links = [
  { id: 'main', name: 'Main', href: '/', icon: <HomeIcon /> },
  { id: 'bonus', name: 'Bonus', href: '/bonus', icon: <GiftIcon /> },
  { id: 'upgrade', name: 'Upgrade', href: '/upgrade', icon: <UpgradeIcon /> },
  { id: 'contract', name: 'Contract', href: '/contact', icon: <ContractIcon /> }
]

export const currencies = [
  { id: 1, code: 'USD', symbol: '$', name: 'US Dollar', amount: '1052.52' },
  { id: 2, code: 'EUR', symbol: '€', name: 'Euro', amount: '152.52' },
  { id: 3, code: 'RUB', symbol: '₽', name: 'Russian Ruble', amount: '2052.52' },
  { id: 5, code: 'BTC', symbol: '₿', name: 'Bitcoin', amount: '0.025' },
]

export const upgradeSkins: InventoryItem[] = [
  { id: 0, name: "Specialist Gloves", type: "Lt. Commander", price: "1042.32" },
  { id: 1, name: "AK-47 | Redline", type: "Field-Tested", price: "412.15" },
  { id: 2, name: "M4A1-S | Printstream", type: "Minimal Wear", price: "623.80" },
  { id: 3, name: "AWP | Asiimov", type: "Battle-Scarred", price: "389.40" },
  { id: 4, name: "Desert Eagle | Blaze", type: "Factory New", price: "812.05" },
  { id: 5, name: "Glock-18 | Vogue", type: "Field-Tested", price: "158.70" },
  { id: 6, name: "USP-S | Kill Confirmed", type: "Minimal Wear", price: "331.22" },
  { id: 7, name: "MP9 | Starlight Protector", type: "Factory New", price: "205.33" },
  { id: 8, name: "FAMAS | Waters of Nephthys", type: "Field-Tested", price: "94.60" },
  { id: 9, name: "AWP | Wildfire", type: "Minimal Wear", price: "522.89" },
  { id: 10, name: "AK-47 | Nightwish", type: "Field-Tested", price: "287.11" },
  { id: 11, name: "M4A4 | Temukau", type: "Well-Worn", price: "198.42" },
  { id: 12, name: "P250 | See Ya Later", type: "Factory New", price: "114.76" },
  { id: 13, name: "Five-SeveN | Angry Mob", type: "Minimal Wear", price: "126.54" },
  { id: 14, name: "Nova | Hyper Beast", type: "Factory New", price: "78.45" },
  { id: 15, name: "SSG 08 | Dragonfire", type: "Field-Tested", price: "233.05" },
  { id: 16, name: "Galil AR | Chromatic Aberration", type: "Minimal Wear", price: "87.90" },
  { id: 17, name: "MAC-10 | Stalker", type: "Factory New", price: "65.13" },
  { id: 18, name: "AK-47 | Leet Museo", type: "Factory New", price: "344.77" },
  { id: 19, name: "AWP | Neo-Noir", type: "Minimal Wear", price: "298.55" },
  { id: 20, name: "Desert Eagle | Light Rail", type: "Factory New", price: "142.66" },
  { id: 21, name: "MP7 | Fade", type: "Factory New", price: "119.32" },
  { id: 22, name: "CZ75-Auto | Xiangliu", type: "Field-Tested", price: "83.47" },
  { id: 23, name: "P90 | Shallow Grave", type: "Minimal Wear", price: "102.18" },
  { id: 24, name: "UMP-45 | Primal Saber", type: "Field-Tested", price: "74.09" },
];

