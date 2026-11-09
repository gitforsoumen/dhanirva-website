import svgPaths from "./svg-boga2wt2l1";
import imgPasteYourContent from "figma:asset/68d9ff70f8f76698c42d13f260c615df3751de8b.png";
import imgPasteYourContent1 from "figma:asset/3694b2c01aab15e6bc27d6dc56a8b7f7ce4d08ec.png";
import imgWhiteFront from "figma:asset/614ed18f9655de59ca6019a83f0bb3044c50f676.png";

function Heading() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[40px] left-0 text-[#101828] text-[36px] text-nowrap top-[8.22px] whitespace-pre">Unified Dashboard</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] left-0 text-[#4a5565] text-[18px] top-[7.67px] w-[496px]">See all your investments, performance, and insights in one beautiful view</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[112px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pae54200} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-blue-100 relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] left-0 text-[#101828] text-[18px] text-nowrap top-[7.67px] whitespace-pre">Real-time Updates</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#4a5565] text-[16px] text-nowrap top-[6.67px] whitespace-pre">Live market data synced every second</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[56px] relative shrink-0 w-[291.736px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[56px] items-start relative w-[291.736px]">
        <Container2 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[16px] h-[56px] items-start relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container3 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pae54200} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-green-100 relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon1 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] left-0 text-[#101828] text-[18px] text-nowrap top-[7.67px] whitespace-pre">Seamless Navigation</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#4a5565] text-[16px] text-nowrap top-[6.67px] whitespace-pre">Intuitive design for effortless use</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[56px] relative shrink-0 w-[248.819px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[56px] items-start relative w-[248.819px]">
        <Container6 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[16px] h-[56px] items-start relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container7 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pae54200} id="Vector" stroke="var(--stroke-0, #AD46FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-purple-100 relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon2 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[28px] left-0 text-[#101828] text-[18px] text-nowrap top-[7.67px] whitespace-pre">Customizable Views</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#4a5565] text-[16px] text-nowrap top-[6.67px] whitespace-pre">Personalize your dashboard layout</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[56px] relative shrink-0 w-[260.486px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[56px] items-start relative w-[260.486px]">
        <Container10 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[16px] h-[56px] items-start relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[216px] items-start relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container8 />
      <Container12 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[360px] items-start left-0 top-[120px] w-[544px]" data-name="Container">
      <Container />
      <Container13 />
    </div>
  );
}

function Screen() {
  return (
    <div className="absolute contents left-[773px] top-0" data-name="Screen">
      <div className="absolute h-[572.42px] left-[788.48px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-15.479px_-13.79px] mask-size-[294.935px_600px] top-[13.79px] w-[264.54px]" data-name="Paste your content" style={{ maskImage: `url('${imgPasteYourContent}')` }}>
        <img alt="" className="block max-w-none size-full" height="572.42" src={imgPasteYourContent1} width="264.54" />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[773px] top-0">
      <div className="absolute h-[600px] left-[773px] top-0 w-[294.934px]" data-name="White Front">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[141.7%] left-[-142.18%] max-w-none top-[-20.85%] w-[384.35%]" src={imgWhiteFront} />
        </div>
      </div>
      <Screen />
    </div>
  );
}

function Container15() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[31.2px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[31.2px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">₹</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex h-[10.391px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap whitespace-pre">Total Value</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[18.2px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[-0.02px] not-italic text-[#101828] text-[18px] text-nowrap top-[-1.29px] whitespace-pre">₹12.4L</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[28.591px] relative shrink-0 w-[40.526px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[28.591px] items-start relative w-[40.526px]">
        <Container16 />
        <Container17 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[5.2px] h-[31px] items-center relative shrink-0 w-[99px]" data-name="Container">
      <Container15 />
      <Container18 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[53px] items-start left-[699px] pb-[0.889px] pt-[10.978px] px-[10.978px] rounded-[8px] top-[140px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.889px] border-gray-100 border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <Container19 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[15.6px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2575b200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.29999" />
          <path d={svgPaths.p764e8c0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.29999" />
        </g>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[31.2px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[31.2px]">
        <Icon3 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex h-[10.391px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap whitespace-pre">Returns</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[18.2px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#00a63e] text-[18px] text-nowrap top-[-1.27px] whitespace-pre">+18.5%</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[28.591px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[28.591px] items-start relative">
        <Container22 />
        <Container23 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[5.2px] h-[31px] items-center relative shrink-0 w-[96px]" data-name="Container">
      <Container21 />
      <Container24 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[53px] items-start left-[984px] pb-[0.889px] pt-[10.978px] px-[10.978px] rounded-[8px] top-[384px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.889px] border-gray-100 border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <Container25 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[699px] top-0">
      <Group />
      <Container20 />
      <Container26 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <Container14 />
      <Group1 />
    </div>
  );
}