import svgPaths from "./svg-ys0hmw2ovy";
import imgRectangle from "figma:asset/e887b2712cade5c5401477c2b85dbaf2fec3fff5.png";

function Group() {
  return (
    <div className="absolute left-[783px] size-[920.652px] top-[137px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 921 921">
        <g id="Group 38974" opacity="0.5">
          <circle cx="460.326" cy="460.326" fill="var(--fill-0, white)" id="Ellipse 986" opacity="0.05" r="460.326" />
          <circle cx="461.015" cy="459.637" fill="var(--fill-0, white)" id="Ellipse 987" opacity="0.04" r="348.001" />
          <circle cx="461.016" cy="461.016" fill="var(--fill-0, white)" id="Ellipse 988" opacity="0.06" r="246.013" />
        </g>
      </svg>
    </div>
  );
}

function Bg() {
  return (
    <div className="absolute contents left-0 top-0" data-name="BG">
      <div className="absolute bg-black h-[906px] left-0 top-0 w-[1600px]" data-name="BG" />
      <div className="absolute flex h-[560.792px] items-center justify-center left-[812px] top-[202px] w-[628.742px]" style={{ "--transform-inner-width": "394.5", "--transform-inner-height": "518.234375" } as React.CSSProperties}>
        <div className="flex-none rotate-[247.852deg]">
          <div className="h-[518.247px] relative w-[394.526px]">
            <div className="absolute inset-[-40.52%_-53.23%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 815 939">
                <g filter="url(#filter0_f_2008_2053)" id="Ellipse 33">
                  <path d={svgPaths.p27d50b32} fill="url(#paint0_linear_2008_2053)" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="938.247" id="filter0_f_2008_2053" width="814.526" x="0" y="-3.59215e-06">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_2008_2053" stdDeviation="105" />
                  </filter>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2008_2053" x1="210" x2="656.214" y1="210" y2="259.169">
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
      <Group />
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

function Frame() {
  return (
    <div className="absolute h-[906px] left-0 overflow-clip top-0 w-[1600px]">
      <Hero />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="relative size-full">
      <Frame />
    </div>
  );
}