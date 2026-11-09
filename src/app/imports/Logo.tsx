import svgPaths from "./svg-9cl5wfzpf3";
import { imgRectangle5540 } from "./svg-jztdi";

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
    <div className="absolute contents left-[45px] top-[9px]" data-name="Mask group">
      <div className="absolute h-[18px] left-[38px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[7px_1.483px] mask-size-[139.041px_16.017px] top-[7.52px] w-[149px]" style={{ maskImage: `url('${imgRectangle5540}')` }} />
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

export default function Logo3() {
  return (
    <div className="relative size-full" data-name="Logo">
      <Logo2 />
    </div>
  );
}