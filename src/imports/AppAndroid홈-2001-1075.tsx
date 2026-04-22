import svgPaths from "./svg-ec64amjz0y";
import imgLogo from "figma:asset/da1440a352fbdec8f2273c53c5a1fd4cab6b324b.png";
import imgImg from "figma:asset/7e150d85ebe6922302c56bb108c23fb425b9360b.png";
import imgLogo1 from "figma:asset/d942e5f5b68c356ae83f752729fc7388f207ae4d.png";
import imgLogo3 from "figma:asset/91c6d36c2fe169092bd3791f8e587cadc3eb3784.png";
import imgImg1 from "figma:asset/d000322d766755df09557b3d34bf3c64bb46fdd3.png";
import imgImg2 from "figma:asset/63c161d982d470dd6212687307cd3d05ff04fcbf.png";
import imgLogo4 from "figma:asset/258f247074aa7031631d09e4cd5a087265f09c35.png";
import { imgLogo2 } from "./svg-3469w";

function Info() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[143px]" data-name="info">
      <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#333] text-[16px] tracking-[0.24px] w-full">신한은행</p>
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#777] text-[14px] tracking-[0.14px] w-full">2024년 기술직 공개 채용</p>
    </div>
  );
}

function Right() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="right">
      <div className="col-1 h-[54px] ml-0 mt-0 relative rounded-[8px] row-1 w-[72px]" data-name="logo">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[8px] size-full" src={imgLogo} />
      </div>
    </div>
  );
}

function Contents1() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[16px] top-[52px] w-[328px]" data-name="contents">
      <Info />
      <Right />
    </div>
  );
}

function Watermark() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center justify-center left-[312px] px-[8px] rounded-[4px] top-[12px]" data-name="watermark">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#ddd] text-[12px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        AD
      </p>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute contents left-0 top-[12px]" data-name="header">
      <p className="absolute font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[20px] left-[16px] text-[#777] text-[13px] top-[12px] tracking-[0.13px] whitespace-nowrap">👀 이 공고 어때요?</p>
      <Watermark />
      <div className="absolute h-0 left-0 top-[44px] w-[360px]" data-name="divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1">
            <line id="divider" stroke="var(--stroke-0, #F5F5F5)" x2="360" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AdSub() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[10px] items-start ml-0 mt-[240px] relative row-1" data-name="ad_sub">
      <div className="h-[114px] relative shrink-0 w-[360px]" data-name="container">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 114">
          <path d="M0 0H360V114H0V0Z" fill="var(--fill-0, white)" id="container" />
        </svg>
      </div>
      <Contents1 />
      <Header />
    </div>
  );
}

function Navigator() {
  return (
    <div className="absolute h-[4px] left-[166px] top-[224px] w-[28px]" data-name="navigator">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 4">
        <g id="navigator">
          <circle cx="2" cy="2" fill="var(--fill-0, #DDDDDD)" id="indicator" r="2" />
          <circle cx="10" cy="2" fill="var(--fill-0, #DDDDDD)" id="indicator_2" r="2" />
          <circle cx="18" cy="2" fill="var(--fill-0, #DDDDDD)" id="indicator_3" r="2" />
          <circle cx="26" cy="2" fill="var(--fill-0, #777777)" id="indicator_active" r="2" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute contents left-[20px] text-white top-[80px] whitespace-nowrap" data-name="text">
      <p className="absolute font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[19px] left-[20px] text-[14px] top-[80px] tracking-[0.21px]">앵커리어</p>
      <div className="absolute font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[0] left-[20px] text-[20px] top-[103px] tracking-[0.3px]">
        <p className="leading-[27px] mb-0">자소설닷컴</p>
        <p className="leading-[27px]">디자인 직무 채용</p>
      </div>
      <div className="absolute font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[0] left-[20px] text-[13px] top-[169px] tracking-[0.13px]">
        <p className="leading-[20px] mb-0">2023.02.28 ~ 2023.03.27</p>
        <p className="leading-[20px]">#자소설닷컴 #프로덕트디자인</p>
      </div>
    </div>
  );
}

function Img() {
  return (
    <div className="absolute contents left-0 top-0" data-name="img">
      <div className="absolute bg-[#1b2239] h-[240px] left-0 top-0 w-[360px]" data-name="background" />
      <div className="absolute h-[136px] left-[210px] opacity-92 top-[104px] w-[150px]" data-name="img">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[124.26%] left-[-0.06%] max-w-none top-0 w-[118.11%]" src={imgImg} />
        </div>
      </div>
      <Navigator />
      <Text />
    </div>
  );
}

function AreaBanner() {
  return (
    <div className="col-1 h-[240px] ml-0 mt-0 overflow-clip relative row-1 w-[360px]" data-name="area_banner">
      <Img />
    </div>
  );
}

