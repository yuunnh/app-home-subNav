import svgPaths from "./svg-z7skeotgsd";

function Text() {
  return (
    <div className="box-border content-stretch flex flex-col h-[19px] items-center justify-center px-[8px] py-0 relative shrink-0" data-name="text">
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555555] text-[14px] text-center text-nowrap tracking-[0.14px] w-full">
        <p className="leading-[21px] whitespace-pre">디자인</p>
      </div>
    </div>
  );
}

function Tab() {
  return (
    <div className="bg-[#fff6f0] box-border content-stretch flex flex-col gap-[10px] h-[34px] items-start px-0 py-[7.5px] relative rounded-[4px] shrink-0" data-name="tab">
      <div aria-hidden="true" className="absolute border border-[#fed2ba] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Text />
    </div>
  );
}

function Text1() {
  return (
    <div className="box-border content-stretch flex flex-col h-[19px] items-center justify-center px-[8px] py-0 relative shrink-0" data-name="text">
      <div className="basis-0 flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#777777] text-[14px] text-center tracking-[0.14px] w-full">
        <p className="leading-[21px]">경영·사무</p>
      </div>
    </div>
  );
}

function Tab1() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[10px] h-[34px] items-start pb-[5px] pt-[7px] px-0 relative rounded-[4px] shrink-0" data-name="tab">
      <div aria-hidden="true" className="absolute border border-[#eeeeee] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Text1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="box-border content-stretch flex flex-col h-[19px] items-center justify-center px-[8px] py-0 relative shrink-0" data-name="text">
      <div className="basis-0 flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#777777] text-[14px] text-center tracking-[0.14px] w-full">
        <p className="leading-[21px]">마케팅·광고·홍보</p>
      </div>
    </div>
  );
}

function Tab2() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[10px] h-[34px] items-start pb-[5px] pt-[7px] px-0 relative rounded-[4px] shrink-0" data-name="tab">
      <div aria-hidden="true" className="absolute border border-[#eeeeee] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Text2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="box-border content-stretch flex flex-col h-[19px] items-center justify-center px-[8px] py-0 relative shrink-0" data-name="text">
      <div className="basis-0 flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#777777] text-[14px] text-center tracking-[0.14px] w-full">
        <p className="leading-[21px]">무역·유통</p>
      </div>
    </div>
  );
}

function Tab3() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[10px] h-[34px] items-start pb-[5px] pt-[7px] px-0 relative rounded-[4px] shrink-0" data-name="tab">
      <div aria-hidden="true" className="absolute border border-[#eeeeee] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Text3 />
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="tabs">
      <Tab />
      <Tab1 />
      <Tab2 />
      {[...Array(2).keys()].map((_, i) => (
        <Tab3 key={i} />
      ))}
    </div>
  );
}

function Company() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 text-[16px] text-nowrap whitespace-pre" data-name="company">
      <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#555555] tracking-[0.24px]">SK브로드밴드</p>
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#333333] tracking-[0.16px]">서비스 기획</p>
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex font-['Pretendard_Variable:Regular',sans-serif] font-normal gap-[8px] items-center leading-[0] relative shrink-0 text-[#999999] text-[14px] text-nowrap tracking-[0.14px]" data-name="info">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[21px] text-nowrap whitespace-pre">4일 남음</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[21px] text-nowrap whitespace-pre">· 238명 작성</p>
      </div>
    </div>
  );
}

function Unit() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="unit">
      <Company />
      <Info />
    </div>
  );
}

function List() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-start px-[16px] py-0 relative shrink-0" data-name="list">
      <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#999999] text-[16px] text-nowrap tracking-[0.24px] whitespace-pre">1</p>
      <Unit />
    </div>
  );
}

function Rank() {
  return (
    <div className="absolute h-[22px] left-0 overflow-clip top-0 w-[40px]" data-name="rank">
      <p className="absolute font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[22px] left-[20px] text-[#999999] text-[16px] text-center top-0 tracking-[0.24px] translate-x-[-50%] w-[40px]">2</p>
    </div>
  );
}

function Company1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 text-[16px] text-nowrap whitespace-pre" data-name="company">
      <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#555555] tracking-[0.24px]">우아한형제들</p>
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#333333] tracking-[0.16px]">콘텐츠 디자이너</p>
    </div>
  );
}

function Info1() {
  return (
    <div className="content-stretch flex font-['Pretendard_Variable:Regular',sans-serif] font-normal gap-[8px] items-center leading-[0] relative shrink-0 text-[#999999] text-[14px] text-nowrap tracking-[0.14px]" data-name="info">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[21px] text-nowrap whitespace-pre">4일 남음</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[21px] text-nowrap whitespace-pre">· 192명 작성</p>
      </div>
    </div>
  );
}

function Unit1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[40px] top-0" data-name="unit">
      <Company1 />
      <Info1 />
    </div>
  );
}

function List1() {
  return (
    <div className="h-[49px] relative shrink-0 w-[253px]" data-name="list">
      <Rank />
      <Unit1 />
    </div>
  );
}

function Company2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 text-[16px] text-nowrap whitespace-pre" data-name="company">
      <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#555555] tracking-[0.24px]">LG CNS</p>
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#333333] tracking-[0.16px]">UX</p>
    </div>
  );
}

function Info2() {
  return (
    <div className="content-stretch flex font-['Pretendard_Variable:Regular',sans-serif] font-normal gap-[8px] items-center leading-[0] relative shrink-0 text-[#999999] text-[14px] text-nowrap tracking-[0.14px]" data-name="info">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[21px] text-nowrap whitespace-pre">3일 남음</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[21px] text-nowrap whitespace-pre">· 65명 작성</p>
      </div>
    </div>
  );
}

function Unit2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="unit">
      <Company2 />
      <Info2 />
    </div>
  );
}

function List2() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-start px-[16px] py-0 relative shrink-0" data-name="list">
      <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#999999] text-[16px] text-nowrap tracking-[0.24px] whitespace-pre">3</p>
      <Unit2 />
    </div>
  );
}

