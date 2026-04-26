import svgPaths from "./svg-3v1w53zko6";
import imgImage from "figma:asset/7e150d85ebe6922302c56bb108c23fb425b9360b.png";
import imgImage1 from "figma:asset/da1440a352fbdec8f2273c53c5a1fd4cab6b324b.png";
import imgImage2 from "figma:asset/2edcb8c20f935f39760012b0cdde1451e10d1e3d.png";
import imgImage3 from "figma:asset/d942e5f5b68c356ae83f752729fc7388f207ae4d.png";

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

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[121px]" data-name="Container">
      <p className="font-semibold leading-[19px] relative shrink-0 text-[#333] text-[14px] tracking-[0.14px] w-full">신한은행</p>
      <p className="font-normal leading-[18px] relative shrink-0 text-[#777] text-[12px] w-full">2024년 기술직 공개 채용</p>
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

function Frame() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0">
      <Container25 />
      <div className="h-0 relative shrink-0 w-[360px]" data-name="border">
        <div className="absolute bottom-full left-0 right-0 top-0" data-name="border">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1">
              <line id="border" stroke="var(--stroke-0, #EEEEEE)" x2="360" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionAds() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="SectionAds">
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

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] relative size-full">
          <p className="flex-[1_0_0] font-normal leading-[18px] min-w-px relative text-[#777] text-[12px]">{`👀 새로운 발견 `}</p>
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#f2f3ff] items-center justify-center overflow-clip p-[8px] relative rounded-[18px] shrink-0 size-[36px] to-[#f9f2ff]" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="symbolistic/ic_swipeCard_default_fill">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[18.236px] left-[calc(50%+0.16px)] top-[calc(50%-0.01px)] w-[16.988px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9877 18.2365">
            <g id="vector">
              <path d={svgPaths.pf92d980} fill="url(#paint0_linear_3017_198)" />
              <path d={svgPaths.pf04df00} fill="url(#paint1_linear_3017_198)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3017_198" x1="8.49385" x2="8.49385" y1="4.11671e-09" y2="18.2365">
                <stop stopColor="#8B9AFC" />
                <stop offset="1" stopColor="#C192F1" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_3017_198" x1="8.49385" x2="8.49385" y1="4.11671e-09" y2="18.2365">
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

function Desc() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[4px] relative shrink-0" data-name="desc">
      <p className="font-semibold leading-[19px] relative shrink-0 text-[#333] text-[14px] tracking-[0.14px] whitespace-nowrap">{`스낵 챗 발견 `}</p>
    </div>
  );
}

function Banner() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative rounded-[4px] shrink-0" data-name="banner">
      <Container28 />
      <Desc />
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-[48px] items-center pl-[8px] pr-[10px] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.04)] shrink-0" data-name="Container">
      <Banner />
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

function Container30() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#daf5f7] items-center justify-center overflow-clip p-[8px] relative rounded-[18px] shrink-0 size-[36px] to-[#e8f5ff]" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="ic_aiCard_default_line">
        <div className="absolute h-[17.417px] left-[3px] top-[1.75px] w-[15.334px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3337 17.417">
            <g id="vector">
              <path d={svgPaths.p27b9f6f2} fill="url(#paint0_linear_3017_190)" />
              <path d={svgPaths.p32eac000} fill="url(#paint1_linear_3017_190)" />
              <path d={svgPaths.p3a5fae00} fill="url(#paint2_linear_3017_190)" />
              <path d={svgPaths.p208a480} fill="url(#paint3_linear_3017_190)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3017_190" x1="7.66683" x2="7.66683" y1="0" y2="17.417">
                <stop stopColor="#1ABDD0" />
                <stop offset="1" stopColor="#57A8FF" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_3017_190" x1="7.66683" x2="7.66683" y1="0" y2="17.417">
                <stop stopColor="#1ABDD0" />
                <stop offset="1" stopColor="#57A8FF" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_3017_190" x1="7.66683" x2="7.66683" y1="0" y2="17.417">
                <stop stopColor="#1ABDD0" />
                <stop offset="1" stopColor="#57A8FF" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_3017_190" x1="7.66683" x2="7.66683" y1="0" y2="17.417">
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