function Right1() {
  return (
    <div className="absolute content-stretch flex items-center justify-end left-[232px] top-[8px]" data-name="right">
      <div className="overflow-clip relative rounded-[4px] shrink-0 size-[40px]" data-name="button">
        <div className="absolute inset-[20%]" data-name="function/ic_search">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="Vector" />
          </svg>
          <div className="absolute inset-[8.33%_7.03%_7.03%_8.33%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.314 20.314">
              <path d={svgPaths.p1ea01b00} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="overflow-clip relative rounded-[4px] shrink-0 size-[40px]" data-name="button">
        <div className="absolute inset-[20%] overflow-clip" data-name="function/ic_setting">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="Vector" />
          </svg>
          <div className="absolute inset-[8.33%_9.85%_8.33%_9.83%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.276 20.0036">
              <path d={svgPaths.p197e9f00} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="overflow-clip relative rounded-[4px] shrink-0 size-[40px]" data-name="button">
        <div className="absolute inset-[20%] overflow-clip" data-name="function/ic_notification">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="Vector" />
          </svg>
          <div className="absolute inset-[8.33%_8.33%_2.08%_8.33%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 21.5">
              <path d={svgPaths.pda85980} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Logotype() {
  return (
    <div className="absolute bottom-1/4 left-[27.41%] right-[0.36%] top-1/4" data-name="logotype">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 81.6146 16.5">
        <g id="logotype">
          <path d={svgPaths.p3dc146f2} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p54ff180} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p3fc90700} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p12e6d600} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p2862ac80} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p272b6500} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p167a6500} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.pa795680} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p1a989ff0} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p1863db00} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.pa1c9700} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p16abee80} fill="var(--fill-0, white)" id="Vector_12" />
        </g>
      </svg>
    </div>
  );
}

function Symbol() {
  return (
    <div className="absolute inset-[14.3%_79.08%_14.27%_0.06%]" data-name="symbol">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.5714 23.5715">
        <g id="symbol">
          <path clipRule="evenodd" d={svgPaths.pc64280} fill="var(--fill-0, white)" fillRule="evenodd" id="medium" />
          <path clipRule="evenodd" d={svgPaths.p38a5fdf0} fill="var(--fill-0, white)" fillRule="evenodd" id="bright" />
          <path clipRule="evenodd" d={svgPaths.p1dc78d00} fill="var(--fill-0, white)" fillRule="evenodd" id="dark" />
        </g>
      </svg>
    </div>
  );
}

function LogoLandscapeWhite() {
  return (
    <div className="absolute h-[33px] left-[16px] opacity-0 overflow-clip top-[12px] w-[113px]" data-name="logo_landscape_white">
      <Logotype />
      <Symbol />
    </div>
  );
}

function Topbar() {
  return (
    <div className="col-1 h-[56px] ml-0 mt-[24px] relative row-1 w-[360px]" data-name="topbar">
      <Right1 />
      <LogoLandscapeWhite />
    </div>
  );
}

function StatusBarAndroid() {
  return (
    <div className="col-1 h-[24px] ml-0 mt-0 relative row-1 w-[360px]" data-name="status_bar_android">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 24">
        <g id="status_bar_android">
          <g id="container" />
          <ellipse cx="326.891" cy="12.0585" fill="var(--fill-0, #EEEEEE)" id="si2" rx="4.86791" ry="4.94118" />
          <rect fill="var(--fill-0, #DDDDDD)" height="8.47059" id="si1" width="8.34499" x="339.656" y="7.82237" />
          <path d={svgPaths.p2780cd40} fill="var(--fill-0, #F5F5F5)" id="si3" />
        </g>
      </svg>
    </div>
  );
}

function BeforeScroll() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="before : scroll">
      <div className="col-1 h-[80px] ml-0 mt-0 relative row-1 w-[360px]" data-name="gradation">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 80">
          <path d="M0 0H360V80H0V0Z" fill="url(#paint0_linear_2001_859)" id="gradation" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2001_859" x1="180" x2="180" y1="0" y2="80">
              <stop stopOpacity="0.48" />
              <stop offset="0.510417" stopOpacity="0.16" />
              <stop offset="1" stopOpacity="0" />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Topbar />
      <StatusBarAndroid />
    </div>
  );
}

function Top() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="top">
      <AreaBanner />
      <BeforeScroll />
    </div>
  );
}

function Navigator1() {
  return (
    <div className="bg-[rgba(255,255,255,0.72)] col-1 content-stretch flex gap-[4px] items-center justify-center ml-[276px] mt-[192px] pl-[12px] pr-[6px] py-[6px] relative rounded-[16px] row-1 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)]" data-name="navigator">
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#333] text-[12px] text-center tracking-[0.12px] whitespace-nowrap">15/18</p>
      <div className="overflow-clip relative rounded-[4px] shrink-0 size-[20px]" data-name="button">
        <div className="absolute inset-[16.67%] overflow-clip" data-name="system/ic_arrow_right_linear">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="Vector" />
          </svg>
          <div className="absolute inset-[23.48%_33.33%_23.48%_34.26%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.32111 7.07111">
              <path d={svgPaths.pa09b300} fill="var(--fill-0, #999999)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function AdMain() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="ad_main">
      <Top />
      <Navigator1 />
    </div>
  );
}

