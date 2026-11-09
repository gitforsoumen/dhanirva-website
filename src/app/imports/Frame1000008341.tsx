import imgPasteYourContent from "figma:asset/9dd082ab907f3bf3afa6905222d3948ea95a5827.png";
import imgPasteYourContent1 from "figma:asset/bbe44ad69a44dcb024e8f674f3f07b19bf739ea7.png";
import imgWhiteFront from "figma:asset/614ed18f9655de59ca6019a83f0bb3044c50f676.png";
import imgOurExperts1 from "figma:asset/6d391c23dc35889333e18c8fe4e32e28bdd2c82a.png";
import imgExpertDetails from "figma:asset/e6fdda5bb76a8d92ee873c4373cd7772bc6f2729.png";
import imgBookAppointment from "figma:asset/e6552ec920216e3341e444eba9b3cc5394deef70.png";
import imgTellUsWhoYouAre1 from "figma:asset/4d235cee31ab1a49494460579778bc82d13b2f72.png";
import imgPricing from "figma:asset/a4802a4059b41b17d50c4d9a2a5ee1acc1bcda29.png";

function Group1() {
  return (
    <div className="absolute left-0 size-[1188px] top-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1188 1188">
        <g id="Group 38974" opacity="0.8">
          <circle cx="595.326" cy="727.326" fill="var(--fill-0, #1448E7)" id="Ellipse 986" opacity="0.05" r="460.326" />
          <circle cx="594" cy="594" fill="var(--fill-0, #1448E7)" id="Ellipse 989" opacity="0.01" r="594" />
          <circle cx="596.015" cy="726.637" fill="var(--fill-0, #1448E7)" id="Ellipse 987" opacity="0.04" r="348.001" />
          <circle cx="596.016" cy="728.016" fill="var(--fill-0, #1448E7)" id="Ellipse 988" opacity="0.06" r="246.013" />
        </g>
      </svg>
    </div>
  );
}

function Screen() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Screen">
      <div className="absolute h-[641.111px] left-[17.32px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-17.317px_-15.445px] mask-size-[330px_672px] top-[15.45px] w-[295.992px]" data-name="Paste your content" style={{ maskImage: `url('${imgPasteYourContent}')` }}>
        <img alt="" className="block max-w-none size-full" height="641.111" src={imgPasteYourContent1} width="295.992" />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute h-[672px] left-0 top-0 w-[330px]" data-name="White Front">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[141.7%] left-[-142.18%] max-w-none top-[-20.85%] w-[384.35%]" src={imgWhiteFront} />
        </div>
      </div>
      <Screen />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[450px] left-[430px] overflow-clip top-[391px] w-[330px]">
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[calc(50%+1px)] top-[94px] translate-x-[-50%]">
      <div className="absolute h-[235px] left-[816px] rounded-[8px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)] top-[174px] w-[202px]" data-name="Our Experts 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
          <img alt="" className="absolute h-[186.03%] left-0 max-w-none top-[-7.42%] w-full" src={imgOurExperts1} />
        </div>
      </div>
      <div className="absolute h-[235px] left-[71px] rounded-[8px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)] top-[498px] w-[202px]" data-name="Expert_Details">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
          <img alt="" className="absolute h-[351.09%] left-0 max-w-none top-[-65.94%] w-full" src={imgExpertDetails} />
        </div>
      </div>
      <div className="absolute h-[235px] left-[172px] rounded-[8px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)] top-[168px] w-[202px]" data-name="Book Appointment">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
          <img alt="" className="absolute h-[186.03%] left-0 max-w-none top-[-40.39%] w-full" src={imgBookAppointment} />
        </div>
      </div>
      <div className="absolute h-[250px] left-[917px] rounded-[8px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)] top-[491px] w-[202px]" data-name="Tell us who you are 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
          <img alt="" className="absolute h-[175.31%] left-0 max-w-none top-[-21.6%] w-full" src={imgTellUsWhoYouAre1} />
        </div>
      </div>
      <div className="absolute h-[160px] left-[calc(50%+1px)] rounded-[8px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)] top-[94px] translate-x-[-50%] w-[202px]" data-name="Pricing">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
          <img alt="" className="absolute h-[273.08%] left-0 max-w-none top-[-115.71%] w-full" src={imgPricing} />
        </div>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group1 />
      <Frame />
      <Group2 />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="relative size-full">
      <Group3 />
    </div>
  );
}