import svgPaths from "./svg-ke9u3t7tcb";
import imgImage from "figma:asset/7e150d85ebe6922302c56bb108c23fb425b9360b.png";
import imgImage1 from "figma:asset/da1440a352fbdec8f2273c53c5a1fd4cab6b324b.png";
import imgImage2 from "figma:asset/2edcb8c20f935f39760012b0cdde1451e10d1e3d.png";
import imgImage3 from "figma:asset/d942e5f5b68c356ae83f752729fc7388f207ae4d.png";
import imgImage4 from "figma:asset/91c6d36c2fe169092bd3791f8e587cadc3eb3784.png";
import imgImage5 from "figma:asset/d000322d766755df09557b3d34bf3c64bb46fdd3.png";
import imgImage6 from "figma:asset/63c161d982d470dd6212687307cd3d05ff04fcbf.png";
import imgImage7 from "figma:asset/258f247074aa7031631d09e4cd5a087265f09c35.png";

function Image() {
  return (
    <div className="h-[168.992px] relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col h-[136px] items-start overflow-clip pl-[-0.086px] pr-[-27.078px] relative shrink-0 w-full" data-name="Container">
      <Image />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[136px] items-start left-[210px] opacity-92 top-[104px] w-[150px]" data-name="Container">
      <Container4 />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[4px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[0_85.71%_0_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <path d={svgPaths.p12ed5580} fill="var(--fill-0, #DDDDDD)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0_57.14%_0_28.57%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <path d={svgPaths.p12ed5580} fill="var(--fill-0, #DDDDDD)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0_28.57%_0_57.14%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <path d={svgPaths.p12ed5580} fill="var(--fill-0, #DDDDDD)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0_0_0_85.71%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <path d={svgPaths.p12ed5580} fill="var(--fill-0, #777777)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[4px] items-start left-[166px] top-[224px] w-[28px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[19px] left-[20px] top-[80px] w-[49.242px]" data-name="Paragraph">
      <p className="absolute font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[19px] left-0 text-[14px] text-white top-0 tracking-[0.21px] whitespace-nowrap">앵커리어</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[27px] left-0 text-[20px] text-white top-[-0.5px] tracking-[0.3px] whitespace-nowrap">자소설닷컴</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col h-[54px] items-start left-[20px] top-[103px] w-[132.938px]" data-name="Container">
      <Paragraph1 />
      <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold h-[27px] leading-[27px] relative shrink-0 text-[20px] text-white tracking-[0.3px] w-[133px]">디자인 직무 채용</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[20px] left-0 text-[13px] text-white top-0 tracking-[0.13px] whitespace-nowrap">2023.02.28 ~ 2023.03.27</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[20px] left-0 text-[13px] text-white top-0 tracking-[0.13px] whitespace-nowrap">#자소설닷컴 #프로덕트디자인</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col h-[40px] items-start left-[20px] top-[169px] w-[155.633px]" data-name="Container">
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-[#1b2239] h-[240px] left-0 overflow-clip top-0 w-[360px]" data-name="Container">
      <Container3 />
      <Container5 />
      <Paragraph />
      <Container6 />
      <Container7 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[80px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 80">
        <path d="M0 0H360V80H0V0Z" fill="url(#paint0_linear_3004_1146)" id="Vector" />
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3004_1146" x1="180" x2="180" y1="0" y2="80">
            <stop stopOpacity="0.48" />
            <stop offset="0.510417" stopOpacity="0.16" />
            <stop offset="1" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col h-[80px] items-start left-0 top-0 w-[360px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[20.328px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.3281 20.3281">
        <path d={svgPaths.p317e7500} fill="var(--fill-0, white)" id="Vector" />
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[1.68px] pl-[1.992px] pr-[1.68px] pt-[1.992px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip pt-[8px] px-[8px] rounded-[4px] size-[40px] top-0" data-name="Container">
      <Container13 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[20.016px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2891 20.0156">
        <path d={svgPaths.p307ac400} fill="var(--fill-0, white)" id="Vector" />
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col h-[20.016px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon3 />
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-[2.352px] pr-[2.359px] pt-[1.992px] relative size-full">
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[40px] overflow-clip pt-[8px] px-[8px] rounded-[4px] size-[40px] top-0" data-name="Container">
      <Container15 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[21.516px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0156 21.5156">
        <path d={svgPaths.p16aa5280} fill="var(--fill-0, white)" id="Vector" />
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[21.516px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pt-[1.992px] px-[1.992px] relative size-full">
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[80px] overflow-clip pt-[8px] px-[8px] rounded-[4px] size-[40px] top-0" data-name="Container">
      <Container18 />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container14 />
      <Container17 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col h-[56px] items-start left-0 pl-[232px] pr-[8px] pt-[8px] top-[24px] w-[360px]" data-name="Container">
      <Container11 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[29.66%_7.84%_29.17%_89.45%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.73581 9.88236">
          <path d={svgPaths.p3953ce00} fill="var(--fill-0, #EEEEEE)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[32.59%_3.33%_32.11%_94.35%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.34497 8.47059">
          <path d={svgPaths.p2711f000} fill="var(--fill-0, #DDDDDD)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[32.59%_12.67%_32.12%_84.65%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.63602 8.47064">
          <path d={svgPaths.pc268c00} fill="var(--fill-0, #F5F5F5)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col h-[24px] items-start left-0 top-0 w-[360px]" data-name="Container">
      <Icon5 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[80px] left-0 top-0 w-[360px]" data-name="Container">
      <Container9 />
      <Container10 />
      <Container20 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[240px] left-0 top-0 w-[360px]" data-name="Container">
      <Container2 />
      <Container8 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[18px] left-[12px] top-[7px] w-[29.57px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[18px] left-[15px] text-[#333] text-[12px] text-center top-[-0.5px] tracking-[0.12px] whitespace-nowrap">15/18</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[7.078px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.32812 7.07812">
        <path d={svgPaths.p1a2f8c00} fill="var(--fill-0, #999999)" id="Vector" />
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[7.078px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[13.344px] relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-[4.57px] pr-[4.445px] pt-[3.133px] relative size-full">
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[45.57px] overflow-clip pt-[3.328px] px-[3.328px] rounded-[4px] size-[20px] top-[6px]" data-name="Container">
      <Container23 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.72)] h-[32px] left-[276px] rounded-[16px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)] top-[192px] w-[71.57px]" data-name="Container">
      <Paragraph4 />
      <Container22 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[240px] relative shrink-0 w-[360px]" data-name="Container">
      <Container1 />
      <Container21 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[121px]" data-name="Container">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[19px] relative shrink-0 text-[#333] text-[14px] tracking-[0.14px] w-full">신한은행</p>
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#777] text-[12px] w-full">2024년 기술직 공개 채용</p>
    </div>
  );
}

function Image1() {
  return (
    <div className="h-[54px] relative rounded-[8px] shrink-0 w-[72px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[8px] size-full" src={imgImage1} />
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between pb-[8px] pt-[12px] px-[16px] relative shrink-0 w-[360px]" data-name="Container">
      <Container26 />
      <Image1 />
    </div>
  );
}

function Image2() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-[18px]" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[87.5%] left-[-9.92%] max-w-none top-[6.25%] w-[155.56%]" src={imgImage2} />
      </div>
      <div className="absolute bg-white h-[6px] left-[14.25px] top-[17.25px] w-[7.5px]" />
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip p-[2px] relative rounded-[4px] shrink-0 size-[24px]" data-name="Container">
      <Image2 />
    </div>
  );
}

function Desc() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[4px] relative shrink-0" data-name="desc">
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#555] text-[12px] whitespace-nowrap">SK그룹 SKALA</p>
    </div>
  );
}

function Banner() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative rounded-[4px] shrink-0" data-name="banner">
      <Container28 />
      <Desc />
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[#fafafa] h-[36px] items-center pl-[8px] pr-[12px] relative rounded-[4px] shrink-0 to-[#f5f5f5]" data-name="Container">
      <Banner />
    </div>
  );
}

function Image3() {
  return (
    <div className="aspect-[28/28] relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage3} />
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip p-[2px] relative rounded-[4px] shrink-0 size-[24px]" data-name="Container">
      <Image3 />
    </div>
  );
}

function Desc1() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[4px] relative shrink-0" data-name="desc">
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#555] text-[12px] whitespace-nowrap">기아 채용관</p>
    </div>
  );
}

function Banner1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative rounded-[4px] shrink-0" data-name="banner">
      <Container30 />
      <Desc1 />
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-gradient-to-l content-stretch flex from-[#f5f5f5] h-[36px] items-center pl-[8px] pr-[12px] relative rounded-[4px] shrink-0 to-[#fafafa]" data-name="Container">
      <Banner1 />
    </div>
  );
}

function Desc2() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[4px] relative shrink-0" data-name="desc">
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#555] text-[12px] whitespace-nowrap">{`IT 신입 부트캠프 `}</p>
    </div>
  );
}

function Banner2() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative rounded-[4px] shrink-0" data-name="banner">
      <Desc2 />
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-gradient-to-l content-stretch flex from-[#f5f5f5] h-[36px] items-center pl-[8px] pr-[12px] relative rounded-[4px] shrink-0 to-[#fafafa]" data-name="Container">
      <Banner2 />
    </div>
  );
}

function Image4() {
  return (
    <div className="aspect-[28/28] relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage3} />
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[24px]" data-name="Container">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <Image4 />
      </div>
      <div aria-hidden="true" className="absolute border-[#eee] border-[0.6px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Desc3() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[4px] relative shrink-0" data-name="desc">
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#555] text-[12px] whitespace-nowrap">기아 채용관</p>
    </div>
  );
}

function Banner3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative rounded-[4px] shrink-0" data-name="banner">
      <Container33 />
      <Desc3 />
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[#fafafa] h-[36px] items-center pl-[8px] pr-[12px] relative rounded-[4px] shrink-0 to-[#949494]" data-name="Container">
      <Banner3 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip p-[8px] relative shrink-0 w-[360px]" data-name="list">
      <Container27 />
      <Container29 />
      <Container31 />
      <Container32 />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0">
      <Container25 />
      <div className="h-0 relative shrink-0 w-[360px]" data-name="border">
        <div className="absolute bottom-full left-0 right-0 top-0" data-name="border">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1">
              <line id="border" stroke="var(--stroke-0, #F5F5F5)" x2="360" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <List />
    </div>
  );
}

function SectionAds() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0" data-name="SectionAds">
      <Container />
      <Frame />
      <div className="h-0 relative shrink-0 w-[360px]" data-name="border">
        <div className="absolute bottom-full left-0 right-0 top-0" data-name="border">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1">
              <line id="border" stroke="var(--stroke-0, #F5F5F5)" x2="360" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <SectionAds />
    </div>
  );
}

