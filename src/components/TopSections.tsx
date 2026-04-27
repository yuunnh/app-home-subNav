import { useState, useEffect } from "react";
import svgPaths from "../imports/svg-ec64amjz0y";
import navSvgPaths from "../imports/svg-3v1w53zko6";
import imgLogo from "figma:asset/da1440a352fbdec8f2273c53c5a1fd4cab6b324b.png";
import imgImg from "figma:asset/7e150d85ebe6922302c56bb108c23fb425b9360b.png";
import imgLogo1 from "figma:asset/d942e5f5b68c356ae83f752729fc7388f207ae4d.png";
import imgLogo3 from "figma:asset/91c6d36c2fe169092bd3791f8e587cadc3eb3784.png";
import imgImg1 from "figma:asset/d000322d766755df09557b3d34bf3c64bb46fdd3.png";
import imgImg2 from "figma:asset/63c161d982d470dd6212687307cd3d05ff04fcbf.png";
import imgLogo4 from "figma:asset/258f247074aa7031631d09e4cd5a087265f09c35.png";
import { imgLogo2 } from "../imports/svg-3469w";
import imgSkala from "figma:asset/2edcb8c20f935f39760012b0cdde1451e10d1e3d.png";
import { motion, AnimatePresence } from "motion/react";

// ===== SectionAds (Banner + Ad Sub + QuickAccessNav) =====

function SubBanner() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCollapsed(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white relative w-[360px] overflow-hidden">
      <AnimatePresence mode="wait">
        {!isCollapsed ? (
          // 확장된 상태 (최초 2초)
          <motion.div
            key="expanded"
            initial={{ height: "auto" }}
            exit={{
              height: 44,
              opacity: 0,
              transition: {
                height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                opacity: { duration: 0.3, ease: "easeOut" }
              }
            }}
          >
            {/* 이 공고 어때요 타이틀 */}
            <motion.div
              className="content-stretch flex items-center justify-between pb-[8px] pt-[12px] px-[16px] relative shrink-0 w-[360px]"
              exit={{
                y: -10,
                opacity: 0,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <p className="font-normal leading-[18px] relative shrink-0 text-[#777777] text-[12px] tracking-[0.12px]">방금 본 광고 👀</p>
              <div className="content-stretch flex h-[20px] items-center justify-center px-[6px] relative rounded-[4px] shrink-0">
                <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[4px]" />
                <p className="font-normal leading-[18px] relative shrink-0 text-[#dddddd] text-[12px] text-right tracking-[0.12px] whitespace-nowrap">AD</p>
              </div>
            </motion.div>

            {/* Divider */}
            <motion.div
              className="h-0 relative shrink-0 w-[360px]"
              exit={{
                y: -10,
                opacity: 0,
                transition: { duration: 0.25, ease: "easeOut" }
              }}
            >
              <div className="absolute bottom-full left-0 right-0 top-0">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1">
                    <line stroke="#F5F5F5" x2="360" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* 신한은행 추천 */}
            <motion.div
              className="content-stretch flex items-center justify-between pb-[8px] pt-[8px] px-[16px] relative shrink-0 w-[360px] overflow-hidden"
              exit={{
                y: -20,
                opacity: 0,
                transition: { duration: 0.35, ease: "easeOut" }
              }}
            >
              {/* Shimmer effect overlay */}
              <motion.div
                className="absolute inset-0 pointer-events-none z-10"
                initial={{ x: "-100%" }}
                animate={{
                  x: "200%",
                  transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                    ease: "easeInOut"
                  }
                }}
                style={{
                  background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.9) 50%, transparent 100%)",
                  width: "80%",
                  transform: "skewX(-15deg)",
                  filter: "blur(8px)"
                }}
              />

              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[121px] z-0">
                <p className="font-semibold leading-[19px] relative shrink-0 text-[#333] text-[14px] tracking-[0.14px] w-full">신한은행</p>
                <p className="font-normal leading-[18px] relative shrink-0 text-[#777] text-[12px] w-full">2024년 기술직 공개 채용</p>
              </div>
              <div className="h-[54px] relative rounded-[8px] shrink-0 w-[72px] z-0">
                <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[8px] size-full" src={imgLogo} />
              </div>
            </motion.div>
          </motion.div>
        ) : (
          // 축소된 상태 (2초 후)
          <motion.div
            key="collapsed"
            initial={{ y: -20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                y: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                opacity: { duration: 0.3, delay: 0.1, ease: "easeOut" }
              }
            }}
            className="content-stretch flex flex-col relative shrink-0 w-[360px]"
          >
            <div className="flex items-center justify-between pb-[4px] pt-[8px] px-[16px] w-full">
            <motion.div
              className="content-stretch flex items-center gap-[8px] relative shrink-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.6, delay: 0.1, ease: "easeOut" } }}
            >
              {/* 파란 점 */}
              <motion.div
                className="relative shrink-0 size-[6px]"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, transition: { duration: 0.4, delay: 0.3, ease: "easeOut" } }}
              >
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                  <circle cx="3" cy="3" fill="#4A90E2" r="3" />
                </svg>
              </motion.div>
              {/* 텍스트 */}
              <div className="flex items-center gap-[8px]">
                <p className="font-normal leading-[19px] relative shrink-0 text-[#777] text-[12px] tracking-[0.12px]">방금 본 광고 👀</p>
              </div>
            </motion.div>
            {/* 로고 */}
            <motion.div
              className="h-[32px] relative rounded-[8px] shrink-0 w-[42px]"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.5, delay: 0.2, ease: "easeOut" }
              }}
            >
              <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[8px] size-full" src={imgLogo} />
            </motion.div>
            </div>
            {/* 디바이더 */}
            <div className="h-0 relative shrink-0 w-[360px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1">
                  <line stroke="#F5F5F5" x2="360" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const banners = [
  {
    bg: "#1b2239",
    image: imgImg,
    brand: "앵커리어",
    titleLines: ["자소설닷컴", "디자인 직무 채용"],
    infoLines: ["2023.02.28 ~ 2023.03.27", "#자소설닷컴 #프로덕트디자인"],
  },
  {
    bg: "#1a3a2a",
    image: imgImg,
    brand: "잡코리아",
    titleLines: ["삼성전자", "SW 개발 공채"],
    infoLines: ["2023.03.01 ~ 2023.03.31", "#삼성전자 #SW개발"],
  },
  {
    bg: "#2a1a3a",
    image: imgImg,
    brand: "사람인",
    titleLines: ["현대자동차", "신입 공개채용"],
    infoLines: ["2023.03.05 ~ 2023.04.01", "#현대자동차 #신입채용"],
  },
];

