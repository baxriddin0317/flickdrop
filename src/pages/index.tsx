import CaseCard from "@/components/cards/CaseCard";
import BonusCard from "@/components/cards/BonusCard";
import GiveawayCard from "@/components/cards/GiveawayCard";
import FeatureCard from "@/components/cards/FeatureCard";

export default function Home() {
  const available_cases_first = [
    {
      id: 1,
      preview: "/cases/case-preview-19.png",
      name: "Energy Anarhy",
      price: 1052.52,
    },
    {
      id: 2,
      preview: "/cases/case-preview-20.png",
      name: "Energy Anarhy",
      price: 1052.52,
    },
    {
      id: 3,
      preview: "/cases/case-preview-21.png",
      name: "Energy Anarhy",
      price: 1052.52,
    },
    {
      id: 4,
      preview: "/cases/case-preview-22.png",
      name: "Energy Anarhy",
      price: 1052.52,
    },
    {
      id: 5,
      preview: "/cases/case-preview-23.png",
      name: "Energy Anarhy",
      price: 1052.52,
    },
    {
      id: 6,
      preview: "/cases/case-preview-24.png",
      name: "Energy Anarhy",
      price: 1052.52,
    },
  ];

  const available_giveaways = [
    {
      id: 1,
      preview: "/giveaways/giveaway-bg-1.png",
      type: "★ Skeleton Knife",
      name: "Tiger Tooth",
      currency: "",
      value: "1052.52",
      date_ends: new Date("2026-01-01"),
      color: "#052079",
      onClick: () => {
        console.log("giveaway clicked");
      }
    },
  ];

  const available_cases_second = [
    {
      id: 1,
      preview: "/cases/case-preview-1.png",
      name: "Energy Anarhy",
      price: 1052.52,
    },
    {
      id: 2,
      preview: "/cases/case-preview-2.png",
      name: "Energy Anarhy",
      price: 1052.52,
    },
    {
      id: 3,
      preview: "/cases/case-preview-3.png",
      name: "Energy Anarhy",
      price: 1052.52,
    },
    {
      id: 4,
      preview: "/cases/case-preview-4.png",
      name: "Energy Anarhy",
      price: 1052.52,
    },
    {
      id: 5,
      preview: "/cases/case-preview-5.png",
      name: "Energy Anarhy",
      price: 1052.52,
    },
    {
      id: 6,
      preview: "/cases/case-preview-6.png",
      name: "Energy Anarhy",
      price: 1052.52,
    },
    {
      id: 7,
      preview: "/cases/case-preview-7.png",
      name: "Energy Anarhy",
      price: 1052.52,
    },
    {
      id: 8,
      preview: "/cases/case-preview-8.png",
      name: "Energy Anarhy",
      price: 1052.52,
    },
    {
      id: 9,
      preview: "/cases/case-preview-9.png",
      name: "Energy Anarhy",
      price: 1052.52,
    },
    {
      id: 10,
      preview: "/cases/case-preview-10.png",
      name: "Energy Anarhy",
      price: 1052.52,
    },
    {
      id: 11,
      preview: "/cases/case-preview-11.png",
      name: "Energy Anarhy",
      price: 1052.52,
    },
    {
      id: 12,
      preview: "/cases/case-preview-12.png",
      name: "Energy Anarhy",
      price: 1052.52,
    },
    {
      id: 13,
      preview: "/cases/case-preview-13.png",
      name: "Energy Anarhy",
      price: 1052.52,
    },
    {
      id: 14,
      preview: "/cases/case-preview-14.png",
      name: "Energy Anarhy",
      price: 1052.52,
    },
    {
      id: 15,
      preview: "/cases/case-preview-15.png",
      name: "Energy Anarhy",
      price: 1052.52,
    },
    {
      id: 16,
      preview: "/cases/case-preview-16.png",
      name: "Energy Anarhy",
      price: 1052.52,
    },
    {
      id: 17,
      preview: "/cases/case-preview-17.png",
      name: "Energy Anarhy",
      price: 1052.52,
    },
    {
      id: 18,
      preview: "/cases/case-preview-18.png",
      name: "Energy Anarhy",
      price: 1052.52,
    },
  ];

  const available_deposit_bonuses = [
    {
      id: 1,
      preview: "/bonuses/deposit-bonus-1.png",
      name: "1nd Deposit",
      value: "+ 50%",
      date_ends: new Date("2026-01-01"),
      onClick: () => {
        console.log("deposit bonus clicked");
      },
      color: "#052079",
      btnColor: "#4083e9",
    },
    {
      id: 2,
      preview: "/bonuses/deposit-bonus-2.png",
      name: "2nd Deposit",
      value: "+ 25%",
      date_ends: new Date("2026-01-01"),
      onClick: () => {
        console.log("deposit bonus clicked");
        console.log("deposit bonus clicked");
      },
      color: "#73060d",
      btnColor: "#ff0105",
    },
    {
      id: 3,
      preview: "/bonuses/deposit-bonus-3.png",
      name: "3rd Deposit",
      value: "+ 10%",
      date_ends: new Date("2026-01-01"),
      onClick: () => {
        console.log("deposit bonus clicked");
      },
      color: "#5e0676",
      btnColor: "#d501ff",
    },
    {
      id: 4,
      preview: "/bonuses/deposit-bonus-4.png",
      name: "4th Deposit",
      value: "+ 5%",
      date_ends: new Date("2026-01-01"),
      onClick: () => {
        console.log("deposit bonus clicked");
      },
      color: "#057028",
      btnColor: "#01ff45",
    },
  ];

  const available_features = [
    {
      id: 1,
      name: "Быстрые выплаты",
      text: "мгновенные транзакции без задержек, чтобы вы всегда могли быстро получить свои средства.",
      background: "/features/feature-bg-1.png",
    },
    {
      id: 2,
      name: "Честный дроп",
      text: "прозрачная система розыгрышей и выпадений, где всё решает удача, без накруток.",
      background: "/features/feature-bg-2.png",
    },
    {
      id: 3,
      name: "Партнёрская программа",
      text: "возможность зарабатывать дополнительно, приглашая друзей и получая процент с их активности.",
      background: "/features/feature-bg-3.png",
    },
    {
      id: 4,
      name: "Ивенты каждую неделю",
      text: "регулярные акции, конкурсы и активности, которые делают игру интереснее и выгоднее.",
      background: "/features/feature-bg-4.png",
    },
    {
      id: 5,
      name: "Высокие бонусы",
      text: "щедрые награды и дополнительные привилегии для новых и постоянных участников.",
      background: "/features/feature-bg-5.png",
    },
  ];

  return (
    <div className="max-w-[1728px] mx-auto">
      <section className="grid grid-cols-6 gap-2.5">
        {available_cases_first.map((item, id) => (
          <CaseCard
            key={id}
            preview={item.preview}
            name={item.name}
            price={item.price}
          />
        ))}
      </section>
      <section className="max-w-[1664px] mx-auto mt-12 mb-14 w-full grid grid-cols-4 gap-2.5">
        {available_giveaways.map((item, id) => (
          <GiveawayCard
            key={id}
            color={item.color}
            date_ends={item.date_ends}
            type={item.type}
            name={item.name}
            currency={item.currency}
            onClick={item.onClick}
            preview={item.preview}
            value={item.value}
          />
        ))}
      </section>
      <section className="grid grid-cols-6 gap-2.5">
        {available_cases_second.map((item, id) => (
          <CaseCard
            key={id}
            preview={item.preview}
            name={item.name}
            price={item.price}
          />
        ))}
      </section>
      <section className="max-w-[1664px] mx-auto mt-12 mb-14 w-full grid grid-cols-4 gap-2.5">
        {available_deposit_bonuses.map((item, id) => (
          <BonusCard
            key={id}
            color={item.color}
            btnColor={item.btnColor}
            date_ends={item.date_ends}
            name={item.name}
            onClick={item.onClick}
            preview={item.preview}
            value={item.value}
          />
        ))}
      </section>
      <section className="w-[1664px] mx-auto">
        <h2 className="font-family-gilroy italic uppercase text-white text-center">
          <b className="text-[46px] leading-14">Преимущества</b>
          <br />
          <span className="text-[43px] leading-[52px]">Проекта</span>
        </h2>
        <div className="mt-[60px] grid grid-cols-6 gap-2.5">
          {available_features.map((item, id) => (
            <FeatureCard
              key={id}
              background={item.background}
              name={item.name}
              text={item?.text}
            />
          ))}
          <div className="pt-10 px-[23px] min-h-[420px] relative overflow-hidden box-border border border-[var(--Stroke,rgba(255,255,255,0.26))] rounded-[24px] bg-[linear-gradient(180deg,rgba(24,27,39,1),rgba(19,21,28,1)_100%),linear-gradient(180deg,rgba(24,27,39,1),rgba(7.2,8.95,15.94,1)_100%)]">
            <h3 className="font-family-gilroy text-[41px] font-bold leading-[38px] italic uppercase text-white">
              Flicker <br />
              Drop
            </h3>
            <img
              className="absolute top-[22px] left-[-50px] min-w-[527px] w-[527px] max-w-[527px]"
              src={"/features/feature-bg-6.png"}
              alt=""
            />
            <img
              className="absolute bottom-0 left-0 w-full"
              src={"/features/feature-bg-all.png"}
              alt=""
            />
            <p className="absolute bottom-[28px] left-[23px] font-family-gilroy text-[24px] leading-[27px] text-white z-10">
              Лучший сайт в <br />
              сфере <br />
              опенкейсов!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
