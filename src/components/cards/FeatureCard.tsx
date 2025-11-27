import Image from "next/image";

interface props {
  name: string;
  text?: string;
  background: string;
}
const FeatureCard = ({ name, text, background }: props) => {
  return (
    <div className="pt-10 px-7 min-h-[420px] relative overflow-hidden box-border border border-[var(--Stroke,rgba(255,255,255,0.26))] rounded-[24px] bg-[linear-gradient(180deg,rgba(24,27,39,1),rgba(19,21,28,1)_100%),linear-gradient(180deg,rgba(24,27,39,1),rgba(7.2,8.95,15.94,1)_100%)]">
      <h3 className="font-family-gilroy text-[26px] font-bold leading-[30px] text-white">
        {name}
      </h3>
      <p className="mt-5 font-family-gilroy text-[16px] leading-5 text-[#444b5b]">
        {text}
      </p>
      <img
        className="absolute bottom-[-114px] left-[-72px] min-w-[293px] w-[293px] max-w-[293px] block transform-gpu origin-center -rotate-12"
        src={background}
        alt=""
      />
      <img
        className="absolute bottom-0 left-0 w-full"
        src={"/features/feature-bg-all.png"}
        alt=""
      />
    </div>
  );
};

export default FeatureCard;
