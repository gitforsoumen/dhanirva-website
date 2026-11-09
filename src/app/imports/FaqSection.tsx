import { useState } from "react";
import svgPaths from "./svg-ujxf2ztpm3";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  isFirst?: boolean;
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] md:gap-[30px] items-center relative shrink-0 text-center w-full px-4">
      <p className="font-['Plus_Jakarta_Sans'] font-medium leading-[36px] md:leading-[48px] min-w-full relative shrink-0 text-[#101828] text-[28px] md:text-[36px] lg:text-[48px] w-[min-content]">Frequently Asked Questions</p>
      <p className="font-['Plus_Jakarta_Sans'] font-normal leading-[24px] md:leading-[28px] relative shrink-0 text-[#4a5565] text-[16px] md:text-[18px] lg:text-[20px] max-w-[882px]">{`Got questions? We've got answers. Find everything you need to know about DHANIRVA.`}</p>
    </div>
  );
}

function IconMinus() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M4.16699 10H15.8337" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function IconPlus() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M4.16699 10H15.8337" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 4.16699V15.8337" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function AccordionItem({ question, answer, isOpen, onToggle, isFirst }: AccordionItemProps) {
  return (
    <div 
      className={`bg-white box-border content-stretch flex flex-col items-start overflow-hidden relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] shrink-0 w-full max-w-[896px] transition-all duration-300 ${
        isOpen ? 'h-auto' : 'h-[80px]'
      }`}
      data-name="Container"
    >
      <button
        onClick={onToggle}
        className="h-[80px] w-full text-left hover:bg-gray-50 transition-colors duration-200"
        data-name="Button"
      >
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex h-[80px] items-center justify-between px-[16px] md:px-[24px] py-0 relative w-full gap-4">
            <div className="relative shrink-0 flex-1" data-name="Text">
              <p className="font-['Plus_Jakarta_Sans'] font-medium leading-[20px] md:leading-[24px] text-[#1a1a1a] text-[14px] md:text-[16px] pr-2">
                {question}
              </p>
            </div>
            <div 
              className={`relative rounded-[2.98262e+07px] shrink-0 size-[32px] transition-colors duration-200 ${
                isOpen ? 'bg-[#2b7fff]' : 'bg-gray-100'
              }`}
              data-name="Container"
            >
              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
                {isOpen ? <IconMinus /> : <IconPlus />}
              </div>
            </div>
          </div>
        </div>
      </button>
      <div 
        className={`w-full transition-all duration-300 ${
          isOpen ? 'opacity-100 py-[12px]' : 'opacity-0 h-0'
        }`}
        data-name="Container"
      >
        <div className="px-[16px] md:px-[24px]">
          <p className="font-['Plus_Jakarta_Sans'] font-normal leading-[24px] md:leading-[28px] text-[#4a5565] text-[14px] md:text-[16px]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: "What is DHANIRVA and how does it work?",
      answer: "DHANIRVA is a comprehensive investment consultation platform that connects you with certified financial advisors and provides AI-powered insights. Simply create an account, set your investment goals, and get personalized recommendations tailored to your financial situation."
    },
    {
      question: "Is my financial data secure?",
      answer: "Absolutely. We use bank-grade 256-bit encryption to protect all your data. DHANIRVA is SEBI registered and fully compliant with financial security standards. Your information is never shared without your explicit consent."
    },
    {
      question: "What types of investments can I make through DHANIRVA?",
      answer: "DHANIRVA supports a wide range of investment options including stocks, mutual funds, ETFs, bonds, and more. Our expert advisors help you build a diversified portfolio based on your risk appetite and financial goals."
    },
    {
      question: "How much does it cost to use DHANIRVA?",
      answer: "DHANIRVA offers flexible pricing plans to suit different needs. Basic portfolio tracking is free, while premium features including personalized consultations and advanced AI insights are available through our subscription plans starting at ₹499/month."
    },
    {
      question: "Can I speak with a real financial advisor?",
      answer: "Yes! All our advisors are SEBI-registered and certified professionals. You can schedule one-on-one consultations via video call, phone, or chat. Premium members get priority access to our expert advisors."
    },
    {
      question: "How do I get started?",
      answer: "Getting started is easy! Download the DHANIRVA app, create your account, complete a short questionnaire about your financial goals, and you'll receive personalized investment recommendations within minutes. Our onboarding process takes less than 5 minutes."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
          isFirst={index === 0}
        />
      ))}
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M4.16699 10H15.8336" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p6a34300} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <button className="content-stretch flex gap-[5px] items-center relative shrink-0 hover:opacity-80 transition-opacity duration-200">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#155dfc] text-[16px] text-center text-nowrap whitespace-pre">Contact our support team</p>
      <Icon6 />
    </button>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5565] text-[16px] text-center text-nowrap whitespace-pre">Still have questions?</p>
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-center relative shrink-0">
      <Frame />
      <Frame1 />
      <Frame3 />
    </div>
  );
}

export default function FaqSection() {
  return (
    <div className="bg-gradient-to-b from-[rgba(239,246,255,0.9)] relative size-full to-[#ffffff]" data-name="FAQSection">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 xl:px-[276px] pb-[50px] md:pb-[70px] pt-[50px] md:pt-[70px] relative size-full">
          <Frame4 />
        </div>
      </div>
    </div>
  );
}