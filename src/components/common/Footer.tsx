import Image from "next/image"
import { BitLogo, FooterLogo, MasterLogo, MirLogo, QiwiLogo, VisaLogo } from "../icons"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="relative z-0">
      <div className="relative max-w-[1928px] mx-auto overflow-hidden h-[420px] z-20">
        <div className="size-[760px] absolute z-20 -left-1/3 top-2/3 rounded-full bg-[rgba(164,70,70,0.36)] blur-[185.4499969482422px]"></div>
        <div className="size-[760px] absolute z-20 -right-[20%] top-2/3 rounded-full bg-[rgba(70,129,164,0.36)] blur-[185.4499969482422px]"></div>

        <div className="absolute w-full h-[700px] top-1/2 -translate-y-10 left-0 bg-[linear-gradient(0deg,#666_36.81%,rgba(0,0,0,0.00)_75.08%)]"></div>
      </div>

      <div className="relative hidden xl:block max-w-[1728px] mx-auto z-0">
        <div className="absolute left-0 2xl:left-[157px] bottom-0 z-0">
          <Image className="" src={'/imgs/footer-left.png'} width={515} height={774} alt="" />
        </div>
        <div className="absolute right-0 2xl:right-[80px] overflow-y-hidden bottom-0 z-0">
          <Image src={'/imgs/footer-right.png'} width={626} height={722} alt="" />
        </div>
      </div>

      <div className="absolute flex flex-col items-center justify-center gap-6 bottom-7 left-1/2 -translate-x-1/2 z-20">
        <FooterLogo />
        <div className='flex items-center gap-11'>
          <Link className='text-lg text-white font-medium' href={'/privacy-policy'}>Privacy Policy</Link>
          <Link className='text-lg text-white font-medium' href={'#'}>Public Offer</Link>
        </div>

        <div className='flex items-center gap-4'>
          <Link className='group' href={'#'}>
            <svg className='group-hover:fill-white fill-brand-gray' xmlns="http://www.w3.org/2000/svg" width={42} height={42} viewBox="0 0 42 42" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M33.2082 7.19571C34.8752 6.44881 36.6623 7.94879 36.3679 9.84785L32.8913 32.2786C32.556 34.4414 30.3238 35.6824 28.4591 34.6046C26.8988 33.7027 24.5838 32.3147 22.4974 30.864C21.4556 30.1395 18.2655 27.8167 18.6576 26.1632C18.9929 24.7493 24.3558 19.4372 27.4204 16.278C28.6242 15.0371 28.0759 14.3202 26.6542 15.4628C23.1275 18.2971 17.4654 22.6065 15.593 23.8193C13.941 24.8892 13.0784 25.0718 12.0496 24.8892C10.1708 24.5561 8.42889 24.0402 7.00679 23.4129C5.08473 22.5651 5.17835 19.7543 7.00549 18.9358L33.2082 7.19571Z" />
            </svg>
          </Link>
          <Link className='group' href={'#'}>
            <svg className='group-hover:fill-white fill-brand-gray' xmlns="http://www.w3.org/2000/svg" width={42} height={42} viewBox="0 0 42 42" fill="none">
              <path d="M26.5897 25.5899C24.8977 25.4809 23.5674 24.1057 23.5674 22.4246C23.5674 22.3685 23.5685 22.3124 23.5718 22.2563V22.264C23.5685 22.2112 23.5662 22.1495 23.5662 22.0868C23.5662 20.409 24.8988 19.0382 26.5808 18.9381H26.5897C28.2795 19.0283 29.6144 20.3958 29.6144 22.0703C29.6144 22.1385 29.6121 22.2057 29.6076 22.2728V22.264C29.611 22.319 29.6132 22.3839 29.6132 22.4488C29.6132 24.1244 28.2795 25.4941 26.5976 25.5888H26.5886L26.5897 25.5899ZM15.4297 25.5899C13.7376 25.4809 12.4073 24.1057 12.4073 22.4246C12.4073 22.3685 12.4084 22.3124 12.4118 22.2563V22.264C12.4084 22.2112 12.4062 22.1495 12.4062 22.0868C12.4062 20.409 13.7388 19.0382 15.4207 18.9381H15.4297C17.1195 19.0283 18.4543 20.3958 18.4543 22.0703C18.4543 22.1385 18.4521 22.2057 18.4476 22.2728V22.264C18.4509 22.3168 18.4532 22.3784 18.4532 22.4411C18.4532 24.1189 17.1206 25.4897 15.4386 25.5899H15.4297ZM32.6379 10.5194C30.6636 9.60401 28.3702 8.88008 25.9694 8.4609L25.8025 8.4367C25.7969 8.4356 25.7902 8.4345 25.7835 8.4345C25.7443 8.4345 25.7107 8.4554 25.6928 8.48621C25.4307 8.93839 25.1463 9.50279 24.8899 10.0815L24.8417 10.2036C23.6883 10.0221 22.358 9.91866 21.003 9.91866C19.648 9.91866 18.3177 10.0221 17.0198 10.2212L17.1643 10.2025C16.8619 9.50939 16.573 8.94609 16.2539 8.40039L16.2998 8.48511C16.2807 8.4532 16.246 8.4334 16.2068 8.4334C16.2012 8.4334 16.1945 8.4334 16.1889 8.4345C13.6212 8.87788 11.3278 9.6007 9.18448 10.5876L9.35358 10.5172C9.33454 10.5249 9.31886 10.5381 9.30878 10.5546C6.11284 15.0005 4.2002 20.5323 4.2002 26.503C4.2002 27.5009 4.25395 28.4856 4.35809 29.456L4.34801 29.3349C4.35137 29.3668 4.36817 29.3932 4.39168 29.4119C6.78808 31.1734 9.57418 32.5926 12.5809 33.5245L12.778 33.5773C12.7869 33.5806 12.7981 33.5817 12.8093 33.5817C12.8452 33.5817 12.8765 33.5652 12.8955 33.5399C13.4946 32.7477 14.0646 31.85 14.5585 30.9082L14.6111 30.7982C14.6178 30.785 14.6223 30.7685 14.6223 30.7509C14.6223 30.7058 14.5932 30.6684 14.5529 30.653H14.5517C13.5305 30.2657 12.6671 29.8531 11.8452 29.38L11.9314 29.4262C11.8989 29.4075 11.8776 29.3734 11.8776 29.3349C11.8776 29.3008 11.8944 29.27 11.9202 29.2513C12.096 29.1215 12.2729 28.9873 12.4409 28.8508C12.4588 28.8365 12.4823 28.8277 12.507 28.8277C12.5226 28.8277 12.5372 28.831 12.5495 28.8365H12.5484C15.021 30.0038 17.9235 30.686 20.9873 30.686C24.0511 30.686 26.9548 30.0039 29.5461 28.7859L29.4262 28.8365C29.4397 28.8299 29.4542 28.8266 29.471 28.8266C29.4957 28.8266 29.5192 28.8354 29.5371 28.8497C29.7051 28.9862 29.8809 29.1226 30.0589 29.2513C30.0847 29.2711 30.1015 29.3019 30.1015 29.336C30.1015 29.3745 30.0802 29.4075 30.05 29.4262C29.3098 29.8608 28.4464 30.2723 27.5472 30.6123L27.4296 30.6519C27.3893 30.6673 27.3602 30.7058 27.3602 30.7498C27.3602 30.7674 27.3647 30.7839 27.3725 30.7982C27.9335 31.8544 28.5024 32.7499 29.1317 33.6004L29.0869 33.5377C29.106 33.5641 29.1384 33.5817 29.1732 33.5817C29.1844 33.5817 29.1955 33.5795 29.2056 33.5773C32.4139 32.5959 35.2045 31.1767 37.677 29.3613L37.6042 29.413C37.6289 29.3954 37.6445 29.3679 37.6479 29.3371C37.7453 28.4746 37.8002 27.4734 37.8002 26.4601C37.8002 20.5026 35.8831 14.9851 32.6233 10.4699L32.6815 10.5557C32.6726 10.5381 32.6569 10.5238 32.639 10.5161L32.6379 10.5194Z" />
            </svg>
          </Link>
        </div>

        <div>
          <h2 className="text-lg font-medium text-brand-gray-2 text-ellipsis text-center">© FlickerDrop</h2>
          <p className="text-lg max-w-[317px] xl:max-w-[375px] text-center font-medium text-brand-neutral-2">1600 Amphitheatre Pkwy, Mountain View, California, 94043, United States</p>
        </div>
        
        <div className="mt-14 flex flex-wrap items-center justify-center xl:justify-between gap-y-3 gap-x-9">
          <div className="order-2 lg:order-1">
            <VisaLogo />
          </div>
          <div className="order-3 lg:order-2">
            <MirLogo />
          </div>
          <div className="order-1 lg:order-3">
            <MasterLogo />
          </div>
          <div className="order-4 lg:order-4">
            <BitLogo/>
          </div>
          <div className="order-5 lg:order-5">
            <QiwiLogo />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer