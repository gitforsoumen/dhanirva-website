import svgPaths from '../imports/svg-32sz95kw5m';
import imgWhiteFront from "figma:asset/614ed18f9655de59ca6019a83f0bb3044c50f676.png";
import imgPasteYourContent from "figma:asset/9dd082ab907f3bf3afa6905222d3948ea95a5827.png";
import imgPasteYourContent1 from "figma:asset/bbe44ad69a44dcb024e8f674f3f07b19bf739ea7.png";
import imgOurExperts1 from "figma:asset/6d391c23dc35889333e18c8fe4e32e28bdd2c82a.png";
import imgExpertDetails from "figma:asset/e6fdda5bb76a8d92ee873c4373cd7772bc6f2729.png";
import imgBookAppointment from "figma:asset/e6552ec920216e3341e444eba9b3cc5394deef70.png";
import imgTellUsWhoYouAre1 from "figma:asset/4d235cee31ab1a49494460579778bc82d13b2f72.png";
import imgPricing from "figma:asset/a4802a4059b41b17d50c4d9a2a5ee1acc1bcda29.png";
import imgSneha from "figma:asset/20dbd4d914b1d61d477362ccf1237999de0300d0.png";
import imgAmit from "figma:asset/6d6acd55ed9dbf1bdf81d0ddb383112880947da5.png";
import imgPriya from "figma:asset/f02ff5022d571e250eea822058bbf7178c380de0.png";
import imgTarun from "figma:asset/c40a2dd8d39aa674ed4a4c2ad831400d2e038d44.png";
import imgNisha from "figma:asset/85b0d938b66cfd5dbd377f140f014e187e871918.png";
import imgKaran from "figma:asset/64cf365a275c8ac72bf55c4288d6a36e9664668c.png";

// Header Section
function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] md:gap-[30px] items-center relative shrink-0 w-full max-w-[959px] px-4">
      <div className="bg-[#d4f8ff] h-[36px] relative rounded-[2.98262e+07px] shrink-0 w-[175px]" data-name="Container">
        <p className="absolute font-['Plus_Jakarta_Sans'] font-medium leading-[20px] left-1/2 text-[#00a8e8] text-[14px] text-center text-nowrap top-[7.89px] -translate-x-1/2 whitespace-pre">Meet Our Experts</p>
      </div>
      <p className="font-['Plus_Jakarta_Sans'] font-medium leading-[36px] md:leading-[48px] min-w-full relative shrink-0 text-[#101828] text-[28px] md:text-[36px] lg:text-[48px] text-center w-[min-content]">Connect with Certified Advisors</p>
      <p className="font-['Plus_Jakarta_Sans'] font-normal leading-[24px] md:leading-[28px] min-w-full relative shrink-0 text-[#4a5565] text-[16px] md:text-[18px] lg:text-[20px] text-center w-[min-content]">Get personalized financial guidance from SEBI-registered experts</p>
    </div>
  );
}