function Company3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 text-[16px] text-nowrap whitespace-pre" data-name="company">
      <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#555555] tracking-[0.24px]">LG CNS</p>
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#333333] tracking-[0.16px]">UX/UI</p>
    </div>
  );
}

function Info3() {
  return (
    <div className="content-stretch flex font-['Pretendard_Variable:Regular',sans-serif] font-normal gap-[8px] items-center leading-[0] relative shrink-0 text-[#999999] text-[14px] text-nowrap tracking-[0.14px]" data-name="info">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[21px] text-nowrap whitespace-pre">12일 남음</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[21px] text-nowrap whitespace-pre">· 39명 작성</p>
      </div>
    </div>
  );
}

function Unit3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="unit">
      <Company3 />
      <Info3 />
    </div>
  );
}

function List3() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-start px-[16px] py-0 relative shrink-0" data-name="list">
      <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#999999] text-[16px] text-nowrap tracking-[0.24px] whitespace-pre">4</p>
      <Unit3 />
    </div>
  );
}

function Company4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 text-[16px] text-nowrap whitespace-pre" data-name="company">
      <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#555555] tracking-[0.24px]">펄어비스</p>
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#333333] tracking-[0.16px]">서비스 디자인 (웹기획)</p>
    </div>
  );
}

function Info4() {
  return (
    <div className="content-stretch flex font-['Pretendard_Variable:Regular',sans-serif] font-normal gap-[8px] items-center leading-[0] relative shrink-0 text-[#999999] text-[14px] text-nowrap tracking-[0.14px]" data-name="info">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[21px] text-nowrap whitespace-pre">11일 남음</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[21px] text-nowrap whitespace-pre">· 28명 작성</p>
      </div>
    </div>
  );
}

function Unit4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="unit">
      <Company4 />
      <Info4 />
    </div>
  );
}

function List4() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-start px-[16px] py-0 relative shrink-0" data-name="list">
      <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#999999] text-[16px] text-nowrap tracking-[0.24px] whitespace-pre">5</p>
      <Unit4 />
    </div>
  );
}

function List5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="list">
      <List />
      <List1 />
      <List2 />
      <List3 />
      <List4 />
    </div>
  );
}

function SectionPopular() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[16px] items-start pb-[28px] pt-[24px] px-[16px] relative shrink-0 w-[360px]" data-name="section_popular">
      <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[25px] relative shrink-0 text-[#333333] text-[18px] text-nowrap tracking-[0.27px] whitespace-pre">직무별 인기 공고</p>
      <Tabs />
      <List5 />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[60px] items-start relative shrink-0 w-[328px]" data-name="header">
      <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[25px] relative shrink-0 text-[#333333] text-[18px] text-nowrap tracking-[0.27px] whitespace-pre">{`취준 미션을 수행해 보세요 🚩 `}</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center pl-[4px] pr-[8px] py-0 relative w-full">
          <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#999999] text-[13px] text-nowrap tracking-[0.13px] whitespace-pre">진행 중인 미션 ⚡️</p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[2px] items-start justify-center relative text-nowrap w-full whitespace-pre">
        <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[19px] relative shrink-0 text-[#333333] text-[14px] tracking-[0.21px]">{`면접, 이것만은 알고 가자!  `}</p>
        <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#777777] text-[12px] tracking-[0.12px]">필수 면접 질문 200제</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#ff6813] h-[32px] relative rounded-[4px] shrink-0 w-[72px]" data-name="button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[8px] py-[7px] relative w-[72px]">
        <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-center text-nowrap text-white tracking-[0.12px]">
          <p className="leading-[18px] whitespace-pre">PDF 받기</p>
        </div>
      </div>
    </div>
  );
}

function BannerListItem() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="BannerListItem">
      <div aria-hidden="true" className="absolute border border-[#eeeeee] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[17px] py-[11px] relative w-full">
          <Frame2 />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[2px] items-start justify-center relative text-nowrap w-full">
        <p className="[white-space-collapse:collapse] font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[19px] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#333333] text-[14px] tracking-[0.21px] w-[min-content]">{`복잡한 국비지원 자격 진단 `}</p>
        <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#777777] text-[12px] tracking-[0.12px] whitespace-pre">{`30초 확인하기 `}</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#ff6813] h-[32px] relative rounded-[4px] shrink-0 w-[72px]" data-name="button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[8px] py-[7px] relative w-[72px]">
        <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-center text-nowrap text-white tracking-[0.12px]">
          <p className="leading-[18px] whitespace-pre">{`30초 확인 `}</p>
        </div>
      </div>
    </div>
  );
}

function BannerListItem1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="BannerListItem">
      <div aria-hidden="true" className="absolute border border-[#eeeeee] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[17px] py-[11px] relative w-full">
          <Frame3 />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function List6() {
  return (
    <div className="relative shrink-0 w-full" data-name="list">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[6px] items-start relative w-full">
        <BannerListItem />
        <BannerListItem1 />
      </div>
    </div>
  );
}

function FunctionIcNotification() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="function/ic_notification">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1552)" id="function/ic_notification">
          <path d={svgPaths.p29648480} fill="var(--fill-0, #FF6813)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1552">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#fff6f0] h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="button">
      <div aria-hidden="true" className="absolute border border-[#fed2ba] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[8px] py-[7px] relative w-full">
          <FunctionIcNotification />
          <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ff6813] text-[12px] text-nowrap tracking-[0.12px]">
            <p className="leading-[18px] whitespace-pre">{`다음 미션 알림받기 `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[10px] items-end pb-[8px] pt-[4px] px-0 relative w-full">
        <Button2 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <Frame1 />
      <List6 />
      <Frame4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[2px] items-start px-[4px] py-0 relative w-full">
          <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#999999] text-[13px] text-nowrap tracking-[0.13px] whitespace-pre">{`자소설 신청 혜택 · AD `}</p>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute h-[23.344px] left-[calc(50%+0.45px)] top-[calc(50%-0.33px)] translate-x-[-50%] translate-y-[-50%] w-[23.238px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d={svgPaths.p22873800} fill="url(#paint0_linear_1_1545)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1545" x1="-1.47193" x2="24.7099" y1="11.6721" y2="11.6721">
              <stop offset="0.25" stopColor="#13CE9C" />
              <stop offset="1" stopColor="#13CE9C" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function GreenStarIcon() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[24px]" data-name="GreenStarIcon">
      <Icon />
    </div>
  );
}

