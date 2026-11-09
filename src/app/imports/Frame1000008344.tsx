import svgPaths from "./svg-jn06e9on85";
import imgRectangle6462 from "figma:asset/eccd6ff820883d8b11ef7c4d1b83894febacbe2b.png";
import imgFrame10000083261 from "figma:asset/811f4d013fc1bc4d909134bde122593124dd45b7.png";
import TrustBadges from "./Frame1000008322";
import AppStoreButtons from "./Frame1000008323-2015-1626";
import CTABadge from "./Container";

function Target() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="target-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="target-01">
          <path d={svgPaths.p2b841700} fill="var(--fill-0, white)" id="Vector (Stroke)" />
          <path d={svgPaths.p2f2e15f0} fill="var(--fill-0, white)" id="Vector (Stroke)_2" />
          <path d={svgPaths.p3014bb70} fill="var(--fill-0, white)" id="Vector (Stroke)_3" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0 w-full">
      <Target />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">Ready to Transform Your Financial Future?</p>
    </div>
  );
}

function Container() {
  return (
    <CTABadge />
  );
}

function Frame4() {
  return (
    <AppStoreButtons />
  );
}

function Frame3() {
  return (
    <TrustBadges />
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[30px] items-start left-[152px] top-1/2 -translate-y-1/2 w-[1000px]">
      <Container />
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[48px] min-w-full relative shrink-0 text-[48px] text-white w-[min-content]">Start Your Investment Journey Today</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#e9eaec] text-[20px] w-[588px]">Join thousands of investors who trust Dhanirva for expert financial guidance and smart investment strategies</p>
      <Frame4 />
      <Frame3 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents left-[19px] top-[19px]" data-name="Mask group">
      <div className="absolute bg-white left-[20px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[200px_200px] rounded-[5px] size-[200px] top-[20px]" style={{ maskImage: `url('${imgRectangle6462}')` }} />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute border border-solid border-white left-0 overflow-clip rounded-[5px] size-[240px] top-0">
      <MaskGroup />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute h-[273px] right-[152px] top-[127px] w-[240px]">
      <Frame5 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[120px] not-italic text-[18px] text-center text-nowrap text-white top-[260px] translate-x-[-50%] whitespace-pre">Scan to Download</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents right-[152px] top-[127px]">
      <Frame6 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[152px] top-[97px]">
      <Frame1 />
      <Group2 />
    </div>
  );
}

export default function Frame1000008344() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 w-full h-full" data-name="Frame 1000008326 1">
        <img alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src={imgFrame10000083261} />
      </div>
      <Group3 />
    </div>
  );
}