// Expert Card Components
function Group19() {
  return (
    <div className="h-[14px] relative shrink-0 w-[8.4px]">
      <div className="absolute inset-[-4.17%_-6.94%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 16">
          <g id="Group 38973">
            <path d={svgPaths.p2f64dbc0} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p11267f00} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1efc9700} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function IconEmpty() {
  return (
    <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] overflow-clip relative rounded-[inherit] w-full">
        <div className="absolute inset-[8.33%_8.33%_12.2%_8.33%]" data-name="Vector">
          <div className="absolute inset-[-5.24%_-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
              <path d={svgPaths.p1416a00} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ExpertCardProps {
  name: string;
  inaId: string;
  rating: string;
  clients: string;
  image: string;
}

function ExpertCard({ name, inaId, rating, clients, image }: ExpertCardProps) {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-[264px]">
      <div className="box-border content-stretch flex flex-col gap-[24px] items-center justify-center overflow-clip p-[20px] relative rounded-[inherit] w-[264px]">
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
          <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
            {/* Expert Header */}
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
              <div className="relative shrink-0 size-[48px]">
                <img alt="" className="block max-w-none size-full" height="48" src={image} width="48" />
              </div>
              <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 flex-1">
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[18px] text-neutral-950 w-full text-nowrap overflow-hidden text-ellipsis">{name}</p>
                <div className="content-stretch flex gap-[5px] items-center relative shrink-0 w-full">
                  <Group19 />
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4a5565] text-[14px] text-nowrap whitespace-pre">{inaId}</p>
                </div>
              </div>
            </div>
            
            {/* Badges */}
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
              <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
                <div className="[grid-area:1_/_1] bg-[#0c8a00] h-[17px] ml-0 mt-0 rounded-[40px] w-[45px]" />
                <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Bold',sans-serif] font-bold items-center justify-center leading-[0] ml-[5px] mt-0 not-italic relative text-[10px] text-nowrap text-white h-[17px]">
                  <p className="leading-[normal] whitespace-pre">SEBI</p>
                </div>
                <div className="[grid-area:1_/_1] h-[11.001px] ml-[68.89%] mt-[3px] relative w-[9px]" data-name="Subtract">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 11">
                    <path d={svgPaths.p26d2cb00} fill="var(--fill-0, white)" id="Subtract" />
                  </svg>
                </div>
              </div>
              <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[50px] mt-0 place-items-start relative">
                <div className="[grid-area:1_/_1] bg-[#027fa6] h-[17px] ml-0 mt-0 rounded-[40px] w-[48px]" />
                <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Bold',sans-serif] font-bold items-center justify-center leading-[0] ml-[5px] mt-0 not-italic relative text-[10px] text-nowrap text-white h-[17px]">
                  <p className="leading-[normal] whitespace-pre">AMFI</p>
                </div>
                <div className="[grid-area:1_/_1] h-[11.001px] ml-[70.83%] mt-[3px] relative w-[9px]" data-name="Subtract">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 11">
                    <path d={svgPaths.p1fff9560} fill="var(--fill-0, white)" id="Subtract" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Rating */}
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <div className="relative shrink-0">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] items-center relative">
                  <div className="content-stretch flex gap-[4px] h-[16px] items-center relative shrink-0 w-[96px]">
                    {[...Array(4).keys()].map((_, i) => (
                      <Icon key={i} />
                    ))}
                    <IconEmpty />
                  </div>
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">{rating}</p>
                </div>
              </div>
              <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#6a7282] text-[14px] text-nowrap whitespace-pre">({clients} clients)</p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e1e5ec] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

