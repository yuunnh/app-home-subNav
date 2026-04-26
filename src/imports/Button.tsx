import svgPaths from "./svg-gn63fhit8b";

function FunctionIcNotificationInactive() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="function/ic_notification_inactive">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_7_260)" id="function/ic_notification_inactive">
          <path d={svgPaths.p23a64f00} fill="var(--fill-0, #BBBBBB)" id="vector" />
        </g>
        <defs>
          <clipPath id="clip0_7_260">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function Button() {
  return (
    <div className="relative rounded-[4px] size-full" data-name="button">
      <div aria-hidden="true" className="absolute border border-[#eeeeee] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[7px] relative size-full">
          <FunctionIcNotificationInactive />
          <div className="flex flex-col font-normal justify-center leading-[0] relative shrink-0 text-[#777777] text-[12px] text-nowrap tracking-[0.12px]">
            <p className="leading-[18px] whitespace-pre">{`알림 취소하기 `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}