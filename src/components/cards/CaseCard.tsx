import Image from "next/image";

interface props {
  preview: string;
  name: string;
  currency?: string;
  price: number;
}
const CaseCard = ({ preview, name, currency = "$", price }: props) => {
  return (
    <div className="pt-[251px] pb-17px relative">
      <div className="w-full absolute top-0 left-0 flex items-center justify-center">
        <img src={preview} alt="case preview"></img>
      </div>
      <h3 className="mb-3 font-family-gilroy font-bold text-center text-white">
        {name}
      </h3>
      <div className="py-2 px-2.5 mx-auto flex items-center w-fit rounded-[10px] bg-[#2f3345]">
        <span className="flex items-center justify-center min-w-[18px] h-[18px] mr-[5px] bg-[#768298] rounded-[50%]">
          {currency}
        </span>
        <span className="font-gilroy font-bold text-[#768298]">{price}</span>
      </div>
    </div>
  );
};

export default CaseCard;
