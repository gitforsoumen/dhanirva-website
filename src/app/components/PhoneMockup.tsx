import Home from '../imports/Home';

export default function PhoneMockup() {
  return (
    <div className="relative scale-[0.65]">
      {/* iPhone Frame with floating effect */}
      <div className="relative w-[393px] h-[852px] bg-black rounded-[60px] p-[12px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5),0_30px_60px_-30px_rgba(0,0,0,0.4)] transform rotate-[-5deg]">
        {/* Inner Screen Border */}
        <div className="relative w-full h-full bg-white rounded-[48px] overflow-hidden">
          {/* Screen Content */}
          <div className="relative w-full h-full overflow-hidden">
            <Home />
          </div>
        </div>
        
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[180px] h-[30px] bg-black rounded-b-[20px] z-10"></div>
        
        {/* Volume Buttons */}
        <div className="absolute left-[-3px] top-[120px] w-[3px] h-[40px] bg-gray-800 rounded-l"></div>
        <div className="absolute left-[-3px] top-[180px] w-[3px] h-[40px] bg-gray-800 rounded-l"></div>
        
        {/* Power Button */}
        <div className="absolute right-[-3px] top-[150px] w-[3px] h-[60px] bg-gray-800 rounded-r"></div>
      </div>
    </div>
  );
}