function AreaImg() {
  return (
    <div className="bg-neutral-100 relative rounded-[4px] shrink-0 size-[32px]" data-name="area_img">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start p-[4px] relative size-[32px]">
        <GreenStarIcon />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[2px] items-start justify-center relative text-nowrap w-full">
        <p className="[white-space-collapse:collapse] font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[19px] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#333333] text-[14px] tracking-[0.21px] w-[min-content]">{`스파르타 상담 신청하고 `}</p>
        <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#777777] text-[12px] tracking-[0.12px] whitespace-pre">{`IT 취업 족보 받기 `}</p>
      </div>
    </div>
  );
}

function BannerListItem2() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="BannerListItem">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center p-[8px] relative w-full">
          <AreaImg />
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[20.023px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[4.61%] left-0 right-[50.35%] top-[0.82%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 19">
          <path d={svgPaths.p1e4c7600} fill="var(--fill-0, #FF6E70)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[5.44%] left-[50.36%] right-[-0.01%] top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 19">
          <path d={svgPaths.p1d2c4380} fill="var(--fill-0, #A248FF)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[20.023px] relative shrink-0 w-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[20.023px] items-start relative w-[20px]">
        <Icon1 />
      </div>
    </div>
  );
}

function ImgPurpleRedIcon() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="img_PurpleRedIcon">
      <Container1 />
    </div>
  );
}

function AreaImg1() {
  return (
    <div className="bg-neutral-100 relative rounded-[4px] shrink-0 size-[32px]" data-name="area_img">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start p-[4px] relative size-[32px]">
        <ImgPurpleRedIcon />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[2px] items-start justify-center relative text-nowrap w-full">
        <p className="[white-space-collapse:collapse] font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[19px] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#333333] text-[14px] tracking-[0.21px] w-[min-content]">{`멋쟁이사자들 상담 신청하고 `}</p>
        <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#777777] text-[12px] tracking-[0.12px] whitespace-pre">{`네이버페이 받기 `}</p>
      </div>
    </div>
  );
}

function BannerListItem3() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="BannerListItem">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center p-[8px] relative w-full">
          <AreaImg1 />
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_1535)" id="Icon">
          <path d={svgPaths.p3baac180} fill="var(--fill-0, #FFBB00)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1535">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ImgYellowSparkleIcon() {
  return (
    <div className="content-stretch flex items-center justify-center relative size-[24px]" data-name="img_YellowSparkleIcon">
      <Icon2 />
    </div>
  );
}

function AreaImg2() {
  return (
    <div className="bg-neutral-100 relative rounded-[4px] shrink-0 size-[32px]" data-name="area_img">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start p-[4px] relative size-[32px]">
        <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "24", "--transform-inner-height": "24" } as React.CSSProperties}>
          <div className="flex-none rotate-[90deg]">
            <ImgYellowSparkleIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[2px] items-start justify-center relative text-nowrap w-full">
        <p className="[white-space-collapse:collapse] font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[19px] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#333333] text-[14px] tracking-[0.21px] w-[min-content]">{`AII-IN-ONE! 합격패스 `}</p>
        <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#777777] text-[12px] tracking-[0.12px] whitespace-pre">{`전액 지원받기 `}</p>
      </div>
    </div>
  );
}

function BannerListItem4() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="BannerListItem">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center p-[8px] relative w-full">
          <AreaImg2 />
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function List7() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="list">
      <BannerListItem2 />
      <BannerListItem3 />
      <BannerListItem4 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Container">
      <Frame5 />
      <List7 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Container />
      <Container2 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] items-start relative w-full">
        <Frame11 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[8px] shrink-0 w-[328px]" data-name="Container">
      <Frame10 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Container3 />
    </div>
  );
}

function Edu() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[16px] items-start pb-[32px] pt-[24px] px-[16px] relative shrink-0 w-[360px]" data-name="edu">
      <Header />
      <Frame9 />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex gap-[60px] items-start relative shrink-0 w-[328px]" data-name="header">
      <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[25px] relative shrink-0 text-[#333333] text-[18px] text-nowrap tracking-[0.27px] whitespace-pre">직무 교육관 🧑‍💻</p>
    </div>
  );
}

function SystemIcArrowRightLinear() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="system/ic_arrow_right_linear">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1592)" id="system/ic_arrow_right_linear">
          <g id="Vector"></g>
          <path d={svgPaths.p3cf8a100} fill="var(--fill-0, #777777)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1592">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Sub() {
  return (
    <div className="absolute content-stretch flex gap-[2px] items-center left-[8px] top-[113px]" data-name="sub">
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#777777] text-[14px] text-nowrap tracking-[0.14px] whitespace-pre">채용 우대 교육</p>
      <SystemIcArrowRightLinear />
    </div>
  );
}

