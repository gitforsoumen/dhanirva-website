import svgPaths from "./svg-jetm10tpfg";

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

export default function Container() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[2.98262e+07px] w-fit" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.889px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[2.98262e+07px]" />
      <div className="w-fit">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[15px] py-[10px] relative shrink-0">
          <Frame />
        </div>
      </div>
    </div>
  );
}