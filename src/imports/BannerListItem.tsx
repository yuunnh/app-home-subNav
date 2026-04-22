function Frame() {
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
    <div className="bg-[#d64f00] h-[32px] relative rounded-[4px] shrink-0 w-[72px]" data-name="button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[8px] py-[7px] relative w-[72px]">
        <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-center text-nowrap text-white tracking-[0.12px]">
          <p className="leading-[18px] whitespace-pre">PDF 받기</p>
        </div>
      </div>
    </div>
  );
}

export default function BannerListItem() {
  return (
    <div className="bg-neutral-50 relative rounded-[8px] size-full" data-name="BannerListItem">
      <div aria-hidden="true" className="absolute border border-[#eeeeee] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[17px] py-[11px] relative size-full">
          <Frame />
          <Button />
        </div>
      </div>
    </div>
  );
}