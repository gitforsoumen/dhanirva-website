import svgPaths from "../imports/svg-nshu3au999";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  initials: string;
  bgColor: string;
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1c8f7580} fill="var(--fill-0, #FDC700)" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function TestimonialCard({ quote, name, role, initials, bgColor }: TestimonialCardProps) {
  return (
    <div className="bg-[#eff6fd] box-border content-stretch flex flex-col gap-[24px] items-start p-[24px] md:p-[32px] relative rounded-[12px] shrink-0 w-full hover:shadow-lg transition-shadow duration-300">
      {/* Stars */}
      <div className="flex gap-[4px] items-start w-full">
        {[...Array(5).keys()].map((_, i) => (
          <Icon key={i} />
        ))}
      </div>

      {/* Quote */}
      <div className="relative w-full min-h-[104px]">
        <p className="font-['Plus_Jakarta_Sans'] font-normal leading-[24px] md:leading-[28px] text-[#4a5565] text-[14px] md:text-[16px]">
          {quote}
        </p>
      </div>

      {/* Author */}
      <div className="flex gap-[16px] items-center w-full">
        <div 
          className="relative rounded-full shrink-0 size-[48px] flex items-center justify-center"
          style={{ backgroundColor: bgColor }}
        >
          <p className="font-['Inter'] font-semibold leading-[24px] text-[16px] text-white">
            {initials}
          </p>
        </div>
        <div className="flex flex-col gap-[2px]">
          <p className="font-['Plus_Jakarta_Sans'] font-medium leading-[24px] text-[#1a1a1a] text-[16px]">
            {name}
          </p>
          <p className="font-['Plus_Jakarta_Sans'] font-normal leading-[20px] text-[#6a7282] text-[14px]">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: '"Dhanirva transformed how I invest. The expert consultation helped me build a diversified portfolio that matches my goals perfectly."',
      name: "Rajesh Kumar",
      role: "Software Engineer",
      initials: "RK",
      bgColor: "#2b7fff"
    },
    {
      quote: '"The AI-powered insights are incredibly accurate. I\'ve seen consistent returns since I started using Dhanirva. Highly recommended!"',
      name: "Priya Sharma",
      role: "Marketing Manager",
      initials: "PS",
      bgColor: "#9810fa"
    },
    {
      quote: '"Best investment platform I\'ve used. The SEBI-registered advisors are professional and the app interface is intuitive and easy to navigate."',
      name: "Amit Patel",
      role: "Business Owner",
      initials: "AP",
      bgColor: "#00a63e"
    }
  ];

  return (
    <section className="w-full">
      <div className="flex flex-col gap-[40px] md:gap-[50px] items-center">
        {/* Header */}
        <div className="content-stretch flex flex-col gap-[20px] md:gap-[30px] items-center w-full">
          <h2 className="font-['Plus_Jakarta_Sans'] font-medium leading-[36px] md:leading-[48px] text-center text-[#101828] text-[28px] md:text-[36px] lg:text-[48px] w-full">
            What Our Users Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[24px] lg:gap-[30px] w-full">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={idx} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
