import svgPaths from "../imports/svg-jn06e9on85";
import imgRectangle6462 from "figma:asset/eccd6ff820883d8b11ef7c4d1b83894febacbe2b.png";
import imgFrame10000083261 from "figma:asset/811f4d013fc1bc4d909134bde122593124dd45b7.png";
import TrustBadges from "../imports/Frame1000008322";
import AppStoreButtons from "../imports/Frame1000008323-2015-1626";
import CTABadge from "../imports/Container";

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

export default function CTASection() {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[527px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          alt="Background" 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
          src={imgFrame10000083261} 
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative h-full min-h-[500px] md:min-h-[527px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 py-12 md:py-16 lg:py-20 h-full">
          
          {/* Left Content */}
          <div className="flex flex-col gap-[20px] md:gap-[30px] items-start w-full lg:max-w-[600px] text-center lg:text-left">
            <div className="w-full lg:w-auto">
              <CTABadge />
            </div>
            
            <h2 className="font-['Plus_Jakarta_Sans'] font-medium leading-[36px] md:leading-[48px] lg:leading-[56px] text-[28px] md:text-[40px] lg:text-[48px] text-white w-full">
              Start Your Investment Journey Today
            </h2>
            
            <p className="font-['Plus_Jakarta_Sans'] font-normal leading-[24px] md:leading-[28px] text-[16px] md:text-[18px] lg:text-[20px] text-[#e9eaec] w-full lg:max-w-[588px]">
              Join thousands of investors who trust Dhanirva for expert financial guidance and smart investment strategies
            </p>
            
            <div className="w-full lg:w-auto flex justify-center lg:justify-start">
              <AppStoreButtons />
            </div>
            
            <div className="w-full lg:w-auto flex justify-center lg:justify-start">
              <TrustBadges />
            </div>
          </div>

          {/* Right - QR Code (Hidden on Mobile) */}
          <div className="hidden lg:flex flex-col items-center gap-4">
            <div className="relative w-[240px] h-[240px]">
              <div className="absolute border border-solid border-white left-0 overflow-clip rounded-[5px] size-[240px] top-0">
                <div className="absolute left-[19px] top-[19px]">
                  <div 
                    className="absolute bg-white left-[20px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[200px_200px] rounded-[5px] size-[200px] top-[20px]" 
                    style={{ maskImage: `url('${imgRectangle6462}')` }} 
                  />
                </div>
              </div>
            </div>
            <p className="font-['Inter'] font-medium leading-[24px] text-[18px] text-center text-white whitespace-nowrap">
              Scan to Download
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