function Title() {
  return (
    <div className="relative shrink-0 w-full" data-name="title">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[18px] min-w-px relative text-[#777] text-[12px]">{`👀 새로운 발견 `}</p>
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#f2f3ff] items-center justify-center overflow-clip p-[8px] relative rounded-[18px] shrink-0 size-[36px] to-[#f9f2ff]" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="symbolistic/ic_swipeCard_default_fill">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[18.236px] left-[calc(50%+0.16px)] top-[calc(50%-0.01px)] w-[16.988px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9877 18.2365">
            <g id="vector">
              <path d={svgPaths.pf92d980} fill="url(#paint0_linear_3018_517)" />
              <path d={svgPaths.pf04df00} fill="url(#paint1_linear_3018_517)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3018_517" x1="8.49385" x2="8.49385" y1="4.11671e-09" y2="18.2365">
                <stop stopColor="#8B9AFC" />
                <stop offset="1" stopColor="#C192F1" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_3018_517" x1="8.49385" x2="8.49385" y1="4.11671e-09" y2="18.2365">
                <stop stopColor="#8B9AFC" />
                <stop offset="1" stopColor="#C192F1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Desc4() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[4px] relative shrink-0" data-name="desc">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[19px] relative shrink-0 text-[#333] text-[14px] tracking-[0.14px] whitespace-nowrap">{`스낵 챗 발견 `}</p>
    </div>
  );
}

function Banner4() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative rounded-[4px] shrink-0" data-name="banner">
      <Container35 />
      <Desc4 />
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-[48px] items-center pl-[8px] pr-[10px] relative rounded-[6px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Banner4 />
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="ic_arrowRight_default_line">
        <div className="absolute inset-[23.48%_33.33%_23.48%_34.26%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.18533 8.48533">
            <path d={svgPaths.p13a1fe00} fill="var(--fill-0, #999999)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#fff3f9] items-center justify-center overflow-clip p-[8px] relative rounded-[18px] shrink-0 size-[36px] to-[#fff3f4]" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="ic_calendarCheck_default_line">
        <div className="absolute inset-[4.17%_8.33%_12.5%_8.33%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
            <path d={svgPaths.p1eb70680} fill="var(--fill-0, #FF87B9)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Desc5() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[4px] relative shrink-0" data-name="desc">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[19px] relative shrink-0 text-[#333] text-[14px] tracking-[0.14px] whitespace-nowrap">채용달력</p>
    </div>
  );
}

function Banner5() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative rounded-[4px] shrink-0" data-name="banner">
      <Container37 />
      <Desc5 />
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-[48px] items-center pl-[8px] pr-[10px] relative rounded-[6px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Banner5 />
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="ic_arrowRight_default_line">
        <div className="absolute inset-[23.48%_33.33%_23.48%_34.26%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.18533 8.48533">
            <path d={svgPaths.p13a1fe00} fill="var(--fill-0, #999999)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#daf5f7] items-center justify-center overflow-clip p-[8px] relative rounded-[18px] shrink-0 size-[36px] to-[#e8f5ff]" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="ic_aiCard_default_line">
        <div className="absolute h-[17.417px] left-[3px] top-[1.75px] w-[15.334px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3337 17.417">
            <g id="vector">
              <path d={svgPaths.p27b9f6f2} fill="url(#paint0_linear_3018_509)" />
              <path d={svgPaths.p32eac000} fill="url(#paint1_linear_3018_509)" />
              <path d={svgPaths.p3a5fae00} fill="url(#paint2_linear_3018_509)" />
              <path d={svgPaths.p208a480} fill="url(#paint3_linear_3018_509)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3018_509" x1="7.66683" x2="7.66683" y1="0" y2="17.417">
                <stop stopColor="#1ABDD0" />
                <stop offset="1" stopColor="#57A8FF" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_3018_509" x1="7.66683" x2="7.66683" y1="0" y2="17.417">
                <stop stopColor="#1ABDD0" />
                <stop offset="1" stopColor="#57A8FF" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_3018_509" x1="7.66683" x2="7.66683" y1="0" y2="17.417">
                <stop stopColor="#1ABDD0" />
                <stop offset="1" stopColor="#57A8FF" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_3018_509" x1="7.66683" x2="7.66683" y1="0" y2="17.417">
                <stop stopColor="#1ABDD0" />
                <stop offset="1" stopColor="#57A8FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Desc6() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[4px] relative shrink-0" data-name="desc">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[19px] relative shrink-0 text-[#333] text-[14px] tracking-[0.14px] whitespace-nowrap">AI 인기 토픽</p>
    </div>
  );
}

function Banner6() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative rounded-[4px] shrink-0" data-name="banner">
      <Container39 />
      <Desc6 />
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-[48px] items-center pl-[8px] pr-[10px] relative rounded-[6px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Banner6 />
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="ic_arrowRight_default_line">
        <div className="absolute inset-[23.48%_33.33%_23.48%_34.26%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.18533 8.48533">
            <path d={svgPaths.p13a1fe00} fill="var(--fill-0, #999999)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[48px] items-start px-[8px] relative shrink-0 w-[360px]" data-name="list">
      <Container34 />
      <Container36 />
      <Container38 />
    </div>
  );
}

function TopList() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[6px] items-start pt-[16px] relative shrink-0 w-full" data-name="topList">
      <Title />
      <List1 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[25px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[0] left-0 text-[#333] text-[18px] top-[-0.5px] tracking-[0.27px] whitespace-nowrap">
        <span className="leading-[25px]">{`다재다능 스프링복 `}</span>
        <span className="leading-[25px] text-[#777]">님의</span>
      </p>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col h-[50px] items-start left-[16px] top-[24px] w-[225.906px]" data-name="Container">
      <Paragraph5 />
      <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold h-[25px] leading-[25px] relative shrink-0 text-[#777] text-[18px] tracking-[0.27px] w-[226px]">이용 패턴에 맞게 찾아봤어요 🕵🏻‍♂️</p>
    </div>
  );
}

function Container41() {
  return <div className="absolute border border-[#f5f5f5] border-solid h-[24px] left-[311.78px] rounded-[4px] top-[24px] w-[32.219px]" data-name="Container" />;
}

function Paragraph6() {
  return (
    <div className="absolute h-[18px] left-[319.78px] top-[27px] w-[16.219px]" data-name="Paragraph">
      <p className="-translate-x-full absolute font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[18px] left-[17px] text-[#ddd] text-[12px] text-right top-[-0.5px] tracking-[0.12px] whitespace-nowrap">AD</p>
    </div>
  );
}

function Container44() {
  return <div className="absolute border border-[#fed2ba] border-solid h-[34px] left-0 rounded-[4px] top-0 w-[139.023px]" data-name="Container" />;
}

function Container45() {
  return (
    <div className="absolute content-stretch flex flex-col h-[19px] items-center justify-center left-0 px-[8px] py-[-1px] top-[7.5px] w-[139.023px]" data-name="Container">
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal h-[21px] leading-[21px] relative shrink-0 text-[#555] text-[14px] text-center tracking-[0.14px] w-[123px]">실시간 인기 급상승 🏆</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute bg-[#fff6f0] h-[34px] left-0 rounded-[4px] top-0 w-[139.023px]" data-name="Container">
      <Container44 />
      <Container45 />
    </div>
  );
}

function Container47() {
  return <div className="absolute border border-[#eee] border-solid h-[34px] left-0 rounded-[4px] top-0 w-[166.648px]" data-name="Container" />;
}

function Paragraph7() {
  return (
    <div className="h-[21px] relative shrink-0 w-[150.648px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[21px] left-[75.5px] text-[#777] text-[14px] text-center top-0 tracking-[0.14px] whitespace-nowrap">$전공명$ 전공자가 많이 쓴</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex flex-col h-[19px] items-center justify-center left-0 px-[8px] py-[-1px] top-[7px] w-[166.648px]" data-name="Container">
      <Paragraph7 />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute bg-white h-[34px] left-[147.02px] rounded-[4px] top-0 w-[166.648px]" data-name="Container">
      <Container47 />
      <Container48 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute h-[34px] left-[16px] overflow-clip top-[90px] w-[328px]" data-name="Container">
      <Container43 />
      <Container46 />
    </div>
  );
}

function Image5() {
  return (
    <div className="absolute h-[19.5px] left-[16px] top-[42.25px] w-[48px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
    </div>
  );
}

function Container51() {
  return (
    <div className="bg-[#e8ebfe] h-[20px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Pretendard_Variable:Regular',sans-serif] font-normal h-[20px] leading-[20px] left-[25px] text-[#7084fa] text-[13px] text-center top-0 tracking-[0.13px] w-[34px]">대기업</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[84px] pr-[-50.102px] top-[72px] w-0" data-name="Container">
      <Container51 />
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute h-[20px] left-[8px] top-0 w-[60.227px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[20px] left-[30.5px] text-[#7084fa] text-[13px] text-center top-0 tracking-[0.13px] whitespace-nowrap">글로벌 기업</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="bg-[#e8ebfe] h-[20px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container54 />
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[88px] pr-[-76.227px] top-[72px] w-0" data-name="Container">
      <Container53 />
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute h-[22px] left-[84px] top-[8px] w-[212px]" data-name="Container">
      <p className="absolute font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[22px] left-0 text-[#555] text-[16px] top-[-0.5px] tracking-[0.24px] whitespace-nowrap">삼성전자</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute h-[18px] left-[84px] top-[32px] w-[228px]" data-name="Container">
      <p className="absolute font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#999] text-[12px] top-[-0.5px] tracking-[0.12px] whitespace-nowrap">2024년 공개채용</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute h-[18px] left-[84px] top-[50px] w-[228px]" data-name="Container">
      <p className="absolute font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#999] text-[12px] top-[-0.5px] tracking-[0.12px] whitespace-nowrap">~ 2024년 8월 29일 17시 00분</p>
    </div>
  );
}

function CompanyListItem() {
  return (
    <div className="absolute bg-white h-[104px] left-0 top-0 w-[328px]" data-name="CompanyListItem">
      <Image5 />
      <Container50 />
      <Container52 />
      <Container55 />
      <Container56 />
      <Container57 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-px overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-0 right-0 top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328 1">
            <path d="M0 0.5H328" id="Vector" stroke="var(--stroke-0, #F5F5F5)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute content-stretch flex flex-col h-0 items-start left-0 pt-[-1px] top-[104px] w-[328px]" data-name="Container">
      <Icon7 />
    </div>
  );
}

function Image6() {
  return (
    <div className="absolute h-[27px] left-[18px] top-[39px] w-[44px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage5} />
    </div>
  );
}

function Container60() {
  return (
    <div className="bg-[#e8ebfe] h-[20px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Pretendard_Variable:Regular',sans-serif] font-normal h-[20px] leading-[20px] left-[42.5px] text-[#7084fa] text-[13px] text-center top-0 tracking-[0.13px] w-[69px]">모빌리티 SW</p>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[84px] pr-[-84.906px] top-[72px] w-0" data-name="Container">
      <Container60 />
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute h-[20px] left-[8px] top-0 w-[103.641px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[20px] left-[52px] text-[#7084fa] text-[13px] text-center top-0 tracking-[0.13px] whitespace-nowrap">업계 평균 연봉 TOP</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="bg-[#e8ebfe] h-[20px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container63 />
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[88px] pr-[-119.641px] top-[72px] w-0" data-name="Container">
      <Container62 />
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute h-[22px] left-[84px] top-[8px] w-[212px]" data-name="Container">
      <p className="absolute font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[22px] left-0 text-[#555] text-[16px] top-[-0.5px] tracking-[0.24px] whitespace-nowrap">현대자동차</p>
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute h-[18px] left-[84px] top-[32px] w-[228px]" data-name="Container">
      <p className="absolute font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#999] text-[12px] top-[-0.5px] tracking-[0.12px] whitespace-nowrap">2024년 대졸 신입 채용</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute h-[18px] left-[84px] top-[50px] w-[228px]" data-name="Container">
      <p className="absolute font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#999] text-[12px] top-[-0.5px] tracking-[0.12px] whitespace-nowrap">~ 2024년 8월 28일 12시 00분</p>
    </div>
  );
}

function CompanyListItem1() {
  return (
    <div className="absolute bg-white h-[104px] left-0 top-[104px] w-[328px]" data-name="CompanyListItem">
      <Image6 />
      <Container59 />
      <Container61 />
      <Container64 />
      <Container65 />
      <Container66 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-px overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-0 right-0 top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328 1">
            <path d="M0 0.5H328" id="Vector" stroke="var(--stroke-0, #F5F5F5)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute content-stretch flex flex-col h-0 items-start left-0 pt-[-1px] top-[208px] w-[328px]" data-name="Container">
      <Icon8 />
    </div>
  );
}

function Image7() {
  return (
    <div className="absolute h-[22.5px] left-[17.5px] top-[40.75px] w-[45px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute h-[20px] left-[8px] top-0 w-[77.516px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[20px] left-[39px] text-[#7084fa] text-[13px] text-center top-0 tracking-[0.13px] whitespace-nowrap">매출 업계 TOP</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="bg-[#e8ebfe] h-[20px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container70 />
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[84px] pr-[-93.516px] top-[72px] w-0" data-name="Container">
      <Container69 />
    </div>
  );
}

function Container72() {
  return (
    <div className="bg-[#e8ebfe] h-[20px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Pretendard_Variable:Regular',sans-serif] font-normal h-[20px] leading-[20px] left-[42px] text-[#7084fa] text-[13px] text-center top-0 tracking-[0.13px] w-[68px]">1944년 설립</p>
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[88px] pr-[-83.906px] top-[72px] w-0" data-name="Container">
      <Container72 />
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute h-[22px] left-[84px] top-[8px] w-[212px]" data-name="Container">
      <p className="absolute font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[22px] left-0 text-[#555] text-[16px] top-[-0.5px] tracking-[0.24px] whitespace-nowrap">SK하이닉스</p>
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute h-[18px] left-[84px] top-[32px] w-[228px]" data-name="Container">
      <p className="absolute font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#999] text-[12px] top-[-0.5px] tracking-[0.12px] whitespace-nowrap">2024년 하반기 공개채용</p>
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute h-[18px] left-[84px] top-[50px] w-[228px]" data-name="Container">
      <p className="absolute font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#999] text-[12px] top-[-0.5px] tracking-[0.12px] whitespace-nowrap">~ 2024년 9월 1일 12시 00분</p>
    </div>
  );
}

function CompanyListItem2() {
  return (
    <div className="absolute bg-white h-[104px] left-0 top-[208px] w-[328px]" data-name="CompanyListItem">
      <Image7 />
      <Container68 />
      <Container71 />
      <Container73 />
      <Container74 />
      <Container75 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-px overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-0 right-0 top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328 1">
            <path d="M0 0.5H328" id="Vector" stroke="var(--stroke-0, #F5F5F5)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute content-stretch flex flex-col h-0 items-start left-0 pt-[-1px] top-[312px] w-[328px]" data-name="Container">
      <Icon9 />
    </div>
  );
}

function Image8() {
  return (
    <div className="absolute h-[8.148px] left-[19px] top-[48.25px] w-[42.461px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute h-[60px] left-[84px] top-[8px] w-[228px] whitespace-nowrap" data-name="Container">
      <p className="absolute font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[22px] left-0 text-[#555] text-[16px] top-[-0.5px] tracking-[0.24px]">네이버</p>
      <p className="absolute font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#999] text-[12px] top-[23.5px] tracking-[0.12px]">채용 전환 디자인 인턴십</p>
      <p className="absolute font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#999] text-[12px] top-[41.5px] tracking-[0.12px]">~ 2024년 8월 20일 23시 59분</p>
    </div>
  );
}

function CompanyListItem3() {
  return (
    <div className="absolute bg-white h-[104px] left-0 top-[312px] w-[328px]" data-name="CompanyListItem">
      <Image8 />
      <Container77 />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute h-[416px] left-[17px] overflow-clip top-[136px] w-[328px]" data-name="Container">
      <CompanyListItem />
      <Container58 />
      <CompanyListItem1 />
      <Container67 />
      <CompanyListItem2 />
      <Container76 />
      <CompanyListItem3 />
    </div>
  );
}

function Container78() {
  return <div className="absolute border border-[#eee] border-solid h-[40px] left-[16px] rounded-[4px] top-[560px] w-[328px]" data-name="Container" />;
}

function Container79() {
  return (
    <div className="absolute h-[19px] left-[139.63px] top-[570.5px] w-[80.75px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[19px] left-[40.5px] text-[#777] text-[14px] text-center top-0 tracking-[0.21px] whitespace-nowrap">더 보고 싶어요</p>
    </div>
  );
}

function SectionRecommand() {
  return (
    <div className="bg-white h-[632px] relative shrink-0 w-[360px]" data-name="SectionRecommand">
      <Container40 />
      <Container41 />
      <Paragraph6 />
      <Container42 />
      <Container49 />
      <Container78 />
      <Container79 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <TopList />
      <SectionRecommand />
    </div>
  );
}

export default function SectionTop() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full" data-name="SectionTop">
      <Frame1 />
      <Frame2 />
    </div>
  );
}