function SectionAds() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const banner = banners[currentIndex];

  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[360px]">
      {/* Banner */}
      <div className="h-[240px] relative shrink-0 w-[360px]">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } }}
            exit={{ opacity: 0, transition: { duration: 0.3, ease: "easeOut" } }}
            className="absolute h-[240px] left-0 overflow-clip top-0 w-[360px] rounded-bl-[16px] rounded-br-[16px]"
            style={{ backgroundColor: banner.bg }}
          >
          <div className="absolute h-[136px] left-[210px] opacity-92 top-[104px] w-[150px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[124.26%] left-[-0.06%] max-w-none top-0 w-[118.11%]" src={banner.image} />
            </div>
          </div>
          {/* 페이지 인디케이터 */}
          <div className="absolute flex gap-[8px] items-center left-[166px] top-[224px]">
            {banners.map((_, i) => (
              <div
                key={i}
                className="rounded-full transition-all duration-300"
                style={{
                  width: 4, height: 4,
                  backgroundColor: i === currentIndex ? "#777777" : "#DDDDDD",
                }}
              />
            ))}
          </div>
          <p className="absolute font-bold leading-[19px] left-[20px] text-white text-[14px] top-[80px] tracking-[0.21px]">{banner.brand}</p>
          <div className="absolute font-bold leading-[0] left-[20px] text-white text-[20px] top-[103px] tracking-[0.3px]">
            {banner.titleLines.map((line, i) => (
              <p key={i} className={`leading-[27px]${i < banner.titleLines.length - 1 ? " mb-0" : ""}`}>{line}</p>
            ))}
          </div>
          <div className="absolute font-normal leading-[0] left-[20px] text-white text-[13px] top-[169px] tracking-[0.13px]">
            {banner.infoLines.map((line, i) => (
              <p key={i} className={`leading-[20px]${i < banner.infoLines.length - 1 ? " mb-0" : ""}`}>{line}</p>
            ))}
          </div>
          </motion.div>
        </AnimatePresence>
        {/* Gradient overlay */}
        <div className="absolute h-[80px] left-0 top-0 w-[360px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 80">
            <path d="M0 0H360V80H0V0Z" fill="url(#paint0_linear_top)" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_top" x1="180" x2="180" y1="0" y2="80">
                <stop stopOpacity="0.48" />
                <stop offset="0.510417" stopOpacity="0.16" />
                <stop offset="1" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        {/* Topbar icons */}
        <div className="absolute content-stretch flex items-center justify-end left-[232px] top-[32px]">
          <div className="overflow-clip relative rounded-[4px] shrink-0 size-[40px]">
            <div className="absolute inset-[20%]">
              <div className="absolute inset-[8.33%_7.03%_7.03%_8.33%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.314 20.314">
                  <path d={svgPaths.p1ea01b00} fill="white" />
                </svg>
              </div>
            </div>
          </div>
          <div className="overflow-clip relative rounded-[4px] shrink-0 size-[40px]">
            <div className="absolute inset-[20%] overflow-clip">
              <div className="absolute inset-[8.33%_9.85%_8.33%_9.83%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.276 20.0036">
                  <path d={svgPaths.p197e9f00} fill="white" />
                </svg>
              </div>
            </div>
          </div>
          <div className="overflow-clip relative rounded-[4px] shrink-0 size-[40px]">
            <div className="absolute inset-[20%] overflow-clip">
              <div className="absolute inset-[8.33%_8.33%_2.08%_8.33%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 21.5">
                  <path d={svgPaths.pda85980} fill="white" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* Status Bar */}
        <div className="absolute h-[24px] left-0 top-0 w-[360px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 24">
            <ellipse cx="326.891" cy="12.0585" fill="#EEEEEE" rx="4.86791" ry="4.94118" />
            <rect fill="#DDDDDD" height="8.47059" width="8.34499" x="339.656" y="7.82237" />
            <path d={svgPaths.p2780cd40} fill="#F5F5F5" />
          </svg>
        </div>
        {/* Navigator badge */}
        <div className="absolute bg-[rgba(255,255,255,0.72)] h-[32px] left-[276px] rounded-[16px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)] top-[192px] w-[71.57px]">
          <p className="-translate-x-1/2 absolute font-normal leading-[18px] left-[27px] text-[#333] text-[12px] text-center top-[7px] tracking-[0.12px] whitespace-nowrap">15/18</p>
          <div className="absolute overflow-clip rounded-[4px] size-[20px] left-[45.57px] top-[6px]">
            <div className="absolute inset-[16.67%] overflow-clip">
              <div className="absolute inset-[23.48%_33.33%_23.48%_34.26%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.32111 7.07111">
                  <path d={svgPaths.pa09b300} fill="#999999" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SubBanner - 서브배너 (이 공고 어때요 + 신한은행) */}
      <SubBanner />

      {/* Horizontal pill list */}
      <div className="flex gap-[8px] items-center overflow-x-auto pb-[8px] pt-[8px] px-[8px] relative shrink-0 w-[360px] bg-[#ffffff]" style={{ scrollbarWidth: 'none' }}>
        <div className="bg-gradient-to-r content-stretch flex from-[#fafafa] h-[36px] items-center pl-[8px] pr-[12px] relative rounded-[4px] shrink-0 to-[#f5f5f5]">
          <div className="content-stretch flex gap-[4px] items-center overflow-clip relative rounded-[4px] shrink-0">
            <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip p-[2px] relative rounded-[4px] shrink-0 size-[24px]">
              <div className="h-[32px] overflow-clip relative shrink-0 w-[18px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[87.5%] left-[-9.92%] max-w-none top-[6.25%] w-[155.56%]" src={imgSkala} />
                </div>
                <div className="absolute bg-white h-[6px] left-[14.25px] top-[17.25px] w-[7.5px]" />
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center pl-[4px] relative shrink-0">
              <p className="font-normal leading-[18px] relative shrink-0 text-[#555] text-[12px] whitespace-nowrap">SK그룹 SKALA</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-l content-stretch flex from-[#f5f5f5] h-[36px] items-center pl-[8px] pr-[12px] relative rounded-[4px] shrink-0 to-[#fafafa]">
          <div className="content-stretch flex gap-[4px] items-center overflow-clip relative rounded-[4px] shrink-0">
            <div className="bg-white relative rounded-[4px] shrink-0 size-[24px]">
              <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[2px] relative rounded-[inherit] size-full">
                <div className="aspect-[28/28] relative shrink-0 w-full">
                  <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgLogo1} />
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-[#eee] border-[0.6px] border-solid inset-0 pointer-events-none rounded-[4px]" />
            </div>
            <div className="content-stretch flex items-center justify-center pl-[4px] relative shrink-0">
              <p className="font-normal leading-[18px] relative shrink-0 text-[#555] text-[12px] whitespace-nowrap">기아 채용관</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-l content-stretch flex from-[#f5f5f5] h-[36px] items-center pl-[8px] pr-[12px] relative rounded-[4px] shrink-0 to-[#fafafa]">
          <div className="content-stretch flex items-center overflow-clip relative rounded-[4px] shrink-0">
            <div className="content-stretch flex items-center justify-center pl-[4px] relative shrink-0">
              <p className="font-normal leading-[18px] relative shrink-0 text-[#555] text-[12px] whitespace-nowrap">{`IT 신입 부트캠프 `}</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b content-stretch flex from-[#fafafa] h-[36px] items-center pl-[8px] pr-[12px] relative rounded-[4px] shrink-0 to-[#fafafa]">
          <div className="content-stretch flex gap-[4px] items-center overflow-clip relative rounded-[4px] shrink-0">
            <div className="bg-white relative rounded-[4px] shrink-0 size-[24px]">
              <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[2px] relative rounded-[inherit] size-full">
                <div className="aspect-[28/28] relative shrink-0 w-full">
                  <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgLogo1} />
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-[#eee] border-[0.6px] border-solid inset-0 pointer-events-none rounded-[4px]" />
            </div>
            <div className="content-stretch flex items-center justify-center pl-[4px] relative shrink-0">
              <p className="font-normal leading-[18px] relative shrink-0 text-[#555] text-[12px] whitespace-nowrap">CJ제일제당 </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== TopList (새로운 발견) =====

function TopList() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0 w-full">
        <p className="flex-[1_0_0] font-semibold leading-[19px] min-w-px relative text-[#555] text-[14px] tracking-[0.14px]">{`새로운 발견 ✨`}</p>
      </div>
      <div className="flex gap-[8px] items-center overflow-x-auto px-[12px] py-[8px] relative shrink-0 w-full" style={{ scrollbarWidth: 'none' }}>
        {/* 스낵 챗 발견 — 보라 */}
        <div className="bg-[#F2F3FF] flex gap-[4px] h-[36px] items-center pl-[8px] pr-[10px] relative rounded-[6px] shrink-0 cursor-pointer hover:brightness-95 transition-all">
          <div className="flex gap-[6px] items-center overflow-clip relative rounded-[4px] shrink-0">
            <div className="bg-white flex flex-col items-center justify-center overflow-clip p-[6px] relative rounded-[12px] shrink-0 size-[24px]">
              <img src="/src/assets/ic_swipeCard_default_fill.svg" width={14} height={14} alt="" />
            </div>
            <p className="font-normal leading-[18px] relative shrink-0 text-[#333] text-[12px] tracking-[0.12px] whitespace-nowrap">스낵 챗 발견</p>
          </div>
          <svg className="shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4L10 8L6 12" stroke="#999" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        {/* AI 인기 토픽 — 핑크 */}
        <div className="bg-[#FFF3F9] flex gap-[4px] h-[36px] items-center pl-[8px] pr-[10px] relative rounded-[6px] shrink-0 cursor-pointer hover:brightness-95 transition-all">
          <div className="flex gap-[6px] items-center overflow-clip relative rounded-[4px] shrink-0">
            <div className="bg-white flex flex-col items-center justify-center overflow-clip p-[6px] relative rounded-[12px] shrink-0 size-[24px]">
              <img src="/src/assets/ic_robot_default_line.svg" width={14} height={14} alt="" />
            </div>
            <p className="font-normal leading-[18px] relative shrink-0 text-[#333] text-[12px] tracking-[0.12px] whitespace-nowrap">AI 인기 토픽</p>
          </div>
          <svg className="shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4L10 8L6 12" stroke="#999" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        {/* 채용달력 — 민트 */}
        <div className="bg-[#DAF5F7] flex gap-[4px] h-[36px] items-center pl-[8px] pr-[10px] relative rounded-[6px] shrink-0 cursor-pointer hover:brightness-95 transition-all">
          <div className="flex gap-[6px] items-center overflow-clip relative rounded-[4px] shrink-0">
            <div className="bg-white flex flex-col items-center justify-center overflow-clip p-[6px] relative rounded-[12px] shrink-0 size-[24px]">
              <img src="/src/assets/ic_recruit_default_line.svg" width={14} height={14} alt="" />
            </div>
            <p className="font-normal leading-[18px] relative shrink-0 text-[#333] text-[12px] tracking-[0.12px] whitespace-nowrap">채용달력</p>
          </div>
          <svg className="shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4L10 8L6 12" stroke="#999" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
      </div>
    </div>
  );
}

// ===== SectionRecommand =====

function CompanyListItem({ logo, name, desc, date, keywords }: {
  logo: React.ReactNode; name: string; desc: string; date: string; keywords?: { label: string }[];
}) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-white col-1 h-[104px] ml-0 mt-0 row-1 w-[328px]" />
      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[16px] mt-[34px] place-items-start relative row-1">
        {logo}
      </div>
      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[84px] mt-[8px] place-items-start relative row-1">
        {keywords && keywords.length > 0 && (
          <div className="col-1 content-stretch flex gap-[4px] items-start ml-0 mt-[64px] relative row-1">
            {keywords.map((kw, i) => (
              <div key={i} className="h-[20px] relative shrink-0">
                <div className="absolute bg-[#e8ebfe] content-stretch flex flex-col h-[20px] items-start justify-center left-0 px-[8px] rounded-[4px] top-0">
                  <div className="flex flex-col font-normal justify-center leading-[0] relative shrink-0 text-[#7084fa] text-[13px] text-center tracking-[0.13px] whitespace-nowrap">
                    <p className="leading-[20px]">{kw.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="col-1 flex flex-col font-bold h-[22px] justify-center ml-0 mt-0 relative row-1 text-[#555] text-[16px] tracking-[0.24px] w-[212px]">
          <p className="leading-[22px]">{name}</p>
        </div>
        <div className="col-1 flex flex-col font-normal h-[18px] justify-center ml-0 mt-[24px] relative row-1 text-[#999] text-[12px] tracking-[0.12px] w-[228px]">
          <p className="leading-[18px]">{desc}</p>
        </div>
        <div className="col-1 flex flex-col font-normal h-[18px] justify-center ml-0 mt-[42px] relative row-1 text-[#999] text-[12px] tracking-[0.12px] w-[228px]">
          <p className="leading-[18px]">{date}</p>
        </div>
      </div>
    </div>
  );
}

function SectionRecommand() {
  return (
    <div className="bg-white h-[607px] relative shrink-0 w-[360px]">
      {/* Title */}
      <div className="absolute content-stretch flex items-start justify-between left-0 px-[16px] top-[16px] w-[360px]">
        <div className="font-bold leading-[0] relative shrink-0 text-[#777] text-[0px] tracking-[0.27px] whitespace-nowrap">
          <p className="leading-[25px] text-[18px]">
            <span className="text-[#333]">다재다능 스프링복</span>
            <span>님 맞춤공고 🕵🏻‍♂️</span>
          </p>
        </div>
        <div className="content-stretch flex h-[24px] items-center justify-center px-[8px] relative rounded-[4px] shrink-0">
          <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <p className="font-normal leading-[18px] relative shrink-0 text-[#ddd] text-[12px] text-right tracking-[0.12px] whitespace-nowrap">AD</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="absolute content-stretch flex gap-[8px] items-start left-[16px] top-[65px] overflow-x-auto w-[328px]">
        <div className="bg-[#fff6f0] content-stretch flex flex-col h-[34px] items-start py-[7.5px] relative rounded-[4px] shrink-0">
          <div aria-hidden="true" className="absolute border border-[#fed2ba] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="content-stretch flex flex-col h-[19px] items-center justify-center px-[8px] relative shrink-0">
            <p className="font-normal leading-[21px] text-[#555] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">실시간 인기 급상승 🏆</p>
          </div>
        </div>
        <div className="bg-white content-stretch flex flex-col h-[34px] items-start pb-[5px] pt-[7px] relative rounded-[4px] shrink-0">
          <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="content-stretch flex flex-col h-[19px] items-center justify-center px-[8px] relative shrink-0">
            <p className="font-normal leading-[21px] text-[#777] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">$전공명$ 전공자가 많이 쓴</p>
          </div>
        </div>
      </div>

      {/* Company List */}
      <div className="absolute content-stretch flex flex-col items-start left-[17px] overflow-clip top-[111px] w-[328px]">
        <CompanyListItem
          logo={
            <div className="col-1 h-[19.5px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-8.25px] mask-size-[48px_36px] ml-0 mt-[8.25px] relative row-1 w-[48px]" style={{ maskImage: `url('${imgLogo2}')` }}>
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo3} />
            </div>
          }
          name="삼성전자"
          desc="2024년 공개채용"
          date="~ 2024년 8월 29일 17시 00분"
          keywords={[{ label: '대기업' }, { label: '글로벌 기업' }]}
        />
        <div className="h-0 relative shrink-0 w-[328px]">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328 1">
              <line stroke="#F5F5F5" x2="328" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <CompanyListItem
          logo={
            <div className="col-1 h-[27px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-5px] mask-size-[48px_36px] ml-[2px] mt-[5px] relative row-1 w-[44px]" style={{ maskImage: `url('${imgLogo2}')` }}>
              <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImg1} />
            </div>
          }
          name="현대자동차"
          desc="2024년 대졸 신입 채용"
          date="~ 2024년 8월 28일 12시 00분"
          keywords={[{ label: '모빌리티 SW' }, { label: '업계 평균 연봉 TOP' }]}
        />
        <div className="h-0 relative shrink-0 w-[328px]">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328 1">
              <line stroke="#F5F5F5" x2="328" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <CompanyListItem
          logo={
            <div className="col-1 h-[22.5px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.5px_-6.75px] mask-size-[48px_36px] ml-[1.5px] mt-[6.75px] relative row-1 w-[45px]" style={{ maskImage: `url('${imgLogo2}')` }}>
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg2} />
            </div>
          }
          name="SK하이닉스"
          desc="2024년 하반기 공개채용"
          date="~ 2024년 9월 1일 12시 00분"
          keywords={[{ label: '매출 업계 TOP' }, { label: '1944년 설립' }]}
        />
        <div className="h-0 relative shrink-0 w-[328px]">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328 1">
              <line stroke="#F5F5F5" x2="328" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <CompanyListItem
          logo={
            <div className="col-1 h-[8.156px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-14.25px] mask-size-[48px_36px] ml-[3px] mt-[14.25px] relative row-1 w-[42.468px]" style={{ maskImage: `url('${imgLogo2}')` }}>
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo4} />
            </div>
          }
          name="네이버"
          desc="채용 전환 디자인 인턴십"
          date="~ 2024년 8월 20일 23시 59분"
        />
      </div>

      {/* 더 보고 싶어요 Button */}
      <div className="absolute content-stretch flex h-[40px] items-center justify-center left-[16px] px-[12px] py-[9px] rounded-[4px] top-[535px] w-[328px]">
        <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-col font-bold justify-center leading-[0] relative shrink-0 text-[#777] text-[14px] text-center tracking-[0.21px] whitespace-nowrap">
          <p className="leading-[19px]">더 보고 싶어요</p>
        </div>
      </div>
    </div>
  );
}

// ===== Main Export =====

export function TopSections() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative w-full">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        <SectionAds />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        <TopList />
        <SectionRecommand />
      </div>
    </div>
  );
}