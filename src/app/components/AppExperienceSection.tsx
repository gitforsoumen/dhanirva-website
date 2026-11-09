import { useState } from "react";
import svgPaths from "../imports/svg-boga2wt2l1";
import svgPathsOld from "../imports/svg-mch7qyyelf";
import imgPasteYourContent from "figma:asset/68d9ff70f8f76698c42d13f260c615df3751de8b.png";
import imgPasteYourContent1 from "figma:asset/3694b2c01aab15e6bc27d6dc56a8b7f7ce4d08ec.png";
import imgWhiteFront from "figma:asset/614ed18f9655de59ca6019a83f0bb3044c50f676.png";
import Group38967 from "../imports/Group38967";

type TabType = 'dashboard' | 'recommendations' | 'analytics' | 'goals' | 'alerts';

interface TabContent {
  title: string;
  description: string;
  features: Array<{
    icon: React.ReactNode;
    iconBg: string;
    iconColor: string;
    title: string;
    description: string;
  }>;
}

function Container() {
  return (
    <div className="bg-purple-100 h-[36px] relative rounded-[2.98262e+07px] shrink-0 w-[136px]" data-name="Container">
      <p className="absolute font-['Plus_Jakarta_Sans'] font-medium leading-[20px] left-[calc(50%+0.5px)] text-[#9810fa] text-[14px] text-center text-nowrap top-[calc(50%-5px)] translate-x-[-50%] whitespace-pre mt-[-6px] mr-[0px] mb-[0px] ml-[0px]">App Experience</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center relative shrink-0 w-full px-4">
      <Container />
      <p className="font-['Plus_Jakarta_Sans'] font-medium leading-[36px] md:leading-[48px] min-w-full relative shrink-0 text-[#101828] text-[28px] md:text-[48px] text-center w-[min-content]">A Beautifully Designed Mobile Experience</p>
      <p className="font-['Plus_Jakarta_Sans'] font-normal leading-[28px] relative shrink-0 text-[#4a5565] text-[16px] md:text-[20px] text-center">Intuitive interface with powerful features at your fingertips</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPathsOld.p3c193bc0} id="Vector" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M13.5 12.75V6.75" id="Vector_2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M9.75 12.75V3.75" id="Vector_3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M6 12.75V10.5" id="Vector_4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M12 5.25H16.5V9.75" id="Vector" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPathsOld.p305bd600} id="Vector_2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_2001_309)" id="Icon">
          <path d={svgPathsOld.p1ff36970} id="Vector" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPathsOld.p2d5d7600} id="Vector_2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_2001_309">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_2001_323)" id="Icon">
          <path d={svgPathsOld.p3dc49580} id="Vector" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPathsOld.p29e1f300} id="Vector_2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPathsOld.p29ba0200} id="Vector_3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_2001_323">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPathsOld.p985d280} id="Vector" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPathsOld.pdd8dbd0} id="Vector_2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

interface TabButtonProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function TabButton({ icon, label, isActive, onClick }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`box-border flex gap-[8px] h-[48px] items-center px-[24px] relative rounded-[8px] transition-all duration-200 ${
        isActive 
          ? 'bg-[#fe6400] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1)] text-white' 
          : 'bg-white text-[#364153] hover:bg-gray-50'
      }`}
      data-name="Button"
    >
      {!isActive && (
        <div aria-hidden="true" className="absolute border-[0.889px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      )}
      <div className={isActive ? 'text-white' : 'text-[#364153]'}>
        {icon}
      </div>
      <div className="flex items-center">
        <p className={`font-['Plus_Jakarta_Sans'] ${isActive ? 'font-semibold' : 'font-normal'} text-[16px] leading-[24px] whitespace-nowrap`}>
          {label}
        </p>
      </div>
    </button>
  );
}

function Frame1({ activeTab, onTabChange }: { activeTab: TabType; onTabChange: (tab: TabType) => void }) {
  return (
    <div className="content-stretch flex flex-wrap gap-[12px] md:gap-[15px] items-center justify-center relative shrink-0">
      <TabButton 
        icon={<Icon />} 
        label="Dashboard" 
        isActive={activeTab === 'dashboard'} 
        onClick={() => onTabChange('dashboard')} 
      />
      <TabButton 
        icon={<Icon1 />} 
        label="Recommendations" 
        isActive={activeTab === 'recommendations'} 
        onClick={() => onTabChange('recommendations')} 
      />
      <TabButton 
        icon={<Icon2 />} 
        label="Analytics" 
        isActive={activeTab === 'analytics'} 
        onClick={() => onTabChange('analytics')} 
      />
      <TabButton 
        icon={<Icon3 />} 
        label="Goals" 
        isActive={activeTab === 'goals'} 
        onClick={() => onTabChange('goals')} 
      />
      <TabButton 
        icon={<Icon4 />} 
        label="Alerts" 
        isActive={activeTab === 'alerts'} 
        onClick={() => onTabChange('alerts')} 
      />
    </div>
  );
}