function SectionAds() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="section_ads1">
      <AdSub />
      <AdMain />
    </div>
  );
}

function Img1() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[40px]" data-name="img">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[30px] left-1/2 top-1/2 w-[40px]" data-name="logo">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[133.33%] left-0 max-w-none top-[-16.67%] w-full" src={imgLogo1} />
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="bg-white col-1 content-stretch flex gap-[12px] items-center ml-0 mt-0 pl-[24px] pr-[12px] py-[4px] relative rounded-[4px] row-1 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.04)] w-[344px]" data-name="list">
      <div className="flex flex-[1_0_0] flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal h-[22px] justify-center leading-[0] min-w-px relative text-[#555] text-[16px] tracking-[0.16px]">
        <p className="leading-[24px]">기아 채용관</p>
      </div>
      <Img1 />
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

function SectionAds1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="section_ads2">
      <List />
      <div className="bg-[#333] col-1 h-[48px] ml-0 mt-0 rounded-bl-[4px] rounded-tl-[4px] row-1 w-[6px]" data-name="indicator" />
    </div>
  );
}

function Watermark1() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center px-[8px] relative rounded-[4px] shrink-0" data-name="watermark">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#ddd] text-[12px] text-right tracking-[0.12px] whitespace-nowrap">AD</p>
    </div>
  );
}

function Title() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-0 px-[16px] top-[24px] w-[360px]" data-name="title">
      <div className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#777] text-[0px] tracking-[0.27px] whitespace-nowrap">
        <p className="mb-0 text-[18px]">
          <span className="leading-[25px] text-[#333]">{`다재다능 스프링복 `}</span>
          <span className="leading-[25px]">님의</span>
        </p>
        <p className="leading-[25px] text-[18px]">이용 패턴에 맞게 찾아봤어요 🕵🏻‍♂️</p>
      </div>
      <Watermark1 />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col h-[19px] items-center justify-center px-[8px] relative shrink-0 w-[65px]" data-name="text">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555] text-[14px] text-center tracking-[0.14px] w-full whitespace-nowrap">
        <p className="leading-[21px]">실시간 인기 급상승 🏆</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col h-[19px] items-center justify-center px-[8px] relative shrink-0 w-[65px]" data-name="text">
      <div className="flex flex-[1_0_0] flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px relative text-[#777] text-[14px] text-center tracking-[0.14px] w-full">
        <p>
          <span className="leading-[21px] text-[#777]">$전공명$</span>
          <span className="leading-[21px]">{` 전공자가 많이 쓴`}</span>
        </p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col h-[19px] items-center justify-center px-[8px] relative shrink-0 w-[65px]" data-name="text">
      <div className="flex flex-[1_0_0] flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px relative text-[#777] text-[14px] text-center tracking-[0.14px] w-full">
        <p>
          <span className="leading-[21px] text-[#777]">$관심직무$</span>
          <span className="leading-[21px]">{` 직무를 채용하는`}</span>
        </p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col h-[19px] items-center justify-center px-[8px] relative shrink-0 w-[65px]" data-name="text">
      <div className="flex flex-[1_0_0] flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px relative text-[#777] text-[14px] text-center tracking-[0.14px] w-full">
        <p className="leading-[21px]">우리 과 선배가 많이 지원한 기업</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-col h-[19px] items-center justify-center px-[8px] relative shrink-0 w-[65px]" data-name="text">
      <div className="flex flex-[1_0_0] flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px relative text-[#777] text-[14px] text-center tracking-[0.14px] w-full">
        <p>
          <span className="leading-[21px] text-[#303263]">$전공대분류$</span>
          <span className="leading-[21px]">이라면</span>
        </p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-col h-[19px] items-center justify-center px-[8px] relative shrink-0 w-[65px]" data-name="text">
      <div className="flex flex-[1_0_0] flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px relative text-[#777] text-[14px] text-center tracking-[0.14px] w-full">
        <p className="leading-[21px]">신입 인기 공고</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-col h-[19px] items-center justify-center px-[8px] relative shrink-0 w-[65px]" data-name="text">
      <div className="flex flex-[1_0_0] flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px relative text-[#777] text-[14px] text-center tracking-[0.14px] w-full">
        <p className="leading-[21px]">즐겨찾기가 많이 된</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-col h-[19px] items-center justify-center px-[8px] relative shrink-0 w-[65px]" data-name="text">
      <div className="flex flex-[1_0_0] flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px relative text-[#777] text-[14px] text-center tracking-[0.14px] w-full">
        <p className="leading-[21px]">3일 내 자소서가 많이 쓰인</p>
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start left-[16px] top-[90px]" data-name="tabs">
      <div className="bg-[#fff6f0] content-stretch flex flex-col h-[34px] items-start py-[7.5px] relative rounded-[4px] shrink-0" data-name="tab">
        <div aria-hidden="true" className="absolute border border-[#fed2ba] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Text1 />
      </div>
      <div className="bg-white content-stretch flex flex-col h-[34px] items-start pb-[5px] pt-[7px] relative rounded-[4px] shrink-0" data-name="tab">
        <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Text2 />
      </div>
      <div className="bg-white content-stretch flex flex-col h-[34px] items-start pb-[5px] pt-[7px] relative rounded-[4px] shrink-0" data-name="tab">
        <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Text3 />
      </div>
      <div className="bg-white content-stretch flex flex-col h-[34px] items-start pb-[5px] pt-[7px] relative rounded-[4px] shrink-0" data-name="tab">
        <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Text4 />
      </div>
      <div className="bg-white content-stretch flex flex-col h-[34px] items-start pb-[5px] pt-[7px] relative rounded-[4px] shrink-0" data-name="tab">
        <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Text5 />
      </div>
      <div className="bg-white content-stretch flex flex-col h-[34px] items-start pb-[5px] pt-[7px] relative rounded-[4px] shrink-0" data-name="tab">
        <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Text6 />
      </div>
      <div className="bg-white content-stretch flex flex-col h-[34px] items-start pb-[5px] pt-[7px] relative rounded-[4px] shrink-0" data-name="tab">
        <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Text7 />
      </div>
      <div className="bg-white content-stretch flex flex-col h-[34px] items-start pb-[5px] pt-[7px] relative rounded-[4px] shrink-0" data-name="tab">
        <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Text8 />
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[16px] mt-[34px] place-items-start relative row-1" data-name="logo">
      <div className="col-1 h-[19.5px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-8.25px] mask-size-[48px_36px] ml-0 mt-[8.25px] relative row-1 w-[48px]" style={{ maskImage: `url('${imgLogo2}')` }} data-name="logo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo3} />
      </div>
    </div>
  );
}