function Bg() {
  return (
    <div className="absolute bottom-[22.25%] left-0 right-[28.4%] top-[4.25%]" data-name="Bg">
      <div className="absolute inset-[-6.09%_-15.83%_-14.78%_-12.83%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 42">
          <g id="Bg">
            <path d={svgPaths.p32fe6200} data-figma-bg-blur-radius="3.77029" fill="url(#paint0_linear_1_1540)" id="Fill 1" />
            <g filter="url(#filter1_f_1_1540)" id="Message">
              <path d={svgPaths.p27922480} fill="var(--fill-0, #417BEF)" fillOpacity="0.5" />
            </g>
          </g>
          <defs>
            <clipPath id="bgblur_0_1_1540_clip_path" transform="translate(-2.27153 -0.0934335)">
              <path d={svgPaths.p32fe6200} />
            </clipPath>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="41.7721" id="filter1_f_1_1540" width="42.9134" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_1540" stdDeviation="3.61805" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1540" x1="21.5002" x2="7.01092" y1="17.8953" y2="34.9095">
              <stop stopColor="#8FB3FF" />
              <stop offset="1" stopColor="#1774FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute inset-[21.27%_-0.18%_2.88%_23.61%]" data-name="Icon">
      <div className="absolute inset-[-1.27%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 37">
          <g id="Icon">
            <g data-figma-bg-blur-radius="6.78385" id="Fill 1">
              <mask fill="black" height="38" id="path-1-outside-1_1_1569" maskUnits="userSpaceOnUse" width="38" x="-0.547743" y="-0.547743">
                <rect fill="white" height="38" width="38" x="-0.547743" y="-0.547743" />
                <path d={svgPaths.p2ee49200} />
              </mask>
              <path d={svgPaths.p2ee49200} fill="var(--fill-0, #95B7FF)" fillOpacity="0.4" />
              <path d={svgPaths.p222eb700} fill="url(#paint0_linear_1_1569)" mask="url(#path-1-outside-1_1_1569)" />
            </g>
            <g data-figma-bg-blur-radius="6.78385" filter="url(#filter1_d_1_1569)" id="Path">
              <path d={svgPaths.p1ef4cc80} fill="url(#paint1_linear_1_1569)" />
              <path d={svgPaths.p9ac4480} stroke="url(#paint2_linear_1_1569)" strokeOpacity="0.5" strokeWidth="0.0904513" />
            </g>
          </g>
          <defs>
            <clipPath id="bgblur_0_1_1569_clip_path" transform="translate(6.78385 6.78385)">
              <path d={svgPaths.p2ee49200} />
            </clipPath>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="30.7937" id="filter1_d_1_1569" width="29.6079" x="3.48068" y="2.88925">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="2.26128" dy="2.26128" />
              <feGaussianBlur stdDeviation="2.26128" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.368627 0 0 0 0 0.431765 0 0 0 0 1 0 0 0 0.5 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1569" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1569" mode="normal" result="shape" />
            </filter>
            <clipPath id="bgblur_1_1_1569_clip_path" transform="translate(-3.48068 -2.88925)">
              <path d={svgPaths.p1ef4cc80} />
            </clipPath>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1569" x1="6.12948" x2="28.8797" y1="4.60723" y2="32.7839">
              <stop stopColor="white" stopOpacity="0.25" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_1569" x1="25.1675" x2="7.29772" y1="12.7838" y2="13.3263">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_1569" x1="25.6174" x2="10.0192" y1="18.6505" y2="19.2555">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <div className="absolute bottom-[2.88%] contents left-0 right-[-0.18%] top-[4.25%]" data-name="Arrow">
      <Bg />
      <Icon3 />
    </div>
  );
}

function IconlyGlassArrow() {
  return (
    <div className="absolute h-[47.019px] right-[11.42px] top-[19px] w-[46.582px]" data-name="Iconly/Glass/Arrow">
      <Arrow />
    </div>
  );
}

