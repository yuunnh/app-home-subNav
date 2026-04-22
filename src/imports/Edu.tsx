import img11 from "figma:asset/c266537bad381aa57982dc54548822de16e64a06.png";
import img226 from "figma:asset/bcdd0f64762fb7a4792604589954badf1e066388.png";
import img31 from "figma:asset/951bcf253467d6d215cc01dbfc19f2051607b38f.png";
import img41 from "figma:asset/051d00a16a659a0703bb6d3a9ce447ff85208eb9.png";
import img51 from "figma:asset/2cf4cd1ebe82947440094997fa1a5bca3f4496b0.png";

function Header() {
  return (
    <div className="content-stretch flex gap-[60px] items-start relative shrink-0 w-[328px]" data-name="header">
      <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[25px] relative shrink-0 text-[#333333] text-[18px] text-nowrap tracking-[0.27px] whitespace-pre">직무 교육관 🧑‍💻</p>
    </div>
  );
}

function Banner() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="banner">
      <div className="relative shrink-0 size-[150px]" data-name="1 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img11} />
      </div>
      <div className="relative shrink-0 size-[150px]" data-name="2 26">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img226} />
      </div>
      <div className="relative shrink-0 size-[150px]" data-name="3 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img31} />
      </div>
      <div className="relative shrink-0 size-[150px]" data-name="4 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img41} />
      </div>
      <div className="relative shrink-0 size-[150px]" data-name="5 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img51} />
      </div>
    </div>
  );
}

export default function Edu() {
  return (
    <div className="bg-white relative size-full" data-name="edu">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-[32px] pt-[24px] px-[16px] relative size-full">
          <Header />
          <Banner />
        </div>
      </div>
    </div>
  );
}