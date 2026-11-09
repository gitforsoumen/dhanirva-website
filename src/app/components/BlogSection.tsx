import svgPaths from "../imports/svg-nwcw328obu";
import imgImageWithFallback from "figma:asset/1dc0048ee9ee73b8f5a6a6135e0a19e9dc73d7d6.png";
import imgImageWithFallback1 from "figma:asset/807159f32325201600bda937c28db51b2081ff60.png";
import imgImageWithFallback2 from "figma:asset/7892605606200737fdb86fbf5d693add64cbdc4b.png";

interface BlogCardProps {
  image: string;
  category: string;
  categoryColor: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

function BlogCard({ image, category, categoryColor, title, excerpt, date, readTime }: BlogCardProps) {
  return (
    <div className="bg-white relative rounded-[12px] overflow-hidden shadow-[0px_4px_20px_0px_rgba(0,0,0,0.06)] hover:shadow-[0px_8px_30px_0px_rgba(0,0,0,0.12)] transition-shadow duration-300 w-full">
      {/* Image */}
      <div className="relative h-[224px] w-full overflow-hidden">
        <img 
          alt={title} 
          className="w-full h-full object-cover" 
          src={image} 
        />
        <div 
          className="absolute left-[16px] top-[18px] px-[12px] py-[4px] rounded-[2.98262e+07px]"
          style={{ backgroundColor: categoryColor }}
        >
          <p className="font-['Inter'] font-normal leading-[16px] text-[12px] text-white whitespace-nowrap">
            {category}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-[24px] flex flex-col gap-[16px]">
        <h3 className="font-['Plus_Jakarta_Sans'] font-semibold leading-[28px] text-[20px] text-[#101828] line-clamp-2">
          {title}
        </h3>
        
        <p className="font-['Plus_Jakarta_Sans'] font-normal leading-[24px] text-[16px] text-[#4a5565] line-clamp-2 min-h-[48px]">
          {excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-[12px] text-[#6a7282]">
          <div className="flex items-center gap-[6px]">
            <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 14 14">
              <g>
                <path d="M4.66699 1.1665V3.49984" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                <path d="M9.33301 1.1665V3.49984" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                <path d={svgPaths.p24a2b500} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                <path d="M1.75 5.83333H12.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
              </g>
            </svg>
            <span className="font-['Plus_Jakarta_Sans'] font-normal leading-[20px] text-[14px]">
              {date}
            </span>
          </div>
          
          <span className="text-[#d1d5dc]">•</span>
          
          <span className="font-['Plus_Jakarta_Sans'] font-normal leading-[20px] text-[14px]">
            {readTime}
          </span>
        </div>

        {/* Read More Link */}
        <button className="flex items-center gap-[8px] text-[#1448e7] hover:text-[#0d3cc7] transition-colors mt-[8px] group">
          <span className="font-['Plus_Jakarta_Sans'] font-medium leading-[20px] text-[14px]">
            Read More
          </span>
          <svg className="w-[16px] h-[16px] group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 16 16">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function BlogSection() {
  const blogs = [
    {
      image: imgImageWithFallback,
      category: "Investment Strategy",
      categoryColor: "#2b7fff",
      title: "Diversification: The Key to Risk Management",
      excerpt: "Learn how to spread your investments across different asset classes to minimize risk and maximize returns in volatile markets.",
      date: "Dec 1, 2024",
      readTime: "5 min read"
    },
    {
      image: imgImageWithFallback1,
      category: "Market Analysis",
      categoryColor: "#9810fa",
      title: "Understanding Market Trends in 2024",
      excerpt: "Expert insights on current market conditions, emerging sectors, and investment opportunities you shouldn't miss this quarter.",
      date: "Nov 28, 2024",
      readTime: "7 min read"
    },
    {
      image: imgImageWithFallback2,
      category: "Financial Planning",
      categoryColor: "#00a63e",
      title: "Building Your Retirement Portfolio",
      excerpt: "A comprehensive guide to planning for retirement with smart investment strategies tailored to different age groups and goals.",
      date: "Nov 25, 2024",
      readTime: "6 min read"
    }
  ];

  return (
    <section className="w-full">
      <div className="flex flex-col gap-[40px] md:gap-[50px] items-center">
        {/* Header */}
        <div className="flex flex-col gap-[20px] md:gap-[30px] items-center w-full max-w-[959px] px-4 text-center">
          <div className="bg-[#ffe8ee] px-[15px] py-[8px] rounded-[2.98262e+07px]">
            <p className="font-['Plus_Jakarta_Sans'] font-normal leading-[20px] text-[#fa106a] text-[14px]">
              Latest Insights
            </p>
          </div>
          
          <h2 className="font-['Plus_Jakarta_Sans'] font-medium leading-[36px] md:leading-[48px] text-[28px] md:text-[36px] lg:text-[48px] text-[#101828]">
            Investment Insights & Tips
          </h2>
          
          <p className="font-['Plus_Jakarta_Sans'] font-normal leading-[24px] md:leading-[28px] text-[16px] md:text-[18px] lg:text-[20px] text-[#4a5565]">
            Stay informed with expert advice, market trends, and financial strategies to help you make smarter investment decisions
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] md:gap-[30px] w-full">
          {blogs.map((blog, idx) => (
            <BlogCard key={idx} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
