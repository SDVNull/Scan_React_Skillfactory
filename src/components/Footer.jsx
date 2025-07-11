import Scan_logo_footer from "../assets/img/scan_logo_footer.png";
export default function Footer() {
  return (
    <footer className="mt-[118px] flex h-[137px] w-full max-w-[1440px] flex-row justify-between bg-[#029491] max-sm:mt-auto max-sm:w-[375px]">
      <img
        src={Scan_logo_footer}
        alt=""
        className="-mt-[12px] ml-[18px] h-[111px] w-[111px] sm:-mt-[2px] sm:ml-15 sm:h-[141px] sm:w-[141px]"
      />
      <div
        id="address"
        className="mt-[25px] mr-[45px] flex flex-col text-right font-['Inter'] text-[14px] tracking-[-1%] whitespace-pre-line text-white max-sm:mt-[25px] max-sm:mr-[19px]"
      >
        <span>
          {"г. Москва, Цветной б-р, 40 \n +7 495 771 21 11 \ninfo@skan.ru"}
        </span>
        <span className="mt-[16px]">{"Copyright. 2025"}</span>
      </div>
    </footer>
  );
}
