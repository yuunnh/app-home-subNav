import svgPaths from "./svg-c50q120s8j";
import imgLogo from "figma:asset/d942e5f5b68c356ae83f752729fc7388f207ae4d.png";

function Img() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[40px]" data-name="img">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[30px] left-1/2 top-1/2 w-[40px]" data-name="logo">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[133.33%] left-0 max-w-none top-[-16.67%] w-full" src={imgLogo} />
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="-translate-x-1/2 absolute bg-white content-stretch flex gap-[12px] items-center left-1/2 pl-[24px] pr-[12px] py-[4px] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.04)] top-0 w-[344px]" data-name="list">
      <div className="flex flex-[1_0_0] flex-col font-normal h-[22px] justify-center leading-[0] min-w-px relative text-[#555] text-[16px] tracking-[0.16px]">
        <p className="leading-[24px]">기아 채용관</p>
      </div>
      <Img />
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="system/ic_arrow_right_linear">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[23.48%_33.33%_23.48%_34.26%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.18533 8.48533">
            <path d={svgPaths.p13a1fe00} fill="var(--fill-0, #999999)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function SectionAds() {
  return (
    <div className="relative size-full" data-name="section_ads2">
      <List />
      <div className="absolute bg-[#333] h-[48px] left-0 rounded-bl-[4px] rounded-tl-[4px] top-0 w-[6px]" data-name="indicator" />
    </div>
  );
}