function Frame2({ activeTab, onTabChange }: { activeTab: TabType; onTabChange: (tab: TabType) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[40px] md:gap-[50px] items-center relative shrink-0 w-full max-w-[1006px]">
      <Frame />
      <Frame1 activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  );
}

function Icon5({ color }: { color: string }) {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pae54200} id="Vector" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

interface FeatureProps {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
}

function Feature({ icon, iconBg, title, description }: FeatureProps) {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <div className={`${iconBg} relative rounded-[10px] shrink-0 size-[40px]`} data-name="Container">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
          {icon}
        </div>
      </div>
      <div className="flex-1">
        <div className="flex flex-col gap-[4px]">
          <p className="font-['Plus_Jakarta_Sans'] font-semibold leading-[28px] text-[#101828] text-[18px]">{title}</p>
          <p className="font-['Plus_Jakarta_Sans'] font-normal leading-[24px] text-[#4a5565] text-[16px]">{description}</p>
        </div>
      </div>
    </div>
  );
}

function LeftContent({ content }: { content: TabContent }) {
  return (
    <div className="flex flex-col gap-[32px] w-full max-w-[500px]" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
        <div className="relative shrink-0 w-full" data-name="Heading 3">
          <p className="font-['Plus_Jakarta_Sans'] font-medium leading-[32px] md:leading-[40px] text-[#101828] text-[28px] md:text-[36px]">{content.title}</p>
        </div>
        <div className="relative shrink-0 w-full" data-name="Paragraph">
          <p className="font-['Plus_Jakarta_Sans'] font-normal leading-[24px] md:leading-[28px] text-[#4a5565] text-[16px] md:text-[18px]">{content.description}</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
        {content.features.map((feature, index) => (
          <Feature 
            key={index}
            icon={feature.icon}
            iconBg={feature.iconBg}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
}

function PhoneFrame({ screenshot }: { screenshot: string }) {
  return (
    <div className="relative h-[600px] w-[294.934px]">
      <div className="absolute h-[600px] left-0 top-0 w-[294.934px]" data-name="White Front">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[141.7%] left-[-142.18%] max-w-none top-[-20.85%] w-[384.35%]" src={imgWhiteFront} />
        </div>
      </div>
      <div className="absolute left-[15.48px] top-[13.79px] h-[572.42px] w-[264.54px]" data-name="Screen">
        <div 
          className="absolute inset-0 overflow-hidden rounded-[30px]"
          style={{ 
            maskImage: `url('${imgPasteYourContent}')`,
            WebkitMaskImage: `url('${imgPasteYourContent}')`,
            maskPosition: '-15.479px -13.79px',
            WebkitMaskPosition: '-15.479px -13.79px',
            maskSize: '294.935px 600px',
            WebkitMaskSize: '294.935px 600px',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat'
          }}
        >
          <img 
            alt="App Screenshot" 
            className="block max-w-none size-full object-cover transition-opacity duration-300" 
            src={screenshot} 
          />
        </div>
      </div>
    </div>
  );
}

function DashboardPreview({ activeTab }: { activeTab: TabType }) {
  const tabContent: Record<TabType, TabContent> = {
    dashboard: {
      title: "Unified Dashboard",
      description: "See all your investments, performance, and insights in one beautiful view",
      features: [
        {
          icon: <Icon5 color="#2B7FFF" />,
          iconBg: "bg-blue-100",
          iconColor: "#2B7FFF",
          title: "Real-time Updates",
          description: "Live market data synced every second"
        },
        {
          icon: <Icon5 color="#00C950" />,
          iconBg: "bg-green-100",
          iconColor: "#00C950",
          title: "Seamless Navigation",
          description: "Intuitive design for effortless use"
        },
        {
          icon: <Icon5 color="#AD46FF" />,
          iconBg: "bg-purple-100",
          iconColor: "#AD46FF",
          title: "Customizable Views",
          description: "Personalize your dashboard layout"
        }
      ]
    },
    recommendations: {
      title: "Smart Recommendations",
      description: "Get AI-powered investment suggestions tailored to your portfolio and goals",
      features: [
        {
          icon: <Icon5 color="#2B7FFF" />,
          iconBg: "bg-blue-100",
          iconColor: "#2B7FFF",
          title: "Expert Analysis",
          description: "Recommendations from top analysts"
        },
        {
          icon: <Icon5 color="#00C950" />,
          iconBg: "bg-green-100",
          iconColor: "#00C950",
          title: "Risk Assessment",
          description: "Understand risk before investing"
        },
        {
          icon: <Icon5 color="#AD46FF" />,
          iconBg: "bg-purple-100",
          iconColor: "#AD46FF",
          title: "Personalized Insights",
          description: "Tailored to your investment style"
        }
      ]
    },
    analytics: {
      title: "Advanced Analytics",
      description: "Deep dive into performance metrics with comprehensive charts and reports",
      features: [
        {
          icon: <Icon5 color="#2B7FFF" />,
          iconBg: "bg-blue-100",
          iconColor: "#2B7FFF",
          title: "Performance Tracking",
          description: "Monitor returns across timeframes"
        },
        {
          icon: <Icon5 color="#00C950" />,
          iconBg: "bg-green-100",
          iconColor: "#00C950",
          title: "Visual Reports",
          description: "Interactive charts and graphs"
        },
        {
          icon: <Icon5 color="#AD46FF" />,
          iconBg: "bg-purple-100",
          iconColor: "#AD46FF",
          title: "Trend Analysis",
          description: "Identify patterns in your portfolio"
        }
      ]
    },
    goals: {
      title: "Investment Goals",
      description: "Set, track, and achieve your financial milestones with guided planning",
      features: [
        {
          icon: <Icon5 color="#2B7FFF" />,
          iconBg: "bg-blue-100",
          iconColor: "#2B7FFF",
          title: "Goal Setting",
          description: "Create custom investment targets"
        },
        {
          icon: <Icon5 color="#00C950" />,
          iconBg: "bg-green-100",
          iconColor: "#00C950",
          title: "Progress Tracking",
          description: "Monitor your journey visually"
        },
        {
          icon: <Icon5 color="#AD46FF" />,
          iconBg: "bg-purple-100",
          iconColor: "#AD46FF",
          title: "Smart Suggestions",
          description: "AI-recommended strategies"
        }
      ]
    },
    alerts: {
      title: "Smart Alerts",
      description: "Stay informed with real-time notifications on market movements and opportunities",
      features: [
        {
          icon: <Icon5 color="#2B7FFF" />,
          iconBg: "bg-blue-100",
          iconColor: "#2B7FFF",
          title: "Price Alerts",
          description: "Get notified on price changes"
        },
        {
          icon: <Icon5 color="#00C950" />,
          iconBg: "bg-green-100",
          iconColor: "#00C950",
          title: "News Updates",
          description: "Important market news instantly"
        },
        {
          icon: <Icon5 color="#AD46FF" />,
          iconBg: "bg-purple-100",
          iconColor: "#AD46FF",
          title: "Custom Triggers",
          description: "Set your own alert conditions"
        }
      ]
    }
  };

  // Different screenshots for each tab
  const screenshots: Record<TabType, string> = {
    dashboard: imgPasteYourContent1,
    recommendations: imgPasteYourContent1, // Using same image, will be replaced
    analytics: imgPasteYourContent1,
    goals: imgPasteYourContent1,
    alerts: imgPasteYourContent1
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-[40px] lg:gap-[80px] w-full max-w-[1200px] mx-auto">
      <LeftContent content={tabContent[activeTab]} />
      <div className="relative flex-shrink-0 hidden md:block">
        <PhoneFrame screenshot={screenshots[activeTab]} />
      </div>
    </div>
  );
}

export default function AppExperienceSection() {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');

  return (
    <section className="bg-white py-[60px] md:py-[100px]">
      <div className="container mx-auto px-6">
        <div className="content-stretch flex flex-col gap-[50px] items-center relative size-full">
          <Frame2 activeTab={activeTab} onTabChange={setActiveTab} />
          <DashboardPreview activeTab={activeTab} />
        </div>
      </div>
    </section>
  );
}