function Contents2() {
  return (
    <div className="absolute bg-[#e8ebfe] content-stretch flex flex-col h-[20px] items-start justify-center left-0 px-[8px] rounded-[4px] top-0" data-name="contents">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7084fa] text-[13px] text-center tracking-[0.13px] whitespace-nowrap">
        <p className="leading-[20px]">대기업</p>
      </div>
    </div>
  );
}

function Contents3() {
  return (
    <div className="absolute bg-[#e8ebfe] content-stretch flex flex-col h-[20px] items-start justify-center left-0 px-[8px] rounded-[4px] top-0" data-name="contents">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7084fa] text-[13px] text-center tracking-[0.13px] whitespace-nowrap">
        <p className="leading-[20px]">글로벌 기업</p>
      </div>
    </div>
  );
}

function Keyword() {
  return (
    <div className="col-1 content-stretch flex gap-[4px] items-start ml-0 mt-[64px] relative row-1" data-name="Keyword">
      <div className="h-[20px] relative shrink-0 w-[50px]" data-name="tag">
        <Contents2 />
      </div>
      <div className="h-[20px] relative shrink-0 w-[84px]" data-name="tag">
        <Contents3 />
      </div>
    </div>
  );
}

function Info1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[84px] mt-[8px] place-items-start relative row-1" data-name="info">
      <Keyword />
      <div className="col-1 flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold h-[22px] justify-center ml-0 mt-0 relative row-1 text-[#555] text-[16px] tracking-[0.24px] w-[212px]">
        <p className="leading-[22px]">삼성전자</p>
      </div>
      <div className="col-1 flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal h-[18px] justify-center ml-0 mt-[24px] relative row-1 text-[#999] text-[12px] tracking-[0.12px] w-[228px]">
        <p className="leading-[18px]">2024년 공개채용</p>
      </div>
      <div className="col-1 flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal h-[18px] justify-center ml-0 mt-[42px] relative row-1 text-[#999] text-[12px] tracking-[0.12px] w-[228px]">
        <p className="leading-[18px]">~ 2024년 8월 29일 17시 00분</p>
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="list">
      <div className="bg-white col-1 h-[104px] ml-0 mt-0 row-1 w-[328px]" data-name="container" />
      <Logo />
      <Info1 />
    </div>
  );
}

function Logo1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[16px] mt-[34px] place-items-start relative row-1" data-name="logo">
      <div className="col-1 h-[27px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-5px] mask-size-[48px_36px] ml-[2px] mt-[5px] relative row-1 w-[44px]" style={{ maskImage: `url('${imgLogo2}')` }} data-name="img">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImg1} />
      </div>
    </div>
  );
}

function Contents4() {
  return (
    <div className="absolute bg-[#e8ebfe] content-stretch flex flex-col h-[20px] items-start justify-center left-0 px-[8px] rounded-[4px] top-0" data-name="contents">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7084fa] text-[13px] text-center tracking-[0.13px] whitespace-nowrap">
        <p className="leading-[20px]">모빌리티 SW</p>
      </div>
    </div>
  );
}

function Contents5() {
  return (
    <div className="absolute bg-[#e8ebfe] content-stretch flex flex-col h-[20px] items-start justify-center left-0 px-[8px] rounded-[4px] top-0" data-name="contents">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7084fa] text-[13px] text-center tracking-[0.13px] whitespace-nowrap">
        <p className="leading-[20px]">업계 평균 연봉 TOP</p>
      </div>
    </div>
  );
}