function Component() {
  return (
    <div className="bg-[#f9faff] relative rounded-[4px] shrink-0 size-[150px]" data-name="1">
      <div className="overflow-clip relative rounded-[inherit] size-[150px]">
        <Sub />
        <p className="absolute font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[22px] left-[calc(50%-67px)] text-[#333333] text-[16px] top-[87px] tracking-[0.24px] w-[136px]">취업 문턱을 낮춰주는</p>
        <IconlyGlassArrow />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f4f5ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function SystemIcArrowRightLinear1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="system/ic_arrow_right_linear">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1592)" id="system/ic_arrow_right_linear">
          <g id="Vector"></g>
          <path d={svgPaths.p3cf8a100} fill="var(--fill-0, #777777)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1592">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Sub1() {
  return (
    <div className="absolute content-stretch flex gap-[2px] items-center left-[8px] top-[113px]" data-name="sub">
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#777777] text-[14px] text-nowrap tracking-[0.14px] whitespace-pre">웹개발 교육</p>
      <SystemIcArrowRightLinear1 />
    </div>
  );
}

function Bg1() {
  return (
    <div className="absolute inset-[10.81%_59.19%_41.19%_-7.19%]" data-name="Bg">
      <div className="absolute inset-[-9.48%_-9.23%_-8.73%_-8.97%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 29">
          <g id="Bg">
            <path d={svgPaths.p22f2f900} data-figma-bg-blur-radius="3.82041" fill="url(#paint0_linear_1_1555)" id="Fill 1" />
            <g filter="url(#filter1_f_1_1555)" id="Path">
              <path d={svgPaths.p28699420} fill="var(--fill-0, #FF3D22)" />
            </g>
          </g>
          <defs>
            <clipPath id="bgblur_0_1_1555_clip_path" transform="translate(1.66655 1.5446)">
              <path d={svgPaths.p22f2f900} />
            </clipPath>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="28.3699" id="filter1_f_1_1555" width="28.3699" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_1555" stdDeviation="3.23265" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1555" x1="15.9207" x2="-5.16783" y1="15.8829" y2="26.1367">
              <stop stopColor="#FFA78F" />
              <stop offset="1" stopColor="#F23E2C" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute inset-[16.38%_4%_4%_16.38%]" data-name="Icon">
      <div className="absolute inset-[-1.22%_-11.93%_-10.3%_-5.22%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47 45">
          <g id="Icon">
            <path d={svgPaths.p307ac800} data-figma-bg-blur-radius="7.31178" fill="var(--fill-0, #FFAC95)" fillOpacity="0.4" id="Fill 1" stroke="url(#paint0_linear_1_1516)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.487452" />
            <g data-figma-bg-blur-radius="9.98781" filter="url(#filter1_d_1_1516)" id="Union">
              <mask fill="white" id="path-2-inside-1_1_1516">
                <path d={svgPaths.p1167df00} />
              </mask>
              <path d={svgPaths.p1167df00} fill="url(#paint1_linear_1_1516)" shapeRendering="crispEdges" />
              <path d={svgPaths.p3cefab00} fill="url(#paint2_linear_1_1516)" mask="url(#path-2-inside-1_1_1516)" />
            </g>
          </g>
          <defs>
            <clipPath id="bgblur_0_1_1516_clip_path" transform="translate(5.72157 7.31178)">
              <path d={svgPaths.p307ac800} />
            </clipPath>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="42.6143" id="filter1_d_1_1516" width="48.0636" x="-1.42683" y="1.78419">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="1.42683" dy="5.71294" />
              <feGaussianBlur stdDeviation="4.9939" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.341651 0 0 0 0 0.0813739 0 0 0 0.83 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1516" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1516" mode="normal" result="shape" />
            </filter>
            <clipPath id="bgblur_1_1_1516_clip_path" transform="translate(1.42683 -1.78419)">
              <path d={svgPaths.p1167df00} />
            </clipPath>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1516" x1="8.41462" x2="33.8086" y1="5.12526" y2="36.5763">
              <stop stopColor="white" stopOpacity="0.25" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_1516" x1="20.9394" x2="26.1759" y1="13.1594" y2="30.7753">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_1516" x1="18.0717" x2="32.3402" y1="15.3391" y2="29.6079">
              <stop stopColor="white" stopOpacity="0.4" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Discovery() {
  return (
    <div className="absolute contents inset-[10.81%_4%_4%_-7.19%]" data-name="Discovery">
      <Bg1 />
      <Icon4 />
    </div>
  );
}

function IconlyGlassDiscovery() {
  return (
    <div className="absolute inset-[12%_6.67%_54.67%_60%]" data-name="Iconly/Glass/Discovery">
      <Discovery />
    </div>
  );
}

function Component1() {
  return (
    <div className="bg-[#fff9f9] relative rounded-[4px] shrink-0 size-[150px]" data-name="2">
      <div className="overflow-clip relative rounded-[inherit] size-[150px]">
        <Sub1 />
        <p className="absolute font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[22px] left-[calc(50%-67px)] text-[#333333] text-[16px] top-[87px] tracking-[0.24px] w-[136px]">개발자로 변신하기</p>
        <IconlyGlassDiscovery />
      </div>
      <div aria-hidden="true" className="absolute border border-[#fff3f4] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function SystemIcArrowRightLinear2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="system/ic_arrow_right_linear">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1592)" id="system/ic_arrow_right_linear">
          <g id="Vector"></g>
          <path d={svgPaths.p3cf8a100} fill="var(--fill-0, #777777)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1592">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Sub2() {
  return (
    <div className="absolute content-stretch flex gap-[2px] items-center left-[8px] top-[116px]" data-name="sub">
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#777777] text-[14px] text-nowrap tracking-[0.14px] whitespace-pre">무료 교육</p>
      <SystemIcArrowRightLinear2 />
    </div>
  );
}

function Bg2() {
  return (
    <div className="absolute inset-[8%_56%_46%_-2%]" data-name="Bg">
      <div className="absolute inset-[-11.27%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 29">
          <g id="Bg">
            <path d={svgPaths.p3ed11500} fill="url(#paint0_linear_1_1510)" id="Discount" />
            <g filter="url(#filter0_f_1_1510)" id="Discount_2" opacity="0.5">
              <path d={svgPaths.p42eac00} fill="var(--fill-0, #31BEFF)" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="28.1861" id="filter0_f_1_1510" width="28.1896" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_1510" stdDeviation="3.23952" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1510" x1="14.0949" x2="14.0949" y1="2.5931" y2="25.5931">
              <stop stopColor="#7FACFF" />
              <stop offset="1" stopColor="#0DDBFF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute inset-[14%_-2%_-2%_14%]" data-name="Icon">
      <div className="absolute inset-[-1.22%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
          <g id="Icon">
            <g data-figma-bg-blur-radius="12.9336" id="Discount">
              <mask fill="black" height="46" id="path-1-outside-1_1_1503" maskUnits="userSpaceOnUse" width="46" x="-0.461099" y="-0.461101">
                <rect fill="white" height="46" width="46" x="-0.461099" y="-0.461101" />
                <path d={svgPaths.pacae500} />
              </mask>
              <path d={svgPaths.pacae500} fill="var(--fill-0, #B9DAFF)" fillOpacity="0.35" />
              <path d={svgPaths.p3924cf00} fill="url(#paint0_linear_1_1503)" mask="url(#path-1-outside-1_1_1503)" />
            </g>
            <g data-figma-bg-blur-radius="8.26179" filter="url(#filter1_d_1_1503)" id="Union">
              <mask fill="white" id="path-3-inside-2_1_1503">
                <path d={svgPaths.p192697f2} />
              </mask>
              <path d={svgPaths.p192697f2} fill="url(#paint1_linear_1_1503)" shapeRendering="crispEdges" />
              <path d={svgPaths.p3eddaa80} fill="url(#paint2_linear_1_1503)" mask="url(#path-3-inside-2_1_1503)" />
            </g>
          </g>
          <defs>
            <clipPath id="bgblur_0_1_1503_clip_path" transform="translate(12.9336 12.9336)">
              <path d={svgPaths.pacae500} />
            </clipPath>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="35.1877" id="filter1_d_1_1503" width="39.8205" x="3.97626" y="5.29548">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="2.06545" dy="2.06545" />
              <feGaussianBlur stdDeviation="4.13089" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.489558 0 0 0 0 0.756207 0 0 0 0 1 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1503" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1503" mode="normal" result="shape" />
            </filter>
            <clipPath id="bgblur_1_1_1503_clip_path" transform="translate(-3.97626 -5.29548)">
              <path d={svgPaths.p192697f2} />
            </clipPath>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1503" x1="0.410509" x2="35.5793" y1="0.239699" y2="40.457">
              <stop stopColor="white" stopOpacity="0.4" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_1503" x1="27.501" x2="21.8214" y1="14.0736" y2="27.4987">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_1503" x1="14.0073" x2="32.2891" y1="16.5059" y2="30.6604">
              <stop stopColor="white" stopOpacity="0.36" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Discount() {
  return (
    <div className="absolute contents inset-[8%_-2%_-2%_-2%]" data-name="Discount">
      <Bg2 />
      <Icon5 />
    </div>
  );
}

function IconlyGlassDiscount() {
  return (
    <div className="absolute inset-[12%_6.66%_54.67%_60%]" data-name="Iconly/Glass/Discount">
      <Discount />
    </div>
  );
}

function Component2() {
  return (
    <div className="bg-[#f6fbff] relative rounded-[4px] shrink-0 size-[150px]" data-name="3">
      <div className="overflow-clip relative rounded-[inherit] size-[150px]">
        <Sub2 />
        <p className="absolute font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[22px] left-[calc(50%-67px)] text-[#333333] text-[16px] top-[90px] tracking-[0.24px] w-[136px]">0원으로 스펙쌓기</p>
        <IconlyGlassDiscount />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eef8ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function SystemIcArrowRightLinear3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="system/ic_arrow_right_linear">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1592)" id="system/ic_arrow_right_linear">
          <g id="Vector"></g>
          <path d={svgPaths.p3cf8a100} fill="var(--fill-0, #777777)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1592">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Sub3() {
  return (
    <div className="absolute content-stretch flex gap-[2px] items-center left-[8px] top-[116px]" data-name="sub">
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#777777] text-[14px] text-nowrap tracking-[0.14px] whitespace-pre">온라인 교육</p>
      <SystemIcArrowRightLinear3 />
    </div>
  );
}

function Icons() {
  return (
    <div className="absolute inset-[16%_8.3%_57.33%_56.67%]" data-name="Icons">
      <div className="absolute bottom-[-6.72%] left-0 right-[-0.86%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53 43">
          <g id="Icons">
            <path d={svgPaths.p24136600} fill="url(#paint0_radial_1_1498)" id="Ellipse 22" />
            <path d={svgPaths.p3a928600} data-figma-bg-blur-radius="7.29435" fill="url(#paint1_linear_1_1498)" fillOpacity="0.3" id="Shape" />
            <g data-figma-bg-blur-radius="7.29435" id="Shape (Stroke)">
              <path clipRule="evenodd" d={svgPaths.pb4a1b00} fill="url(#paint2_linear_1_1498)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pb4a1b00} fill="url(#paint3_radial_1_1498)" fillRule="evenodd" />
            </g>
          </g>
          <defs>
            <clipPath id="bgblur_0_1_1498_clip_path" transform="translate(-7.04552 2.05103)">
              <path d={svgPaths.p3a928600} />
            </clipPath>
            <clipPath id="bgblur_1_1_1498_clip_path" transform="translate(-6.80242 2.29435)">
              <path clipRule="evenodd" d={svgPaths.pb4a1b00} fillRule="evenodd" />
            </clipPath>
            <radialGradient cx="0" cy="0" gradientTransform="translate(18.1111 11.1111) rotate(90) scale(11.1111)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_1498" r="1">
              <stop stopColor="#FF7C1F" />
              <stop offset="1" stopColor="#FFA768" />
            </radialGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_1498" x1="18.4509" x2="59.3426" y1="8.67558" y2="30.5407">
              <stop stopColor="#FF965A" stopOpacity="0.9" />
              <stop offset="0.447036" stopColor="#FFAA56" stopOpacity="0.955296" />
              <stop offset="1" stopColor="#FF8E25" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_1498" x1="19.6954" x2="55.5629" y1="3.65402" y2="25.2713">
              <stop offset="0.188941" stopColor="#FFEEE7" stopOpacity="0.523483" />
              <stop offset="0.526042" stopColor="#FFA888" />
              <stop offset="1" stopColor="#FFC4B4" stopOpacity="0.1" />
            </linearGradient>
            <radialGradient cx="0" cy="0" gradientTransform="matrix(19.2363 -22.9939 23.7356 48.4901 19.9107 41.4537)" gradientUnits="userSpaceOnUse" id="paint3_radial_1_1498" r="1">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="bg-[#fff6f0] relative rounded-[4px] shrink-0 size-[150px]" data-name="4">
      <div className="overflow-clip relative rounded-[inherit] size-[150px]">
        <Sub3 />
        <p className="absolute font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[22px] left-[calc(50%-67px)] text-[#333333] text-[16px] top-[90px] tracking-[0.24px] w-[136px]">집에서 커리어 성장</p>
        <Icons />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ffe8db] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function SystemIcArrowRightLinear4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="system/ic_arrow_right_linear">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1592)" id="system/ic_arrow_right_linear">
          <g id="Vector"></g>
          <path d={svgPaths.p3cf8a100} fill="var(--fill-0, #777777)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1592">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[2px] items-center left-[8px] top-[116px]">
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#777777] text-[14px] text-nowrap tracking-[0.14px] whitespace-pre">AI, 빅데이터</p>
      <SystemIcArrowRightLinear4 />
    </div>
  );
}

function Icons1() {
  return (
    <div className="absolute inset-[17.33%_8%_56%_65.33%]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icons">
          <path d={svgPaths.pe857600} fill="url(#paint0_radial_1_1487)" id="Rectangle 53" />
          <path d={svgPaths.p3c796b80} data-figma-bg-blur-radius="7.31707" fill="url(#paint1_linear_1_1487)" fillOpacity="0.3" id="Rectangle 49" />
          <g data-figma-bg-blur-radius="7.31707" id="Rectangle 49 (Stroke)">
            <path clipRule="evenodd" d={svgPaths.p2053f200} fill="url(#paint2_linear_1_1487)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2053f200} fill="url(#paint3_radial_1_1487)" fillRule="evenodd" />
          </g>
          <path d={svgPaths.p22dfb880} data-figma-bg-blur-radius="7.31707" fill="url(#paint4_linear_1_1487)" fillOpacity="0.3" id="Rectangle 50" />
          <g data-figma-bg-blur-radius="7.31707" id="Rectangle 50 (Stroke)">
            <path clipRule="evenodd" d={svgPaths.p398400} fill="url(#paint5_linear_1_1487)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p398400} fill="url(#paint6_radial_1_1487)" fillRule="evenodd" />
          </g>
          <path d={svgPaths.p28348f00} data-figma-bg-blur-radius="7.31707" fill="url(#paint7_linear_1_1487)" fillOpacity="0.3" id="Rectangle 51" />
          <g data-figma-bg-blur-radius="7.31707" id="Rectangle 51 (Stroke)">
            <path clipRule="evenodd" d={svgPaths.p3975fcc0} fill="url(#paint8_linear_1_1487)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3975fcc0} fill="url(#paint9_radial_1_1487)" fillRule="evenodd" />
          </g>
          <path d={svgPaths.p3e19d800} data-figma-bg-blur-radius="7.31707" fill="url(#paint10_linear_1_1487)" fillOpacity="0.3" id="Rectangle 52" />
          <g data-figma-bg-blur-radius="7.31707" id="Rectangle 52 (Stroke)">
            <path clipRule="evenodd" d={svgPaths.p38b36170} fill="url(#paint11_linear_1_1487)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p38b36170} fill="url(#paint12_radial_1_1487)" fillRule="evenodd" />
          </g>
        </g>
        <defs>
          <clipPath id="bgblur_0_1_1487_clip_path" transform="translate(7.31707 7.31707)">
            <path d={svgPaths.p3c796b80} />
          </clipPath>
          <clipPath id="bgblur_1_1_1487_clip_path" transform="translate(7.31707 7.31707)">
            <path clipRule="evenodd" d={svgPaths.p2053f200} fillRule="evenodd" />
          </clipPath>
          <clipPath id="bgblur_2_1_1487_clip_path" transform="translate(-14.3902 7.31707)">
            <path d={svgPaths.p22dfb880} />
          </clipPath>
          <clipPath id="bgblur_3_1_1487_clip_path" transform="translate(-14.3902 7.31707)">
            <path clipRule="evenodd" d={svgPaths.p398400} fillRule="evenodd" />
          </clipPath>
          <clipPath id="bgblur_4_1_1487_clip_path" transform="translate(-14.3902 -14.3903)">
            <path d={svgPaths.p28348f00} />
          </clipPath>
          <clipPath id="bgblur_5_1_1487_clip_path" transform="translate(-14.3902 -14.3903)">
            <path clipRule="evenodd" d={svgPaths.p3975fcc0} fillRule="evenodd" />
          </clipPath>
          <clipPath id="bgblur_6_1_1487_clip_path" transform="translate(7.31707 -14.3903)">
            <path d={svgPaths.p3e19d800} />
          </clipPath>
          <clipPath id="bgblur_7_1_1487_clip_path" transform="translate(7.31707 -14.3903)">
            <path clipRule="evenodd" d={svgPaths.p38b36170} fillRule="evenodd" />
          </clipPath>
          <radialGradient cx="0" cy="0" gradientTransform="translate(20 20) rotate(90) scale(10)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_1487" r="1">
            <stop stopColor="#A322FF" />
            <stop offset="1" stopColor="#C26CFF" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_1487" x1="1.95752" x2="21.7021" y1="1.68772" y2="11.9112">
            <stop stopColor="#D65AFF" stopOpacity="0.9" />
            <stop offset="0.447036" stopColor="#D756FF" stopOpacity="0.955296" />
            <stop offset="1" stopColor="#C14EFF" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_1487" x1="2.63253" x2="19.7789" y1="-0.65331" y2="9.35781">
            <stop offset="0.188941" stopColor="#F4E7FF" stopOpacity="0.523483" />
            <stop offset="0.526042" stopColor="#BE88FF" />
            <stop offset="1" stopColor="#EFB4FF" stopOpacity="0.1" />
          </linearGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(9.04509 -11.1607 11.1607 23.536 2.73378 17.6938)" gradientUnits="userSpaceOnUse" id="paint3_radial_1_1487" r="1">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_1487" x1="23.6647" x2="43.4093" y1="1.68772" y2="11.9112">
            <stop stopColor="#E35AFF" stopOpacity="0.9" />
            <stop offset="0.447036" stopColor="#C456FF" stopOpacity="0.955296" />
            <stop offset="1" stopColor="#CD4EFF" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_1487" x1="24.3398" x2="41.4861" y1="-0.65331" y2="9.35781">
            <stop offset="0.188941" stopColor="#F4E7FF" stopOpacity="0.523483" />
            <stop offset="0.526042" stopColor="#BE88FF" />
            <stop offset="1" stopColor="#EFB4FF" stopOpacity="0.1" />
          </linearGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(9.04509 -11.1607 11.1607 23.536 24.441 17.6938)" gradientUnits="userSpaceOnUse" id="paint6_radial_1_1487" r="1">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_1487" x1="23.6647" x2="43.4093" y1="23.395" y2="33.6185">
            <stop stopColor="#E35AFF" stopOpacity="0.9" />
            <stop offset="0.447036" stopColor="#C456FF" stopOpacity="0.955296" />
            <stop offset="1" stopColor="#CD4EFF" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1_1487" x1="24.3398" x2="41.4861" y1="21.054" y2="31.0651">
            <stop offset="0.188941" stopColor="#F4E7FF" stopOpacity="0.523483" />
            <stop offset="0.526042" stopColor="#BE88FF" />
            <stop offset="1" stopColor="#EFB4FF" stopOpacity="0.1" />
          </linearGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(9.04509 -11.1607 11.1607 23.536 24.441 39.4011)" gradientUnits="userSpaceOnUse" id="paint9_radial_1_1487" r="1">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_1_1487" x1="1.95752" x2="21.7021" y1="23.395" y2="33.6185">
            <stop stopColor="#E35AFF" stopOpacity="0.9" />
            <stop offset="0.447036" stopColor="#C456FF" stopOpacity="0.955296" />
            <stop offset="1" stopColor="#CD4EFF" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_1_1487" x1="2.63253" x2="19.7789" y1="21.054" y2="31.0651">
            <stop offset="0.188941" stopColor="#F4E7FF" stopOpacity="0.523483" />
            <stop offset="0.526042" stopColor="#BE88FF" />
            <stop offset="1" stopColor="#EFB4FF" stopOpacity="0.1" />
          </linearGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(9.04509 -11.1607 11.1607 23.536 2.73378 39.4011)" gradientUnits="userSpaceOnUse" id="paint12_radial_1_1487" r="1">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function Component4() {
  return (
    <div className="bg-[#fdfaff] relative rounded-[4px] shrink-0 size-[150px]" data-name="5">
      <div className="overflow-clip relative rounded-[inherit] size-[150px]">
        <Frame />
        <p className="absolute font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[22px] left-[calc(50%-67px)] text-[#333333] text-[16px] top-[90px] tracking-[0.24px] w-[136px]">고연봉 미래기술</p>
        <Icons1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f5ebff] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Banner() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="banner">
      <Component />
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
    </div>
  );
}

function Edu1() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[16px] items-start pb-[32px] pt-[24px] px-[16px] relative shrink-0 w-[360px]" data-name="edu">
      <Header1 />
      <Banner />
    </div>
  );
}

function SectionContents() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-center left-0 top-[calc(50%-120.5px)] translate-y-[-50%]" data-name="section_contents">
      <SectionPopular />
      <Edu />
      <Edu1 />
    </div>
  );
}

function FunctionIcGnbHomeActive() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="function/ic_gnb_home_active">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="function/ic_gnb_home_active">
          <path clipRule="evenodd" d={svgPaths.p3cb67b00} fill="var(--fill-0, #333333)" fillRule="evenodd" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Menu() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-px grow h-[56px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="menu">
      <FunctionIcGnbHomeActive />
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[17px] relative shrink-0 text-[#333333] text-[11px] text-center text-nowrap whitespace-pre">홈</p>
    </div>
  );
}

function FunctionIcGnbRecruitsInactive() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="function/ic_gnb_recruits_inactive">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="function/ic_gnb_recruits_inactive">
          <g id="Subtract">
            <path d={svgPaths.p3c483380} fill="var(--fill-0, #BBBBBB)" />
            <path d={svgPaths.p2830b500} fill="var(--fill-0, #BBBBBB)" />
            <path d={svgPaths.pb805380} fill="var(--fill-0, #BBBBBB)" />
            <path d={svgPaths.p63ebf80} fill="var(--fill-0, #BBBBBB)" />
            <path d={svgPaths.p1e780d00} fill="var(--fill-0, #BBBBBB)" />
            <path d={svgPaths.p157edd00} fill="var(--fill-0, #BBBBBB)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Title() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="title">
      <p className="[grid-area:1_/_1] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[17px] ml-[19.5px] mt-0 relative text-[#bbbbbb] text-[11px] text-center text-nowrap translate-x-[-50%] whitespace-pre">채용공고</p>
    </div>
  );
}

function Menu1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-px grow h-[56px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="menu">
      <FunctionIcGnbRecruitsInactive />
      <Title />
    </div>
  );
}

function FunctionIcGnbDocumentsInactive() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="function/ic_gnb_documents_inactive">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="function/ic_gnb_documents_inactive">
          <g id="Subtract">
            <path d={svgPaths.p67b9b00} fill="var(--fill-0, #BBBBBB)" />
            <path d={svgPaths.p1ab95400} fill="var(--fill-0, #BBBBBB)" />
            <path d={svgPaths.p11b94600} fill="var(--fill-0, #BBBBBB)" />
            <path clipRule="evenodd" d={svgPaths.p149f4a00} fill="var(--fill-0, #BBBBBB)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Menu2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-px grow h-[56px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="menu">
      <FunctionIcGnbDocumentsInactive />
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[17px] relative shrink-0 text-[#bbbbbb] text-[11px] text-center text-nowrap whitespace-pre">자기소개서</p>
    </div>
  );
}

function FunctionIcGnbChatInactive() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="function/ic_gnb_chat_inactive">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="function/ic_gnb_chat_inactive">
          <g id="Subtract">
            <path d={svgPaths.p36489980} fill="var(--fill-0, #BBBBBB)" />
            <path d={svgPaths.p2865fd80} fill="var(--fill-0, #BBBBBB)" />
            <path d={svgPaths.p39cc3a00} fill="var(--fill-0, #BBBBBB)" />
            <path clipRule="evenodd" d={svgPaths.p4b9a700} fill="var(--fill-0, #BBBBBB)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Menu3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-px grow h-[56px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="menu">
      <FunctionIcGnbChatInactive />
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[17px] relative shrink-0 text-[#bbbbbb] text-[11px] text-center text-nowrap whitespace-pre">채팅</p>
    </div>
  );
}

function FunctionIcGnbDatalabInactive() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="function/ic_gnb_datalab_inactive">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="function/ic_gnb_datalab_inactive">
          <path clipRule="evenodd" d={svgPaths.p390bd780} fill="var(--fill-0, #BBBBBB)" fillRule="evenodd" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Menu4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-px grow h-[56px] items-center justify-center min-h-px min-w-px relative shrink-0" data-name="menu">
      <FunctionIcGnbDatalabInactive />
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[17px] relative shrink-0 text-[#bbbbbb] text-[11px] text-center text-nowrap whitespace-pre">데이터랩</p>
    </div>
  );
}

function Menus() {
  return (
    <div className="absolute bg-neutral-50 content-stretch flex items-start justify-center left-0 top-0 w-[360px]" data-name="menus">
      <Menu />
      <Menu1 />
      <Menu2 />
      <Menu3 />
      <Menu4 />
    </div>
  );
}

function GnbAndroid() {
  return (
    <div className="absolute bg-neutral-50 bottom-0 h-[56px] left-0 overflow-clip w-[360px]" data-name="GNB(Android)">
      <Menus />
      <div className="absolute bottom-full left-0 right-0 top-0" data-name="divider">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1">
            <path d="M0 0.5H360" id="divider" stroke="var(--stroke-0, #DDDDDD)" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[336px] size-[4px] top-[7px]" data-name="indicator 🚩">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #FF6813)" id="indicator ð©" r="2" />
        </svg>
      </div>
    </div>
  );
}

export default function AppAndroid() {
  return (
    <div className="bg-neutral-100 relative size-full" data-name="App(android) / 홈">
      <SectionContents />
      <GnbAndroid />
    </div>
  );
}