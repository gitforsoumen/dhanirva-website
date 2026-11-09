import svgPaths from "./svg-ygn2nzurdn";
import { imgRectangle5540 } from "./svg-f4eza";

function Menu() {
  return (
    <div className="absolute content-stretch flex gap-[40px] items-center leading-[24px] left-[491px] text-[16px] text-nowrap top-[26px] whitespace-pre" data-name="Menu">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#f64d01]">Home</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#101828]">Features</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#101828]">About</p>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#101828]">Blog</p>
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute bottom-[2.86%] left-0 right-0 top-[5.71%]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 32">
        <g id="Logo">
          <path d={svgPaths.p3affa600} fill="var(--fill-0, #1448E7)" id="Vector 1" />
          <path d={svgPaths.p66e8980} fill="var(--fill-0, #1448E7)" id="Vector 2" />
        </g>
      </svg>
    </div>
  );
}

function Logo1() {
  return (
    <div className="absolute bottom-[2.86%] contents left-0 right-0 top-[5.71%]" data-name="Logo">
      <Logo />
    </div>
  );
}

function Component35X() {
  return (
    <div className="absolute left-0 overflow-clip size-[35px] top-0" data-name="35x35">
      <Logo1 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents left-[50px] top-[9px]" data-name="Mask group">
      <div className="absolute bg-[#1448e7] h-[18px] left-[43px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[7px_1.483px] mask-size-[139.041px_16.017px] top-[7.52px] w-[149px]" style={{ maskImage: `url('${imgRectangle5540}')` }} />
    </div>
  );
}

function Logo2() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Logo">
      <Component35X />
      <MaskGroup />
    </div>
  );
}

function Logo3() {
  return (
    <div className="absolute h-[35px] left-[152px] top-[20px] w-[189px]" data-name="Logo">
      <Logo2 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-gradient-to-r from-[#155dfc] h-[44px] left-[1291px] rounded-[8px] to-[#1447e6] top-[16px] w-[157px]" data-name="Button">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-[78.5px] text-[16px] text-center text-nowrap text-white top-[9.67px] translate-x-[-50%] whitespace-pre">Download App</p>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute contents left-[152px] top-[16px]" data-name="Header">
      <Menu />
      <Logo3 />
      <Button />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative shadow-[0px_4px_20px_0px_rgba(0,0,0,0.07)] size-full">
      <Header />
    </div>
  );
}