function Keyword1() {
  return (
    <div className="col-1 content-stretch flex gap-[4px] items-start ml-0 mt-[64px] relative row-1 w-[173px]" data-name="Keyword">
      <div className="h-[20px] relative shrink-0 w-[85px]" data-name="tag">
        <Contents4 />
      </div>
      <div className="flex-[1_0_0] h-[20px] min-w-px relative" data-name="tag">
        <Contents5 />
      </div>
    </div>
  );
}

function Info2() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[84px] mt-[10px] place-items-start relative row-1" data-name="info">
      <Keyword1 />
      <div className="col-1 flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold h-[22px] justify-center ml-0 mt-0 relative row-1 text-[#555] text-[16px] tracking-[0.24px] w-[212px]">
        <p className="leading-[22px]">현대자동차</p>
      </div>
      <div className="col-1 flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal h-[18px] justify-center ml-0 mt-[24px] relative row-1 text-[#999] text-[12px] tracking-[0.12px] w-[228px]">
        <p className="leading-[18px]">2024년 대졸 신입 채용</p>
      </div>
      <div className="col-1 flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal h-[18px] justify-center ml-0 mt-[42px] relative row-1 text-[#999] text-[12px] tracking-[0.12px] w-[228px]">
        <p className="leading-[18px]">~ 2024년 8월 28일 12시 00분</p>
      </div>
    </div>
  );
}

function List3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="list">
      <div className="bg-white col-1 h-[104px] ml-0 mt-0 row-1 w-[328px]" data-name="container" />
      <Logo1 />
      <Info2 />
    </div>
  );
}

function Logo2() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[16px] mt-[34px] place-items-start relative row-1" data-name="logo">
      <div className="col-1 h-[22.5px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.5px_-6.75px] mask-size-[48px_36px] ml-[1.5px] mt-[6.75px] relative row-1 w-[45px]" style={{ maskImage: `url('${imgLogo2}')` }} data-name="img">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg2} />
      </div>
    </div>
  );
}

function Contents6() {
  return (
    <div className="absolute bg-[#e8ebfe] content-stretch flex flex-col h-[20px] items-start justify-center left-0 px-[8px] rounded-[4px] top-0" data-name="contents">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7084fa] text-[13px] text-center tracking-[0.13px] whitespace-nowrap">
        <p className="leading-[20px]">매출 업계 TOP</p>
      </div>
    </div>
  );
}

function Contents7() {
  return (
    <div className="absolute bg-[#e8ebfe] content-stretch flex flex-col h-[20px] items-start justify-center left-0 px-[8px] rounded-[4px] top-0" data-name="contents">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7084fa] text-[13px] text-center tracking-[0.13px] whitespace-nowrap">
        <p className="leading-[20px]">1944년 설립</p>
      </div>
    </div>
  );
}

function Keyword2() {
  return (
    <div className="col-1 content-stretch flex gap-[4px] items-start ml-0 mt-[64px] relative row-1" data-name="Keyword">
      <div className="h-[20px] relative shrink-0 w-[94px]" data-name="tag">
        <Contents6 />
      </div>
      <div className="h-[20px] relative shrink-0 w-[84px]" data-name="tag">
        <Contents7 />
      </div>
    </div>
  );
}

function Info3() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[84px] mt-[8px] place-items-start relative row-1" data-name="info">
      <Keyword2 />
      <div className="col-1 flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold h-[22px] justify-center ml-0 mt-0 relative row-1 text-[#555] text-[16px] tracking-[0.24px] w-[212px]">
        <p className="leading-[22px]">SK하이닉스</p>
      </div>
      <div className="col-1 flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal h-[18px] justify-center ml-0 mt-[24px] relative row-1 text-[#999] text-[12px] tracking-[0.12px] w-[228px]">
        <p className="leading-[18px]">2024년 하반기 공개채용</p>
      </div>
      <div className="col-1 flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal h-[18px] justify-center ml-0 mt-[42px] relative row-1 text-[#999] text-[12px] tracking-[0.12px] w-[228px]">
        <p className="leading-[18px]">~ 2024년 9월 1일 12시 00분</p>
      </div>
    </div>
  );
}

function List4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="list">
      <div className="bg-white col-1 h-[104px] ml-0 mt-0 row-1 w-[328px]" data-name="container" />
      <Logo2 />
      <Info3 />
    </div>
  );
}

function Logo3() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[16px] mt-[34px] place-items-start relative row-1" data-name="logo">
      <div className="col-1 h-[8.156px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-14.25px] mask-size-[48px_36px] ml-[3px] mt-[14.25px] relative row-1 w-[42.468px]" style={{ maskImage: `url('${imgLogo2}')` }} data-name="logo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo4} />
      </div>
    </div>
  );
}

