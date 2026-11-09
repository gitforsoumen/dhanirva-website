import svgPaths from "./svg-nshu3au999";

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center relative shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[48px] relative shrink-0 text-[#101828] text-[48px] text-center w-full">What Our Users Say</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1c8f7580} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      {[...Array(5).keys()].map((_, i) => (
        <Icon key={i} />
      ))}
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[104px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] left-0 text-[#4a5565] text-[16px] top-[7.56px] w-[291px]">{`"Dhanirva transformed how I invest. The expert consultation helped me build a diversified portfolio that matches my goals perfectly."`}</p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[21.694px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[21.694px]">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-0.33px] whitespace-pre">RK</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#2b7fff] relative rounded-[2.98262e+07px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Text />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[24px] left-0 text-[#1a1a1a] text-[16px] text-nowrap top-[6.67px] whitespace-pre">Rajesh Kumar</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#6a7282] text-[14px] text-nowrap top-[5.89px] whitespace-pre">Software Engineer</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[44px] relative shrink-0 w-[121.889px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[44px] items-start relative w-[121.889px]">
        <Paragraph1 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[16px] h-[48px] items-center relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#eff6fd] box-border content-stretch flex flex-col gap-[24px] h-[292px] items-start pb-0 pt-[32px] px-[32px] relative rounded-[8px] shrink-0 w-[362.667px]" data-name="Container">
      <Container />
      <Paragraph />
      <Container3 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3a441c00} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      {[...Array(5).keys()].map((_, i) => (
        <Icon1 key={i} />
      ))}
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[104px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] left-0 text-[#4a5565] text-[16px] top-[7.56px] w-[293px]">{`"Finally, all my investments in one place! The AI insights are incredibly accurate and have helped me optimize my returns."`}</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[20.736px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[20.736px]">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-0.33px] whitespace-pre">PS</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#00b8db] relative rounded-[2.98262e+07px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.014px] py-0 relative size-[48px]">
        <Text1 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[24px] left-0 text-[#1a1a1a] text-[16px] text-nowrap top-[6.67px] whitespace-pre">Priya Sharma</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#6a7282] text-[14px] text-nowrap top-[5.89px] whitespace-pre">Business Owner</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[44px] relative shrink-0 w-[106.403px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[44px] items-start relative w-[106.403px]">
        <Paragraph4 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[16px] h-[48px] items-center relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#eff6fd] box-border content-stretch flex flex-col gap-[24px] h-[292px] items-start pb-0 pt-[32px] px-[32px] relative rounded-[8px] shrink-0 w-[362.667px]" data-name="Container">
      <Container5 />
      <Paragraph3 />
      <Container8 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3a441c00} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[24px] size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3a441c00} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[48px] size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3a441c00} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[72px] size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2c82c900} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[96px] size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2c82c900} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Icon2 />
      <Icon3 />
      <Icon4 />
      <Icon5 />
      <Icon6 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[104px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] left-0 text-[#4a5565] text-[16px] top-[7.56px] w-[294px]">{`"As a first-time investor, I was nervous. The simple interface and educational content made it easy to get started with confidence."`}</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[21.972px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[21.972px]">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-0.33px] whitespace-pre">AP</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#155dfc] relative rounded-[2.98262e+07px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Text2 />
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[24px] left-0 text-[#1a1a1a] text-[16px] text-nowrap top-[6.67px] whitespace-pre">Amit Patel</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#6a7282] text-[14px] text-nowrap top-[5.89px] whitespace-pre">Marketing Manager</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[44px] relative shrink-0 w-[128.417px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[44px] items-start relative w-[128.417px]">
        <Paragraph7 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[16px] h-[48px] items-center relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Container12 />
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#eff6fd] box-border content-stretch flex flex-col gap-[24px] h-[292px] items-start pb-0 pt-[32px] px-[32px] relative rounded-[8px] shrink-0 w-[362.667px]" data-name="Container">
      <Container10 />
      <Paragraph6 />
      <Container13 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1c8f7580} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      {[...Array(5).keys()].map((_, i) => (
        <Icon7 key={i} />
      ))}
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[104px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] left-0 text-[#4a5565] text-[16px] top-[7.56px] w-[291px]">{`"Dhanirva has been a game changer for my retirement planning. The personalized strategies give me peace of mind for the future."`}</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[21.694px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[21.694px]">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-0.33px] whitespace-pre">SM</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#2b7fff] relative rounded-[2.98262e+07px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Text3 />
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[24px] left-0 text-[#1a1a1a] text-[16px] text-nowrap top-[6.67px] whitespace-pre">Sneha Mehta</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#6a7282] text-[14px] text-nowrap top-[5.89px] whitespace-pre">Financial Analyst</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[44px] relative shrink-0 w-[121.889px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[44px] items-start relative w-[121.889px]">
        <Paragraph10 />
        <Paragraph11 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[16px] h-[48px] items-center relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#eff6fd] box-border content-stretch flex flex-col gap-[24px] h-[292px] items-start pb-0 pt-[32px] px-[32px] relative rounded-[8px] shrink-0 w-[362.667px]" data-name="Container">
      <Container15 />
      <Paragraph9 />
      <Container18 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Container">
      <Container4 />
      <Container9 />
      <Container14 />
      <Container19 />
    </div>
  );
}

export default function Frame1000008312() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-center relative size-full">
      <Frame />
      <Container20 />
    </div>
  );
}