import svgPaths from "./svg-zcfcg98qxq";

function Logo() {
  return (
    <div className="absolute bottom-[2.86%] left-0 right-[1.03%] top-[5.71%]" data-name="Logo">
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
    <div className="absolute bottom-[2.86%] contents left-0 right-[1.03%] top-[5.71%]" data-name="Logo">
      <Logo />
    </div>
  );
}

function Component35X() {
  return (
    <div className="absolute h-[35px] left-0 overflow-clip top-0 w-[35.363px]" data-name="35x35">
      <Logo1 />
    </div>
  );
}

function MaskGroup() {
  return <div className="absolute contents left-[calc(50%+25.26px)] top-[9px] translate-x-[-50%]" data-name="Mask group" />;
}

function Logo2() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Logo">
      <Component35X />
      <MaskGroup />
    </div>
  );
}

function Dhanirva() {
  return (
    <div className="absolute h-[11.92px] left-[49.54px] top-[11.08px] w-[141.408px]" data-name="DHANIRVA">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 142 12">
        <g id="DHANIRVA">
          <path d={svgPaths.pf38b300} fill="var(--fill-0, #1448E7)" id="Vector" />
          <path d={svgPaths.p1e7030f0} fill="var(--fill-0, #1448E7)" id="Vector_2" />
          <path d={svgPaths.pd531780} fill="var(--fill-0, #1448E7)" id="Vector_3" />
          <path d={svgPaths.pd45d00} fill="var(--fill-0, #1448E7)" id="Vector_4" />
          <path d={svgPaths.p2969f380} fill="var(--fill-0, #1448E7)" id="Vector_5" />
          <path d={svgPaths.p1db5cf00} fill="var(--fill-0, #1448E7)" id="Vector_6" />
          <path d={svgPaths.p1d00200} fill="var(--fill-0, #1448E7)" id="Vector_7" />
          <path d={svgPaths.p119f4000} fill="var(--fill-0, #1448E7)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

export default function Logo3() {
  return (
    <div className="relative size-full" data-name="Logo">
      <Logo2 />
      <Dhanirva />
    </div>
  );
}