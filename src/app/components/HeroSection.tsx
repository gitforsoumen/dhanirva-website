import svgPaths from "../imports/svg-qa4qtcfnna";
import imgRectangle from "figma:asset/e887b2712cade5c5401477c2b85dbaf2fec3fff5.png";
import imgGeminiGeneratedImageCck026Cck026Cck01 from "figma:asset/d631102ff8525925ac6d83e42e7a99dd74102390.png";
import AppStoreButtons from "../imports/Frame1000008323-2015-1710";
import { motion } from "motion/react";

function Group3() {
  return (
    <motion.div
      className="absolute left-1/2 md:left-[783px] size-[500px] md:size-[920.652px] top-[100px] md:top-[137px] -translate-x-1/2 md:translate-x-0"
      animate={{
        scale: [1, 1.1, 1],
        rotate: [0, 360],
      }}
      transition={{
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 921 921">
        <g id="Group 38974" opacity="0.5">
          <circle cx="460.326" cy="460.326" fill="var(--fill-0, white)" id="Ellipse 986" opacity="0.05" r="460.326" />
          <circle cx="461.015" cy="459.637" fill="var(--fill-0, white)" id="Ellipse 987" opacity="0.04" r="348.001" />
          <circle cx="461.016" cy="461.016" fill="var(--fill-0, white)" id="Ellipse 988" opacity="0.06" r="246.013" />
        </g>
      </svg>
    </motion.div>
  );
}

function Bg() {
  return (
    <div className="absolute contents left-0 top-0" data-name="BG">
      <div className="absolute bg-black h-full left-0 top-0 w-full" data-name="BG" />
      <div className="absolute hidden md:flex h-[560.792px] items-center justify-center left-[812px] top-[202px] w-[628.742px]" style={{ "--transform-inner-width": "394.5", "--transform-inner-height": "518.234375" } as React.CSSProperties}>
        <div className="flex-none rotate-[247.852deg]">
          <div className="h-[518.247px] relative w-[394.526px]">
            <div className="absolute inset-[-40.52%_-53.23%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 815 939">
                <g filter="url(#filter0_f_2015_94)" id="Ellipse 33">
                  <path d={svgPaths.p27d50b32} fill="url(#paint0_linear_2015_94)" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="938.247" id="filter0_f_2015_94" width="814.526" x="0" y="-3.59215e-06">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_2015_94" stdDeviation="105" />
                  </filter>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2015_94" x1="210" x2="656.214" y1="210" y2="259.169">
                    <stop stopColor="#6DDCFF" />
                    <stop offset="1" stopColor="#7F60F9" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-repeat bg-size-[220px_220px] bg-top-left h-full left-0 mix-blend-overlay opacity-[0.22] top-0 w-full" data-name="Rectangle" style={{ backgroundImage: `url('${imgRectangle}')` }} />
      <Group3 />
    </div>
  );
}

function Hero() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Hero">
      <Bg />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute h-full left-0 overflow-clip top-0 w-full">
      <Hero />
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

function Frame2() {
  return (
    <AppStoreButtons />
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
      <Container />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold font-semibold justify-center leading-[48px] md:leading-[72px] not-italic relative shrink-0 text-[36px] md:text-[60px] text-white tracking-[1px] md:tracking-[2px] w-full max-w-[742px]">
        <p className="mb-0 text-[36px] md:text-[60px]">Your Equity</p>
        <p className="mb-0">
          <span>{`Companion. `}</span>
          <span className="text-[#fe6400]">{`All in `}</span>
        </p>
        <p className="text-[#fe6400]">One App.</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[16px] md:text-[20px] text-white w-full max-w-[567px]">
        <p className="leading-[26px] md:leading-[32px]">Get expert-backed insights, track your entire portfolio, and invest confidently. Make smarter decisions with AI-powered analytics and personalized consultation.</p>
      </div>
      <Frame2 />
    </div>
  );
}

function Stats() {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-[60px] w-full">
      <div className="flex flex-col gap-[8px]">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[40px] text-[36px] text-white">500+</p>
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] text-[#bedbff] text-[14px]">Expert Analysts</p>
      </div>
      <div className="flex flex-col gap-[8px]">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[40px] text-[36px] text-white">10K+</p>
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] text-[#bedbff] text-[14px]">Active Investors</p>
      </div>
      <div className="flex flex-col gap-[8px]">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[40px] text-[36px] text-white">₹50Cr+</p>
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] text-[#bedbff] text-[14px]">Assets Managed</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] md:gap-[60px] items-start left-4 md:left-[152px] top-[120px] md:top-[192px] right-4 md:right-auto w-auto md:w-[650px] z-10">
      <Frame />
      <Stats />
    </div>
  );
}

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-[700px] md:h-[906px] overflow-hidden">
      <Frame3 />
      <Frame1 />
      <div className="absolute h-[400px] md:h-[588px] right-4 md:left-[1053px] top-[500px] md:top-[181px] w-[300px] md:w-[398px] opacity-50 md:opacity-100" data-name="Gemini_Generated_Image_cck026cck026cck0 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="DHANIRVA App Dashboard" className="absolute h-[143.15%] left-[-141.05%] max-w-none top-[-17.99%] w-[379.06%]" src={imgGeminiGeneratedImageCck026Cck026Cck01} />
        </div>
      </div>
    </div>
  );
}