function Info4() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[84px] mt-[22px] place-items-start relative row-1" data-name="info">
      <div className="col-1 flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold h-[22px] justify-center ml-0 mt-0 relative row-1 text-[#555] text-[16px] tracking-[0.24px] w-[212px]">
        <p className="leading-[22px]">네이버</p>
      </div>
      <div className="col-1 flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal h-[18px] justify-center ml-0 mt-[24px] relative row-1 text-[#999] text-[12px] tracking-[0.12px] w-[228px]">
        <p className="leading-[18px]">채용 전환 디자인 인턴십</p>
      </div>
      <div className="col-1 flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal h-[18px] justify-center ml-0 mt-[42px] relative row-1 text-[#999] text-[12px] tracking-[0.12px] w-[228px]">
        <p className="leading-[18px]">~ 2024년 8월 20일 23시 59분</p>
      </div>
    </div>
  );
}

function List5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="list">
      <div className="bg-white col-1 h-[104px] ml-0 mt-0 row-1 w-[328px]" data-name="container" />
      <Logo3 />
      <Info4 />
    </div>
  );
}

function List1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[17px] overflow-clip top-[136px] w-[328px]" data-name="list">
      <List2 />
      <div className="h-0 relative shrink-0 w-[328px]" data-name="border">
        <div className="absolute bottom-full left-0 right-0 top-0" data-name="border">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328 1">
              <line id="border" stroke="var(--stroke-0, #F5F5F5)" x2="328" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <List3 />
      <div className="h-0 relative shrink-0 w-[328px]" data-name="border">
        <div className="absolute bottom-full left-0 right-0 top-0" data-name="border">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328 1">
              <line id="border" stroke="var(--stroke-0, #F5F5F5)" x2="328" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <List4 />
      <div className="h-0 relative shrink-0 w-[328px]" data-name="border">
        <div className="absolute bottom-full left-0 right-0 top-0" data-name="border">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328 1">
              <line id="border" stroke="var(--stroke-0, #F5F5F5)" x2="328" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <List5 />
    </div>
  );
}

function SectionRecommand() {
  return (
    <div className="bg-white h-[632px] relative shrink-0 w-[360px]" data-name="section_recommand">
      <Title />
      <div className="absolute content-stretch flex h-[40px] items-center justify-center left-[16px] px-[12px] py-[9px] rounded-[4px] top-[560px] w-[328px]" data-name="button">
        <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#777] text-[14px] text-center tracking-[0.21px] whitespace-nowrap">
          <p className="leading-[19px]">더 보고 싶어요</p>
        </div>
      </div>
      <Tabs />
      <List1 />
    </div>
  );
}

function Company() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start leading-[0] relative shrink-0 w-[136px]" data-name="company">
      <div className="flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#333] text-[16px] tracking-[0.24px] w-full">
        <p className="leading-[22px]">삼성전자</p>
      </div>
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#999] text-[13px] tracking-[0.13px] w-full">
        <p className="leading-[20px] mb-0">2024년 하반기</p>
        <p className="leading-[20px]">신입사원 채용</p>
      </div>
    </div>
  );
}

function Contents8() {
  return (
    <div className="absolute bg-[#f0f7de] content-stretch flex flex-col h-[20px] items-start justify-center left-0 px-[8px] rounded-[4px] top-0" data-name="contents">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#84bd00] text-[13px] text-center tracking-[0.13px] whitespace-nowrap">
        <p className="leading-[20px]">2,359명 작성</p>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] h-[124px] items-start px-[12px] py-[16px] relative rounded-[4px] shrink-0 w-[160px]" data-name="card">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Company />
      <div className="h-[20px] relative shrink-0 w-[78px]" data-name="tag">
        <Contents8 />
      </div>
    </div>
  );
}

function Company1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start leading-[0] relative shrink-0 w-[136px]" data-name="company">
      <div className="flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#333] text-[16px] tracking-[0.24px] w-full">
        <p className="leading-[22px]">현대오토에버</p>
      </div>
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#999] text-[13px] tracking-[0.13px] w-full">
        <p className="leading-[20px] mb-0">2024년</p>
        <p className="leading-[20px]">신입/경력 공개채용</p>
      </div>
    </div>
  );
}

function Contents9() {
  return (
    <div className="absolute bg-[#f0f7de] content-stretch flex flex-col h-[20px] items-start justify-center left-0 px-[8px] rounded-[4px] top-0" data-name="contents">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#84bd00] text-[13px] text-center tracking-[0.13px] whitespace-nowrap">
        <p className="leading-[20px]">2,154명 작성</p>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] h-[124px] items-start px-[12px] py-[16px] relative rounded-[4px] shrink-0 w-[160px]" data-name="card">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Company1 />
      <div className="h-[20px] relative shrink-0 w-[78px]" data-name="tag">
        <Contents9 />
      </div>
    </div>
  );
}

function Company2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start leading-[0] relative shrink-0 w-[136px]" data-name="company">
      <div className="flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#333] text-[16px] tracking-[0.24px] w-full">
        <p className="leading-[22px]">SK하이닉스</p>
      </div>
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#999] text-[13px] tracking-[0.13px] w-full">
        <p className="leading-[20px] mb-0">2024년 공개 채용</p>
        <p className="leading-[20px]">​</p>
      </div>
    </div>
  );
}

