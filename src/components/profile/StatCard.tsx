import clsx from "clsx";

interface props {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const StatCard = ({ title, value, icon }: props) => {
  return (
    <div className={clsx(
      "h-full w-full mx-auto flex flex-col items-center text-center justify-center",
      "bg-[linear-gradient(180deg,#181B27_0%,#232940_100%),linear-gradient(180deg,#181B27_0%,#13151C_100%)]",
      "border border-white/10 rounded-20",
    )}>
      <span className="">
        {icon}
      </span>
      <div className="text-white text-xl md:text-2xl font-bold">{value}</div>
      <div className="text-xs md:text-base text-brand-gray-2 font-medium">{title}</div>
    </div>
  )
}

export default StatCard