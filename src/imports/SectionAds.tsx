import svgPaths from "./svg-1057np8p5n";
import imgImage from "figma:asset/7e150d85ebe6922302c56bb108c23fb425b9360b.png";
import imgImage1 from "figma:asset/da1440a352fbdec8f2273c53c5a1fd4cab6b324b.png";

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
      <p className="absolute font-bold leading-[19px] left-0 text-[14px] text-white top-0 tracking-[0.21px] whitespace-nowrap">앵커리어</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-bold leading-[27px] left-0 text-[20px] text-white top-[-0.5px] tracking-[0.3px] whitespace-nowrap">자소설닷컴</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col h-[54px] items-start left-[20px] top-[103px] w-[132.938px]" data-name="Container">
      <Paragraph1 />
      <p className="font-bold h-[27px] leading-[27px] relative shrink-0 text-[20px] text-white tracking-[0.3px] w-[133px]">디자인 직무 채용</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-normal leading-[20px] left-0 text-[13px] text-white top-0 tracking-[0.13px] whitespace-nowrap">2023.02.28 ~ 2023.03.27</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-normal leading-[20px] left-0 text-[13px] text-white top-0 tracking-[0.13px] whitespace-nowrap">#자소설닷컴 #프로덕트디자인</p>
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
      <p className="-translate-x-1/2 absolute font-normal leading-[18px] left-[15px] text-[#333] text-[12px] text-center top-[-0.5px] tracking-[0.12px] whitespace-nowrap">15/18</p>
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

function Container25() {
  return (
    <div className="h-[45px] relative shrink-0 w-[143px] whitespace-nowrap" data-name="Container">
      <p className="absolute font-bold leading-[22px] left-0 text-[#333] text-[16px] top-[-0.5px] tracking-[0.24px]">신한은행</p>
      <p className="absolute font-normal leading-[21px] left-0 text-[#777] text-[14px] top-[24px] tracking-[0.14px]">2024년 기술직 공개 채용</p>
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

function Frame() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between pb-[8px] pt-[12px] px-[16px] relative shrink-0 w-[360px]">
      <Container25 />
      <Image1 />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[4px] relative shrink-0" data-name="title">
      <p className="font-normal leading-[20px] relative shrink-0 text-[#777] text-[13px] tracking-[0.13px] whitespace-nowrap">{`💡추천드려요 `}</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p252b1cc0} fill="var(--fill-0, #7084FA)" id="Vector" opacity="0.15" />
          <path d={svgPaths.p252b1cc0} id="Vector_2" stroke="var(--stroke-0, #7084FA)" strokeWidth="1.37143" />
          <path d={svgPaths.p398ae100} fill="var(--fill-0, #7084FA)" id="Vector_3" />
          <path d="M11.4273 5.71427V10.8571" id="Vector_4" stroke="var(--stroke-0, #7084FA)" strokeLinecap="round" strokeWidth="1.71429" />
          <path d="M20.5727 5.71427V10.8571" id="Vector_5" stroke="var(--stroke-0, #7084FA)" strokeLinecap="round" strokeWidth="1.71429" />
          <path d={svgPaths.pda3bb00} fill="var(--fill-0, #7084FA)" id="Vector_6" />
          <path d={svgPaths.p11378c40} fill="var(--fill-0, #7084FA)" id="Vector_7" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-[#fafafa] flex-[1_0_0] min-w-px relative rounded-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-[1.167px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pb-[9.167px] pt-[5.167px] px-[9.167px] relative size-full">
          <Icon7 />
          <p className="font-normal leading-[20px] min-w-full relative shrink-0 text-[#333] text-[13px] text-center tracking-[0.13px] w-[min-content]">채용달력</p>
        </div>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p1f4bc300} fill="var(--fill-0, #F7609F)" id="Vector" opacity="0.15" stroke="var(--stroke-0, #F7609F)" strokeWidth="1.37143" />
          <g id="Vector_2" opacity="0.1">
            <path d={svgPaths.p293b2b00} fill="var(--fill-0, #F7609F)" />
            <path d={svgPaths.p293b2b00} stroke="var(--stroke-0, #F7609F)" strokeLinecap="round" strokeWidth="1.37143" />
          </g>
          <path d={svgPaths.p30357a00} fill="var(--fill-0, white)" id="Vector_3" stroke="var(--stroke-0, #F7609F)" strokeWidth="1.37143" />
          <path d={svgPaths.p3a153800} id="Vector_4" stroke="var(--stroke-0, #F7609F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.48571" />
        </g>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[#fafafa] flex-[1_0_0] min-w-px relative rounded-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-[1.167px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pb-[9.167px] pt-[5.167px] px-[9.167px] relative size-full">
          <Icon8 />
          <p className="font-normal leading-[20px] min-w-full relative shrink-0 text-[#333] text-[13px] text-center tracking-[0.13px] w-[min-content]">현직자과외</p>
        </div>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p1d090300} fill="var(--fill-0, #FF6813)" id="Vector" opacity="0.15" stroke="var(--stroke-0, #FF6813)" strokeWidth="1.37143" />
          <path d={svgPaths.pad78080} fill="var(--fill-0, #FF6813)" id="Vector_2" />
          <path d={svgPaths.p4e5c800} fill="var(--fill-0, #FF6813)" id="Vector_3" />
          <path d={svgPaths.p2c5ec980} fill="var(--fill-0, #FF6813)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-[#fafafa] flex-[1_0_0] min-w-px relative rounded-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-[1.167px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pb-[9.167px] pt-[5.167px] px-[9.167px] relative size-full">
          <Icon9 />
          <p className="font-normal leading-[20px] min-w-full relative shrink-0 text-[#333] text-[13px] text-center tracking-[0.13px] w-[min-content]">{`실시간채팅 `}</p>
        </div>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p27b8cc00} fill="var(--fill-0, #B266FF)" id="Vector" opacity="0.15" stroke="var(--stroke-0, #B266FF)" strokeLinejoin="round" strokeWidth="1.37143" />
          <path d={svgPaths.p28f3e80} id="Vector_2" stroke="var(--stroke-0, #B266FF)" strokeLinecap="round" strokeWidth="1.48571" />
          <path d={svgPaths.p22edffe8} id="Vector_3" opacity="0.4" stroke="var(--stroke-0, #B266FF)" strokeLinecap="round" strokeWidth="1.14286" />
          <path d={svgPaths.p267f5d84} id="Vector_4" stroke="var(--stroke-0, #B266FF)" strokeLinecap="round" strokeWidth="1.48571" />
        </g>
      </svg>
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-[#fafafa] flex-[1_0_0] min-w-px relative rounded-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-[1.167px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pb-[9.167px] pt-[5.167px] px-[9.167px] relative size-full">
          <Icon10 />
          <p className="font-normal leading-[20px] min-w-full relative shrink-0 text-[#333] text-[13px] text-center tracking-[0.13px] w-[min-content]">{`이벤트 `}</p>
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Container28 />
      <Container29 />
      <Container30 />
    </div>
  );
}

function QuickAccessNav() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="QuickAccessNav">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[12px] relative size-full">
        <Title />
        <Container26 />
      </div>
    </div>
  );
}

export default function SectionAds() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="SectionAds">
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
      <QuickAccessNav />
    </div>
  );
}