function Contents10() {
  return (
    <div className="absolute bg-[#f0f7de] content-stretch flex flex-col h-[20px] items-start justify-center left-0 px-[8px] rounded-[4px] top-0" data-name="contents">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#84bd00] text-[13px] text-center tracking-[0.13px] whitespace-nowrap">
        <p className="leading-[20px]">1,897명 작성</p>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] h-[124px] items-start px-[12px] py-[16px] relative rounded-[4px] shrink-0 w-[160px]" data-name="card">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Company2 />
      <div className="h-[20px] relative shrink-0 w-[78px]" data-name="tag">
        <Contents10 />
      </div>
    </div>
  );
}

function Company3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] items-start leading-[0] left-[12px] top-[16px] w-[136px]" data-name="company">
      <div className="flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#333] text-[16px] tracking-[0.24px] w-full">
        <p className="leading-[22px]">현대자동차</p>
      </div>
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#999] text-[13px] tracking-[0.13px] w-full">
        <p className="leading-[20px] mb-0">2024년 하반기</p>
        <p className="leading-[20px]">신입사원 채용</p>
      </div>
    </div>
  );
}

function Contents11() {
  return (
    <div className="absolute bg-[#f0f7de] content-stretch flex flex-col h-[20px] items-start justify-center left-0 px-[8px] rounded-[4px] top-0" data-name="contents">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#84bd00] text-[13px] text-center tracking-[0.13px] whitespace-nowrap">
        <p className="leading-[20px]">3,276명 작성</p>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-white h-[124px] relative rounded-[4px] shrink-0 w-[160px]" data-name="card">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Company3 />
      <div className="absolute h-[20px] left-[12px] top-[88px] w-[78px]" data-name="tag">
        <Contents11 />
      </div>
      <p className="-translate-x-1/2 absolute font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[18px] left-[139.5px] text-[#ddd] text-[12px] text-center top-[98px] tracking-[0.12px] whitespace-nowrap">AD</p>
    </div>
  );
}

function Cards() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-[328px]" data-name="cards">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}

function SectionPopular() {
  return (
    <div className="bg-white content-start flex flex-wrap gap-[16px_8px] items-start pb-[28px] pt-[24px] px-[16px] relative shrink-0 w-[360px]" data-name="section_popular">
      <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[25px] relative shrink-0 text-[#333] text-[18px] tracking-[0.27px] whitespace-nowrap">인기 급상승 🚀 최신 공고</p>
      <Cards />
      <div className="content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[12px] py-[10px] relative rounded-[4px] shrink-0 w-[328px]" data-name="button">
        <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="system/ic_refresh">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="Vector" />
          </svg>
          <div className="absolute inset-[8.33%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
              <path d={svgPaths.p206e1800} fill="var(--fill-0, #999999)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#777] text-[14px] tracking-[0.21px] whitespace-nowrap">
          <p className="leading-[19px]">더 보기</p>
        </div>
      </div>
    </div>
  );
}

function Contents12() {
  return (
    <div className="absolute bg-[#fff3f4] content-stretch flex gap-[4px] h-[20px] items-center left-0 px-[8px] rounded-[4px] top-0 w-[80px]" data-name="contents">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="symbolistic/ic_time_orange">
        <div className="absolute inset-[4.17%_12.5%_8.33%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14">
            <path d={svgPaths.p151be600} fill="var(--fill-0, #FF6E70)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ff6e70] text-[13px] text-center tracking-[0.13px] whitespace-nowrap">
        <p className="leading-[20px]">4일 남음</p>
      </div>
    </div>
  );
}

function Tag() {
  return (
    <div className="h-[20px] relative shrink-0 w-[80px]" data-name="tag">
      <Contents12 />
    </div>
  );
}

function Info5() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start leading-[0] relative shrink-0 w-[132px]" data-name="info">
      <div className="flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#333] text-[16px] tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[22px]">신한은행</p>
      </div>
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center min-w-full relative shrink-0 text-[#555] text-[13px] tracking-[0.13px] w-[min-content]">
        <p className="leading-[20px]">3,832명 작성</p>
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] h-[104px] items-start pb-[12px] pt-[16px] px-[12px] relative rounded-[4px] shrink-0 w-[160px]" data-name="card">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Tag />
      <Info5 />
    </div>
  );
}

function Contents13() {
  return (
    <div className="absolute bg-[#fff3f4] content-stretch flex gap-[4px] h-[20px] items-center left-0 px-[8px] rounded-[4px] top-0 w-[80px]" data-name="contents">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="symbolistic/ic_time_orange">
        <div className="absolute inset-[4.17%_12.5%_8.33%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14">
            <path d={svgPaths.p151be600} fill="var(--fill-0, #FF6E70)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ff6e70] text-[13px] text-center tracking-[0.13px] whitespace-nowrap">
        <p className="leading-[20px]">10일 남음</p>
      </div>
    </div>
  );
}

