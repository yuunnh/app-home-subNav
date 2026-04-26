import svgPaths from "./svg-gjwptaj59w";

function Header() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[328px]" data-name="header">
      <p className="css-ew64yg font-bold leading-[25px] relative shrink-0 text-[#333] text-[18px] tracking-[0.27px]">{`취준 미션을 수행해 보세요 🚩 `}</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[4px] pr-[8px] relative w-full">
          <p className="css-ew64yg font-normal leading-[20px] relative shrink-0 text-[#999] text-[13px] tracking-[0.13px]">진행 중인 미션 ⚡️</p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start justify-center relative w-full">
        <p className="css-ew64yg font-bold leading-[19px] relative shrink-0 text-[#333] text-[14px] tracking-[0.21px]">{`면접, 이것만은 알고 가자!   `}</p>
        <p className="css-ew64yg font-normal leading-[18px] relative shrink-0 text-[#777] text-[12px] tracking-[0.12px]">필수 면접 질문 200제</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[18px] relative shrink-0 w-[56px]">
      <div className="absolute flex flex-col font-normal justify-center leading-[0] left-[28px] text-[12px] text-center text-white top-[9px] tracking-[0.12px] translate-x-[-50%] translate-y-[-50%] w-[56px]">
        <p className="css-4hzbpn leading-[18px]">PDF 받기</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#ff6813] h-[32px] relative rounded-[4px] shrink-0 w-[84px]" data-name="button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] py-[7px] relative size-full">
        <Frame3 />
      </div>
    </div>
  );
}

function BannerListItem() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="BannerListItem">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[17px] py-[11px] relative w-full">
          <Frame1 />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start justify-center relative w-full">
        <p className="css-g0mm18 font-bold leading-[19px] min-w-full overflow-hidden relative shrink-0 text-[#333] text-[14px] text-ellipsis tracking-[0.21px] w-[min-content]">내 돈 내고 듣기는 부담스러운 교육</p>
        <p className="css-ew64yg font-normal leading-[18px] relative shrink-0 text-[#777] text-[12px] tracking-[0.12px]">지원금 30초 확인</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#ff6813] h-[32px] relative rounded-[4px] shrink-0 w-[84px]" data-name="button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] py-[7px] relative size-full">
        <div className="css-g0mm18 flex flex-col font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white tracking-[0.12px]">
          <p className="css-ew64yg leading-[18px]">{`무료 진단 `}</p>
        </div>
      </div>
    </div>
  );
}

function BannerListItem1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="BannerListItem">
      <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[17px] py-[11px] relative w-full">
          <Frame2 />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="relative shrink-0 w-full" data-name="list">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative w-full">
        <BannerListItem />
        <BannerListItem1 />
        <BannerListItem />
      </div>
    </div>
  );
}

function Indicator() {
  return (
    <div className="h-[4px] relative shrink-0 w-[19.998px]" data-name="indicator">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.998 4">
        <g id="indicator">
          <ellipse cx="1.99967" cy="2" fill="var(--fill-0, black)" fillOpacity="0.2" id="Ellipse 8" rx="1.99967" ry="2" />
          <ellipse cx="9.99902" cy="2" fill="var(--fill-0, black)" fillOpacity="0.6" id="Ellipse 7" rx="1.99967" ry="2" />
          <ellipse cx="17.9984" cy="2" fill="var(--fill-0, black)" fillOpacity="0.2" id="Ellipse 6" rx="1.99967" ry="2" />
        </g>
      </svg>
    </div>
  );
}

function FunctionIcNotification() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="function/ic_notification">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="function/ic_notification">
          <path d={svgPaths.p2f9f3f0} fill="var(--fill-0, #FF6813)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#fff6f0] content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[8px] py-[7px] relative rounded-[4px] shrink-0 w-[328px]" data-name="button">
      <div aria-hidden="true" className="absolute border border-[#fed2ba] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <FunctionIcNotification />
      <div className="css-g0mm18 flex flex-col font-normal justify-center leading-[0] relative shrink-0 text-[#ff6813] text-[12px] tracking-[0.12px]">
        <p className="css-ew64yg leading-[18px]">{`다음 미션 알림받기 `}</p>
      </div>
    </div>
  );
}

function Noti() {
  return (
    <div className="relative shrink-0 w-full" data-name="noti">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative w-full">
        <Button2 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Frame />
      <List />
      <Indicator />
      <Noti />
    </div>
  );
}

function Grid() {
  return (
    <div className="relative shrink-0 w-full" data-name="grid">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Container />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-[328px]" data-name="Container">
      <Grid />
    </div>
  );
}

export default function Edu() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start pb-[32px] pt-[24px] px-[16px] relative size-full" data-name="edu">
      <Header />
      <Container1 />
    </div>
  );
}