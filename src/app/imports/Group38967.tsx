import imgPasteYourContent from "figma:asset/68d9ff70f8f76698c42d13f260c615df3751de8b.png";
import imgPasteYourContent1 from "figma:asset/3694b2c01aab15e6bc27d6dc56a8b7f7ce4d08ec.png";
import imgWhiteFront from "figma:asset/614ed18f9655de59ca6019a83f0bb3044c50f676.png";

function Screen() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Screen">
      <div className="absolute h-[572.42px] left-[15.48px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-15.479px_-13.79px] mask-size-[294.935px_600px] top-[13.79px] w-[264.54px]" data-name="Paste your content" style={{ maskImage: `url('${imgPasteYourContent}')` }}>
        <img alt="" className="block max-w-none size-full" height="572.42" src={imgPasteYourContent1} width="264.54" />
      </div>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[600px] left-0 top-0 w-[294.934px]" data-name="White Front">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[141.7%] left-[-142.18%] max-w-none top-[-20.85%] w-[384.35%]" src={imgWhiteFront} />
        </div>
      </div>
      <Screen />
    </div>
  );
}