// Phone visualization with floating app screenshots
function PhoneVisualization() {
  return (
    <div className="h-[850px] relative w-[1188px]">
      {/* Background circles */}
      <div className="absolute left-0 size-[1188px] top-[15px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1188 1188">
          <g id="Group 38974" opacity="0.8">
            <circle cx="595.326" cy="727.326" fill="var(--fill-0, #1448E7)" id="Ellipse 986" opacity="0.05" r="460.326" />
            <circle cx="594" cy="594" fill="var(--fill-0, #1448E7)" id="Ellipse 989" opacity="0.01" r="594" />
            <circle cx="596.015" cy="726.637" fill="var(--fill-0, #1448E7)" id="Ellipse 987" opacity="0.04" r="348.001" />
            <circle cx="596.016" cy="728.016" fill="var(--fill-0, #1448E7)" id="Ellipse 988" opacity="0.06" r="246.013" />
          </g>
        </svg>
      </div>

      {/* Center Phone */}
      <div className="absolute h-[450px] left-[430px] overflow-clip top-[406px] w-[330px] z-10">
        <div className="absolute contents left-0 top-0">
          <div className="absolute h-[672px] left-0 top-0 w-[330px]" data-name="White Front">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[141.7%] left-[-142.18%] max-w-none top-[-20.85%] w-[384.35%]" src={imgWhiteFront} />
            </div>
          </div>
          <div className="absolute contents left-0 top-0" data-name="Screen">
            <div className="absolute h-[641.111px] left-[17.32px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-17.317px_-15.445px] mask-size-[330px_672px] top-[15.45px] w-[295.992px]" data-name="Paste your content" style={{ maskImage: `url('${imgPasteYourContent}')` }}>
              <img alt="" className="block max-w-none size-full" height="641.111" src={imgPasteYourContent1} width="295.992" />
            </div>
          </div>
        </div>
      </div>

      {/* Surrounding App Screenshots with Floating Animation */}
      <div className="absolute contents left-[calc(50%+1px)] top-[94px] translate-x-[-50%]">
        {/* Top Center - Pricing (Floating) */}
        <div className="absolute h-[160px] left-[calc(50%+1px)] rounded-[8px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)] top-[94px] translate-x-[-50%] w-[202px] animate-float-1" data-name="Pricing">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
            <img alt="" className="absolute h-[273.08%] left-0 max-w-none top-[-115.71%] w-full" src={imgPricing} />
          </div>
        </div>

        {/* Right Top - Our Experts (Floating) */}
        <div className="absolute h-[235px] left-[816px] rounded-[8px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)] top-[174px] w-[202px] animate-float-2" data-name="Our Experts 1">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
            <img alt="" className="absolute h-[186.03%] left-0 max-w-none top-[-7.42%] w-full" src={imgOurExperts1} />
          </div>
        </div>

        {/* Left Top - Book Appointment (Floating) */}
        <div className="absolute h-[235px] left-[172px] rounded-[8px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)] top-[168px] w-[202px] animate-float-3" data-name="Book Appointment">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
            <img alt="" className="absolute h-[186.03%] left-0 max-w-none top-[-40.39%] w-full" src={imgBookAppointment} />
          </div>
        </div>

        {/* Left Bottom - Expert Details (Floating) */}
        <div className="absolute h-[235px] left-[71px] rounded-[8px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)] top-[498px] w-[202px] animate-float-4" data-name="Expert_Details">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
            <img alt="" className="absolute h-[351.09%] left-0 max-w-none top-[-65.94%] w-full" src={imgExpertDetails} />
          </div>
        </div>

        {/* Right Bottom - Role Selection (Floating) */}
        <div className="absolute h-[250px] left-[917px] rounded-[8px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)] top-[491px] w-[202px] animate-float-5" data-name="Tell us who you are 1">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
            <img alt="" className="absolute h-[175.31%] left-0 max-w-none top-[-21.6%] w-full" src={imgTellUsWhoYouAre1} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ExpertsShowcaseSection() {
  const experts = [
    { name: "Sneha Patel", inaId: "INA000012346", rating: "5.3", clients: "1400", image: imgSneha },
    { name: "Amit Verma", inaId: "INA000012347", rating: "5.1", clients: "1200", image: imgAmit },
    { name: "Priya Sharma", inaId: "INA000012348", rating: "5.2", clients: "1350", image: imgPriya },
    { name: "Tarun Singh", inaId: "INA000012349", rating: "5.0", clients: "1100", image: imgTarun },
    { name: "Nisha Kapoor", inaId: "INA000012350", rating: "5.4", clients: "1500", image: imgNisha },
    { name: "Karan Mehta", inaId: "INA000012351", rating: "5.2", clients: "1250", image: imgKaran },
  ];

  return (
    <section className="bg-white py-[60px] md:py-[80px] lg:py-[100px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="content-stretch flex flex-col gap-[40px] md:gap-[50px] items-center relative size-full">
          <Frame7 />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] md:gap-[30px] w-full max-w-[1200px]">
            {experts.map((expert, idx) => (
              <ExpertCard key={idx} {...expert} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}