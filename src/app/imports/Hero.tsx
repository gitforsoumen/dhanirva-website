import svgPaths from "./svg-wpc9htkjtl";
import imgRectangle from "figma:asset/e887b2712cade5c5401477c2b85dbaf2fec3fff5.png";
import imgGeminiGeneratedImageCck026Cck026Cck01 from "figma:asset/d631102ff8525925ac6d83e42e7a99dd74102390.png";
import { imgRectangle5540 } from "./svg-d1k1l";

function Bg() {
  return (
    <div className="absolute contents left-0 top-0" data-name="BG">
      <div className="absolute bg-black h-[906px] left-0 top-0 w-[1600px]" data-name="BG" />
      <div className="absolute flex h-[560.792px] items-center justify-center left-[812px] top-[202px] w-[628.742px]" style={{ "--transform-inner-width": "394.5", "--transform-inner-height": "518.234375" } as React.CSSProperties}>
        <div className="flex-none rotate-[247.852deg]">
          <div className="h-[518.247px] relative w-[394.526px]">
            <div className="absolute inset-[-40.52%_-53.23%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 815 939">
                <g filter="url(#filter0_f_25_115)" id="Ellipse 33">
                  <path d={svgPaths.p27d50b32} fill="url(#paint0_linear_25_115)" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="938.247" id="filter0_f_25_115" width="814.526" x="0" y="-3.59215e-06">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_25_115" stdDeviation="105" />
                  </filter>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_25_115" x1="210" x2="656.214" y1="210" y2="259.169">
                    <stop stopColor="#6DDCFF" />
                    <stop offset="1" stopColor="#7F60F9" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-repeat bg-size-[220px_220px] bg-top-left h-[906px] left-0 mix-blend-overlay opacity-[0.22] top-0 w-[1600px]" data-name="Rectangle" style={{ backgroundImage: `url('${imgRectangle}')` }} />
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute contents leading-[24px] left-[501px] text-[16px] text-nowrap text-white top-[40px] whitespace-pre" data-name="Menu">
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium left-[501px] top-[40px]">Products</p>
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal left-[632px] top-[40px]">Features</p>
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal left-[755px] top-[40px]">Pricing</p>
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal left-[865px] top-[40px]">Support</p>
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute bottom-[2.86%] left-0 right-0 top-[5.71%]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 32">
        <g id="Logo">
          <path d={svgPaths.p3b155d80} fill="var(--fill-0, #C0CBE4)" id="Vector 1" />
          <path d={svgPaths.p66e8980} fill="var(--fill-0, #C0CBE4)" id="Vector 2" />
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
      <div className="absolute h-[18px] left-[43px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[7px_1.483px] mask-size-[139.041px_16.017px] top-[7.52px] w-[149px]" style={{ maskImage: `url('${imgRectangle5540}')` }} />
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
    <div className="absolute h-[35px] left-[152px] top-[34px] w-[184.041px]" data-name="Logo">
      <Logo2 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-gradient-to-r from-[#155dfc] h-[44px] left-[1291px] rounded-[8px] to-[#1447e6] top-[30px] w-[157px]" data-name="Button">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-[78.5px] text-[16px] text-center text-nowrap text-white top-[9.67px] translate-x-[-50%] whitespace-pre">Download App</p>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute contents left-[152px] top-[30px]" data-name="Header">
      <Menu />
      <Logo3 />
      <Button />
    </div>
  );
}

function Rocket() {
  return (
    <div className="absolute left-[15px] size-[18px] top-[9.61px]" data-name="rocket-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="rocket-01">
          <path d={svgPaths.p1f14d900} id="Vector" stroke="var(--stroke-0, white)" strokeLinejoin="round" />
          <path d="M12.7469 5.25H12.7559" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M1.875 16.125L5.625 12.375" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" />
          <path d="M6.375 16.125L7.875 14.625" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" />
          <path d="M1.875 11.625L3.375 10.125" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[38px] relative rounded-[2.98262e+07px] shrink-0 w-[236px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[2.98262e+07px]" />
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-[39px] text-[14px] text-nowrap text-white top-[8.78px] whitespace-pre">Smart Investment Solutions</p>
      <Rocket />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[128px] size-[20px] top-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1ae0b780} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[31px] top-[18px]">
      <p className="absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-[76.5px] text-[16px] text-center text-nowrap text-white top-[calc(50%-6px)] translate-x-[-50%] whitespace-pre">Get Started</p>
      <Icon />
    </div>
  );
}

function Button1() {
  return (
    <div className="[grid-area:1_/_1] bg-gradient-to-r from-[#ff6900] h-[56px] ml-0 mt-0 relative rounded-[8px] to-[#f54900] w-[180px]" data-name="Button">
      <Group />
    </div>
  );
}

function Button2() {
  return (
    <div className="[grid-area:1_/_1] bg-[rgba(255,255,255,0.1)] border-[0.889px] border-[rgba(255,255,255,0.2)] border-solid h-[56px] ml-[200px] mt-0 relative rounded-[8px] w-[160px]" data-name="Button">
      <p className="absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-1/2 text-[16px] text-center text-nowrap text-white top-[calc(50%-6.89px)] translate-x-[-50%] whitespace-pre">Watch Demo</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
      <Container />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold font-semibold justify-center leading-[72px] not-italic relative shrink-0 text-[60px] text-white tracking-[2px] w-[742px]">
        <p className="mb-0">
          <span>{`Smart Investment Guidance. `}</span>
          <span className="text-[#7ea2ef]">{`All in `}</span>
        </p>
        <p className="text-[#7ea2ef]">One App.</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[20px] text-white w-[567px]">
        <p className="leading-[32px]">Get expert-backed insights, track your entire portfolio, and invest confidently. Make smarter decisions with AI-powered analytics and personalized consultation.</p>
      </div>
      <Group1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[40px] left-0 text-[36px] text-nowrap text-white top-[0.22px] whitespace-pre">500+</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#bedbff] text-[14px] text-nowrap top-[-0.11px] whitespace-pre">Expert Analysts</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[8px] h-[68px] items-start ml-0 mt-0 relative w-[149.333px]" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[40px] left-0 text-[36px] text-nowrap text-white top-[0.22px] whitespace-pre">10K+</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#bedbff] text-[14px] text-nowrap top-[-0.11px] whitespace-pre">Active Investors</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[8px] h-[68px] items-start ml-[181.33px] mt-0 relative w-[149.333px]" data-name="Container">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[40px] left-0 text-[36px] text-nowrap text-white top-[0.22px] whitespace-pre">₹50Cr+</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#bedbff] text-[14px] text-nowrap top-[-0.11px] whitespace-pre">Assets Managed</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[8px] h-[68px] items-start ml-[362.67px] mt-0 relative w-[149.333px]" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Container3 />
      <Container6 />
      <Container9 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[60px] items-start left-[152px] top-[192px] w-[650px]">
      <Frame />
      <Group2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[152px] top-[181px]">
      <Frame1 />
      <div className="absolute h-[588px] left-[986px] top-[181px] w-[398px]" data-name="Gemini_Generated_Image_cck026cck026cck0 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[143.15%] left-[-141.05%] max-w-none top-[-17.99%] w-[379.06%]" src={imgGeminiGeneratedImageCck026Cck026Cck01} />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="relative size-full" data-name="Hero">
      <Bg />
      <Header />
      <Group3 />
    </div>
  );
}