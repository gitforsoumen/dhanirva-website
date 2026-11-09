import svgPaths from "./svg-0m9go1dh1g";

function Logo() {
  return (
    <div className="absolute bottom-[2.86%] left-0 right-0 top-[5.71%]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 32">
        <g id="Logo">
          <path d={svgPaths.p3b155d80} fill="var(--fill-0, white)" id="Vector 1" />
          <path d={svgPaths.p66e8980} fill="var(--fill-0, white)" id="Vector 2" />
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

export default function Logo2() {
  return (
    <div className="relative size-full" data-name="Logo">
      <Component35X />
      <div className="absolute h-[15.517px] left-[calc(50%+88.02px)] top-[9px] translate-x-[-50%] w-[13px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 16">
          <path d={svgPaths.p26615600} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[15px] left-[calc(50%+56.43px)] top-[9.52px] translate-x-[-50%] w-[2.5px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 15">
          <path d="M0 15V0H2.5V15H0Z" fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[15.5px] left-[calc(50%+25.25px)] top-[9.52px] translate-x-[-50%] w-[12.367px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 16">
          <path d={svgPaths.p9fe8700} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[16px] left-[calc(50%-10.55px)] top-[9.02px] translate-x-[-50%] w-[12.05px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 16">
          <path d={svgPaths.p684eaf0} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[15px] left-[calc(50%-43.27px)] top-[9.52px] translate-x-[-50%] w-[2.5px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 15">
          <path d="M0 15V0H2.5V15H0Z" fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}