function Desc1() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[4px] relative shrink-0" data-name="desc">
      <p className="font-semibold leading-[19px] relative shrink-0 text-[#333] text-[14px] tracking-[0.14px] whitespace-nowrap">AI 인기 토픽</p>
    </div>
  );
}

function Banner1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative rounded-[4px] shrink-0" data-name="banner">
      <Container30 />
      <Desc1 />
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-[48px] items-center pl-[8px] pr-[10px] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.04)] shrink-0" data-name="Container">
      <Banner1 />
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

function Container32() {
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

function Desc2() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[4px] relative shrink-0" data-name="desc">
      <p className="font-semibold leading-[19px] relative shrink-0 text-[#333] text-[14px] tracking-[0.14px] whitespace-nowrap">채용달력</p>
    </div>
  );
}

function Banner2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative rounded-[4px] shrink-0" data-name="banner">
      <Container32 />
      <Desc2 />
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-[48px] items-center pl-[8px] pr-[10px] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.04)] shrink-0" data-name="Container">
      <Banner2 />
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

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[48px] items-start px-[8px] relative shrink-0 w-[360px]">
      <Container27 />
      <Container29 />
      <Container31 />
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

function Container34() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip p-[2px] relative rounded-[4px] shrink-0 size-[24px]" data-name="Container">
      <Image2 />
    </div>
  );
}

function Desc3() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[4px] relative shrink-0" data-name="desc">
      <p className="font-normal leading-[18px] relative shrink-0 text-[#555] text-[12px] whitespace-nowrap">SK그룹 SKALA</p>
    </div>
  );
}

function Banner3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative rounded-[4px] shrink-0" data-name="banner">
      <Container34 />
      <Desc3 />
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-gradient-to-l content-stretch flex from-[#fafafa] h-[36px] items-center pl-[8px] pr-[12px] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.04)] shrink-0 to-white" data-name="Container">
      <Banner3 />
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

function Container36() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip p-[2px] relative rounded-[4px] shrink-0 size-[24px]" data-name="Container">
      <Image3 />
    </div>
  );
}

function Desc4() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[4px] relative shrink-0" data-name="desc">
      <p className="font-normal leading-[18px] relative shrink-0 text-[#555] text-[12px] whitespace-nowrap">기아 채용관</p>
    </div>
  );
}

function Banner4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative rounded-[4px] shrink-0" data-name="banner">
      <Container36 />
      <Desc4 />
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-gradient-to-l content-stretch flex from-[#fafafa] h-[36px] items-center pl-[8px] pr-[12px] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.04)] shrink-0 to-white" data-name="Container">
      <Banner4 />
    </div>
  );
}

function Desc5() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[4px] relative shrink-0" data-name="desc">
      <p className="font-normal leading-[18px] relative shrink-0 text-[#555] text-[12px] whitespace-nowrap">{`IT 신입 부트캠프 `}</p>
    </div>
  );
}

function Banner5() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative rounded-[4px] shrink-0" data-name="banner">
      <Desc5 />
    </div>
  );
}

function Container37() {
  return (
    <div className="bg-gradient-to-l content-stretch flex from-[#fafafa] h-[36px] items-center pl-[8px] pr-[12px] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.04)] shrink-0 to-white" data-name="Container">
      <Banner5 />
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

function Container39() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[24px]" data-name="Container">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <Image4 />
      </div>
      <div aria-hidden="true" className="absolute border-[#eee] border-[0.6px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Desc6() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[4px] relative shrink-0" data-name="desc">
      <p className="font-normal leading-[18px] relative shrink-0 text-[#555] text-[12px] whitespace-nowrap">기아 채용관</p>
    </div>
  );
}

function Banner6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative rounded-[4px] shrink-0" data-name="banner">
      <Container39 />
      <Desc6 />
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[#fafafa] h-[36px] items-center pl-[8px] pr-[12px] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.04)] shrink-0 to-[#949494]" data-name="Container">
      <Banner6 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[8px] relative shrink-0" data-name="list">
      <Container33 />
      <Container35 />
      <Container37 />
      <Container38 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <Frame3 />
      <Frame1 />
      <List />
    </div>
  );
}

export default function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
      <SectionAds />
      <Frame2 />
    </div>
  );
}