import svgPaths from "./svg-5aaxbqe7xr";

function Register() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="register">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="register">
          <path d={svgPaths.p15737000} fill="var(--fill-0, white)" id="Vector (Stroke)" />
          <path d={svgPaths.pdb6e080} fill="var(--fill-0, white)" id="Vector (Stroke)_2" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[6px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[36px]">
        <Register />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container />
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">SEBI Registered</p>
    </div>
  );
}

function CheckmarkCircle() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="checkmark-circle-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="checkmark-circle-02">
          <path d={svgPaths.p15737000} fill="var(--fill-0, white)" id="Vector (Stroke)" />
          <path d={svgPaths.pcb8000} fill="var(--fill-0, white)" id="Vector (Stroke)_2" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[6px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[36px]">
        <CheckmarkCircle />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-center relative shrink-0" data-name="Container">
      <Container2 />
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">Bank-Grade Security</p>
    </div>
  );
}

function Star() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="star">
          <path d={svgPaths.p2c0c3f00} fill="var(--fill-0, white)" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative rounded-[6px] shrink-0 size-[36px]" data-name="Container">
      <Star />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Container4 />
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">4.8/5 Rating</p>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex gap-[30px] items-center relative size-full">
      <Container1 />
      <Container3 />
      <Frame />
    </div>
  );
}