function Tag1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[80px]" data-name="tag">
      <Contents13 />
    </div>
  );
}

function Info6() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start leading-[0] relative shrink-0 w-[132px]" data-name="info">
      <div className="flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#333] text-[16px] tracking-[0.24px] w-full">
        <p className="leading-[22px]">코오롱글로벌</p>
      </div>
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#555] text-[13px] tracking-[0.13px] w-full">
        <p className="leading-[20px]">912명 작성</p>
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] h-[104px] items-start pb-[12px] pt-[16px] px-[12px] relative rounded-[4px] shrink-0 w-[160px]" data-name="card">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Tag1 />
      <Info6 />
    </div>
  );
}

function Contents14() {
  return (
    <div className="absolute bg-[#fff3f4] content-stretch flex gap-[4px] h-[20px] items-center left-0 px-[8px] rounded-[4px] top-0" data-name="contents">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="symbolistic/ic_time_orange">
        <div className="absolute inset-[4.17%_12.5%_8.33%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14">
            <path d={svgPaths.p151be600} fill="var(--fill-0, #FF6E70)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ff6e70] text-[13px] text-center tracking-[0.13px] whitespace-nowrap">
        <p className="leading-[20px]">10시간 남음</p>
      </div>
    </div>
  );
}

function Tag2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[80px]" data-name="tag">
      <Contents14 />
    </div>
  );
}

function Info7() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start leading-[0] relative shrink-0 w-[132px]" data-name="info">
      <div className="flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#333] text-[16px] tracking-[0.24px] w-full">
        <p className="leading-[22px]">한국전기공사</p>
      </div>
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#555] text-[13px] tracking-[0.13px] w-full">
        <p className="leading-[20px]">3,452명 작성</p>
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] h-[104px] items-start pb-[12px] pt-[16px] px-[12px] relative rounded-[4px] shrink-0 w-[160px]" data-name="card">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Tag2 />
      <Info7 />
    </div>
  );
}

function Contents15() {
  return (
    <div className="absolute bg-[#fff3f4] content-stretch flex gap-[4px] h-[20px] items-center left-0 px-[8px] rounded-[4px] top-0 w-[80px]" data-name="contents">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="symbolistic/ic_time_orange">
        <div className="absolute inset-[4.17%_12.5%_8.33%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14">
            <path d={svgPaths.p151be600} fill="var(--fill-0, #FF6E70)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ff6e70] text-[13px] text-center tracking-[0.13px] whitespace-nowrap">
        <p className="leading-[20px]">1일 남음</p>
      </div>
    </div>
  );
}

function Tag3() {
  return (
    <div className="absolute h-[20px] left-[12px] top-[16px] w-[80px]" data-name="tag">
      <Contents15 />
    </div>
  );
}

function Info8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] items-start leading-[0] left-[12px] top-[48px] w-[132px]" data-name="info">
      <div className="flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#333] text-[16px] tracking-[0.24px] w-full">
        <p className="leading-[22px]">GS칼텍스</p>
      </div>
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#555] text-[13px] tracking-[0.13px] w-full">
        <p className="leading-[20px]">2,352명 작성</p>
      </div>
    </div>
  );
}

function Card7() {
  return (
    <div className="bg-white h-[104px] relative rounded-[4px] shrink-0 w-[160px]" data-name="card">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Tag3 />
      <Info8 />
      <p className="-translate-x-1/2 absolute font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[18px] left-[139.5px] text-[#ddd] text-[12px] text-center top-[78px] tracking-[0.12px] whitespace-nowrap">AD</p>
    </div>
  );
}

function Cards1() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-[328px]" data-name="cards">
      <Card4 />
      <Card5 />
      <Card6 />
      <Card7 />
    </div>
  );
}

function SectionUrgent() {
  return (
    <div className="bg-white content-start flex flex-wrap gap-[16px_8px] items-start pb-[28px] pt-[24px] px-[16px] relative shrink-0 w-[360px]" data-name="section_urgent">
      <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[25px] relative shrink-0 text-[#333] text-[18px] tracking-[0.27px] whitespace-nowrap">인기 공고 막차 탑승 🚌</p>
      <Cards1 />
      <div className="content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[12px] py-[10px] relative rounded-[4px] shrink-0 w-[328px]" data-name="button">
        <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="system/ic_refresh">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="Vector" />
          </svg>
          <div className="absolute inset-[8.33%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
              <path d={svgPaths.p206e1800} fill="var(--fill-0, #999999)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#777] text-[14px] tracking-[0.21px] whitespace-nowrap">
          <p className="leading-[19px]">더 보기</p>
        </div>
      </div>
    </div>
  );
}

function Contents() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-center left-0 top-0" data-name="contents">
      <SectionAds />
      <SectionAds1 />
      <SectionRecommand />
      <SectionPopular />
      <SectionUrgent />
    </div>
  );
}

export default function AppAndroid() {
  return (
    <div className="bg-[#f5f5f5] relative size-full" data-name="App(android) / 홈">
      <Contents />
    </div>
  );
}