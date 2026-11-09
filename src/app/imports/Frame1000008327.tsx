import svgPaths from "./svg-nwcw328obu";
import imgImageWithFallback from "figma:asset/1dc0048ee9ee73b8f5a6a6135e0a19e9dc73d7d6.png";
import imgImageWithFallback1 from "figma:asset/807159f32325201600bda937c28db51b2081ff60.png";
import imgImageWithFallback2 from "figma:asset/7892605606200737fdb86fbf5d693add64cbdc4b.png";

function Container() {
  return (
    <div className="bg-[#ffe8ee] box-border content-stretch flex gap-[10px] items-center justify-center px-[15px] py-[8px] relative rounded-[2.98262e+07px] shrink-0" data-name="Container">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#fa106a] text-[14px] text-center text-nowrap whitespace-pre">Latest Insights</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center relative shrink-0 w-[959px]">
      <Container />
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[48px] min-w-full relative shrink-0 text-[#101828] text-[48px] text-center w-[min-content]">{`Investment Insights & Tips`}</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] min-w-full relative shrink-0 text-[#4a5565] text-[20px] text-center w-[min-content]">Stay informed with expert advice, market trends, and financial strategies to help you make smarter investment decisions</p>
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="absolute h-[224px] left-0 top-0 w-[387.556px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute bg-[#2b7fff] box-border content-stretch flex h-[22.222px] items-start left-[16px] px-[12px] py-[4px] rounded-[2.98262e+07px] top-[18.22px] w-[138.736px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">Investment Strategy</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[224px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback />
      <Text />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[56px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] left-0 text-[#4a5565] text-[16px] top-0 w-[316px]">Learn how to spread your investments across different asset classes to minimi...</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[14px] mx-[0px] my-[6px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M4.66699 1.1665V3.49984" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M9.33301 1.1665V3.49984" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24a2b500} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M1.75 5.83333H12.25" id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#6a7282] text-[14px] text-nowrap top-0 whitespace-pre">Dec 1, 2024</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[96.194px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center relative w-[96.194px]">
        <Icon />
        <Text1 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_2015_724)" id="Icon">
          <path d="M7 3.5V7L9.33333 8.16667" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p2f0c40} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_2015_724">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[69.792px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#6a7282] text-[14px] text-nowrap top-0 whitespace-pre">5 min read</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[87.792px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center relative w-[87.792px]">
        <Icon1 />
        <Text2 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[195.986px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[20px] items-center relative w-[195.986px]">
        <Container2 />
        <Container3 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[42.42px] size-[16px] top-[5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33301 8H12.6663" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[24px] relative shrink-0 w-[58.417px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[58.417px]">
        <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-[19px] text-[#155dfc] text-[16px] text-center text-nowrap top-[6.67px] translate-x-[-50%] whitespace-pre mt-[-7px] mr-[0px] mb-[0px] ml-[0px]">Read</p>
        <Icon5 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[40.889px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.889px_0px_0px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="flex h-full items-center justify-between w-full">
          <Container4 />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[12px] items-start pb-0 pt-[24px] px-[24px] relative shrink-0" data-name="Container">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#1a1a1a] text-[16px] w-[307px]">5 Essential Tips for Building a Diversified Portfolio</p>
      <Paragraph />
      <Container5 />
    </div>
  );
}

function Article() {
  return (
    <div className="bg-white h-[438.667px] relative rounded-[8px] shrink-0 w-[389.333px]" data-name="Article">
      <div className="box-border content-stretch flex flex-col h-[438.667px] items-start overflow-clip p-[0.889px] relative rounded-[inherit] w-[389.333px]">
        <Container1 />
        <Container6 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.889px] border-gray-100 border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="absolute h-[224px] left-0 top-0 w-[387.556px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute bg-[#ad46ff] box-border content-stretch flex h-[22.222px] items-start left-[16px] px-[12px] py-[4px] rounded-[2.98262e+07px] top-[18.22px] w-[111.125px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">Market Insights</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[224px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback1 />
      <Text3 />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[#1a1a1a] text-[16px] top-[6.67px] w-[258px]">{`Understanding Market Volatility: A Beginner's Guide`}</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[56px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] left-0 text-[#4a5565] text-[16px] top-0 w-[323px]">Discover what causes market fluctuations and how to navigate them with confiden...</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M4.66699 1.1665V3.49984" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M9.33301 1.1665V3.49984" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24a2b500} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M1.75 5.83333H12.25" id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#6a7282] text-[14px] text-nowrap top-0 whitespace-pre">Nov 28, 2024</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[107.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center relative w-[107.458px]">
        <Icon3 />
        <Text4 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_2015_724)" id="Icon">
          <path d="M7 3.5V7L9.33333 8.16667" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p2f0c40} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_2015_724">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#6a7282] text-[14px] text-nowrap top-0 whitespace-pre">7 min read</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[87.278px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center relative w-[87.278px]">
        <Icon4 />
        <Text5 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[206.736px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[20px] items-center relative w-[206.736px]">
        <Container8 />
        <Container9 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[42.42px] size-[16px] top-[5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33301 8H12.6663" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[58.417px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[58.417px]">
        <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-[19px] text-[#155dfc] text-[16px] text-center text-nowrap top-[6.67px] translate-x-[-50%] whitespace-pre mt-[-7px] mr-[0px] mb-[0px] ml-[0px]">Read</p>
        <Icon6 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="box-border content-stretch flex h-[40.889px] items-center justify-between pb-0 pt-[0.889px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.889px_0px_0px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Container10 />
      <Button1 />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[212.889px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] h-[212.889px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Heading />
          <Paragraph1 />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Article1() {
  return (
    <div className="bg-white h-[438.667px] relative rounded-[8px] shrink-0 w-[389.333px]" data-name="Article">
      <div className="box-border content-stretch flex flex-col h-[438.667px] items-start overflow-clip p-[0.889px] relative rounded-[inherit] w-[389.333px]">
        <Container7 />
        <Container12 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.889px] border-gray-100 border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="absolute h-[224px] left-0 top-0 w-[387.556px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute bg-[#ff6900] box-border content-stretch flex h-[22.222px] items-start left-[16px] px-[12px] py-[4px] rounded-[2.98262e+07px] top-[18.22px] w-[111.444px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">Wealth Building</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[224px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback2 />
      <Text6 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[#1a1a1a] text-[16px] top-[6.67px] w-[297px]">The Power of Compound Interest: Start Early, Retire Rich</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[56px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] left-0 text-[#4a5565] text-[16px] top-0 w-[333px]">Explore how starting your investment journey early can lead to exponential wea...</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M4.66699 1.1665V3.49984" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M9.33301 1.1665V3.49984" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24a2b500} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M1.75 5.83333H12.25" id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#6a7282] text-[14px] text-nowrap top-0 whitespace-pre">Nov 25, 2024</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[20px] relative shrink-0 w-[107.278px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center relative w-[107.278px]">
        <Icon7 />
        <Text7 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_2015_724)" id="Icon">
          <path d="M7 3.5V7L9.33333 8.16667" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p2f0c40} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_2015_724">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#6a7282] text-[14px] text-nowrap top-0 whitespace-pre">6 min read</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[20px] relative shrink-0 w-[88px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center relative w-[88px]">
        <Icon8 />
        <Text8 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[20px] relative shrink-0 w-[207.278px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[20px] items-center relative w-[207.278px]">
        <Container14 />
        <Container15 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-[42.42px] size-[16px] top-[5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33301 8H12.6663" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[58.417px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[58.417px]">
        <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-[19px] text-[#155dfc] text-[16px] text-center text-nowrap top-[6.67px] translate-x-[-50%] whitespace-pre mt-[-7px] mr-[0px] mb-[0px] ml-[0px]">Read</p>
        <Icon9 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="box-border content-stretch flex h-[40.889px] items-center justify-between pb-0 pt-[0.889px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.889px_0px_0px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Container16 />
      <Button2 />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[212.889px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] h-[212.889px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Heading1 />
          <Paragraph2 />
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Article2() {
  return (
    <div className="bg-white h-[438.667px] relative rounded-[8px] shrink-0 w-[389.333px]" data-name="Article">
      <div className="box-border content-stretch flex flex-col h-[438.667px] items-start overflow-clip p-[0.889px] relative rounded-[inherit] w-[389.333px]">
        <Container13 />
        <Container18 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.889px] border-gray-100 border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[30px] items-center justify-center relative shrink-0" data-name="Container">
      <Article />
      <Article1 />
      <Article2 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M3.75 9H14.25" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M9 3.75L14.25 9L9 14.25" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#155dfc] box-border content-stretch flex gap-[8px] items-center px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-name="Button">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-nowrap text-white whitespace-pre">View All Articles</p>
      <Icon10 />
    </div>
  );
}

export default function Frame1000008327() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-center relative size-full">
      <Frame />
      <Container19 />
      <Button3 />
    </div>
  );
}