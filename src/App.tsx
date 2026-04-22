import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CustomToast } from './components/CustomToast';
import svgPaths from "./imports/svg-z7skeotgsd";
import svgPathsGnb from "./imports/svg-8btr2t2lym";
import svgPathsNotification from "./imports/svg-qtqhm0udfi";
import svgPathsNotificationOff from "./imports/svg-gn63fhit8b";
import img11 from "figma:asset/c266537bad381aa57982dc54548822de16e64a06.png";
import img226 from "figma:asset/bcdd0f64762fb7a4792604589954badf1e066388.png";
import img31 from "figma:asset/951bcf253467d6d215cc01dbfc19f2051607b38f.png";
import img41 from "figma:asset/051d00a16a659a0703bb6d3a9ce447ff85208eb9.png";
import img51 from "figma:asset/2cf4cd1ebe82947440094997fa1a5bca3f4496b0.png";
import { TopSections } from './components/TopSections';

// Types for mission cards
type Mission = {
  id: string;
  title: string;
  subtitle: string;
  buttonText: string;
  url: string;
};

// WebView Component
function WebView({ url, onClose }: { url: string; onClose: () => void }) {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
      className="absolute top-0 left-0 w-full h-full bg-white z-50 flex flex-col"
    >
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center gap-3 shadow-sm shrink-0">
        <button
          onClick={onClose}
          className="p-2 -ml-2 active:scale-95 transition-transform"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-gray-500 truncate">{url}</p>
        </div>
        <button
          onClick={onClose}
          className="p-2 -mr-2 active:scale-95 transition-transform"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
      
      {/* Content Area */}
      <div className="flex-1 p-6 overflow-auto">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-gray-900">웹뷰 콘텐츠</h1>
          <p className="text-gray-600">
            실제 앱에서는 여기에 웹뷰로 {url} 페이지가 로드됩니다.
          </p>
          <div className="bg-gray-50 rounded-lg p-4 space-y-2">
            <p className="text-sm text-gray-700"><strong>URL:</strong> {url}</p>
            <p className="text-sm text-gray-500">이 공간에서 실제 웹 콘텐츠가 표시됩니다.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Mission Card Component with Animation
function MissionCard({ mission, index, onClick }: { mission: Mission; index: number; onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: 'easeOut'
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      className={`${isHovered ? 'bg-neutral-50' : 'bg-white'} relative rounded-[8px] shrink-0 w-full cursor-pointer transition-colors duration-200`}
    >
      <div aria-hidden="true" className="absolute border border-[#eeeeee] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[17px] py-[11px] relative w-full">
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[2px] items-start justify-center relative text-nowrap w-full whitespace-pre">
              <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[19px] relative shrink-0 text-[#333333] text-[14px] tracking-[0.21px]">
                {mission.title}
              </p>
              <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#777777] text-[12px] tracking-[0.12px]">
                {mission.subtitle}
              </p>
            </div>
          </div>
          <div className={`${isHovered ? 'bg-[#d64f00]' : 'bg-[#ff6813]'} h-[32px] relative rounded-[4px] shrink-0 w-[84px] transition-colors duration-200`}>
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[8px] py-[7px] relative w-[84px]">
              <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-center text-nowrap text-white tracking-[0.12px]">
                <p className="leading-[18px] whitespace-pre">{mission.buttonText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// AD Card Component with Animation
function AdCard({ icon, title, subtitle, index, onClick }: { icon: JSX.Element; title: string; subtitle: string; index: number; onClick?: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: 0.3 + index * 0.1,
        ease: 'easeOut'
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      className={`${isHovered ? 'bg-neutral-50' : 'bg-white'} relative rounded-[4px] shrink-0 w-full cursor-pointer transition-colors duration-200`}
    >
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center p-[8px] relative w-full">
          <div className="bg-neutral-100 relative rounded-[4px] shrink-0 size-[32px]">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start p-[4px] relative size-[32px]">
              {icon}
            </div>
          </div>
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[2px] items-start justify-center relative text-nowrap w-full">
              <p className="[white-space-collapse:collapse] font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[19px] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#333333] text-[14px] tracking-[0.21px] w-[min-content]">
                {title}
              </p>
              <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#777777] text-[12px] tracking-[0.12px] whitespace-pre">
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Icon Components
function GreenStarIcon() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[24px]">
      <div className="h-[24px] overflow-clip relative shrink-0 w-full">
        <div className="absolute h-[23.344px] left-[calc(50%+0.45px)] top-[calc(50%-0.33px)] translate-x-[-50%] translate-y-[-50%] w-[23.238px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPaths.p22873800} fill="url(#paint0_linear_1_1545)" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1545" x1="-1.47193" x2="24.7099" y1="11.6721" y2="11.6721">
                <stop offset="0.25" stopColor="#13CE9C" />
                <stop offset="1" stopColor="#13CE9C" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function PurpleRedIcon() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[24px]">
      <div className="h-[20.023px] relative shrink-0 w-[20px]">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[20.023px] items-start relative w-[20px]">
          <div className="h-[20.023px] overflow-clip relative shrink-0 w-full">
            <div className="absolute bottom-[4.61%] left-0 right-[50.35%] top-[0.82%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 19">
                <path d={svgPaths.p1e4c7600} fill="var(--fill-0, #FF6E70)" />
              </svg>
            </div>
            <div className="absolute bottom-[5.44%] left-[50.36%] right-[-0.01%] top-0">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 19">
                <path d={svgPaths.p1d2c4380} fill="var(--fill-0, #A248FF)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function YellowSparkleIcon() {
  return (
    <div className="content-stretch flex items-center justify-center relative size-[24px]">
      <div className="relative shrink-0 size-[24px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g clipPath="url(#clip0_1_1535)">
            <path d={svgPaths.p3baac180} fill="var(--fill-0, #FFBB00)" />
          </g>
          <defs>
            <clipPath id="clip0_1_1535">
              <rect fill="white" height="24" width="24" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

// Section Popular Component
function SectionPopular() {
  const jobs = [
    { rank: '1', company: 'SK브로드밴드', position: '서비스 기획', daysLeft: '4일 남음', applicants: '238명 작성' },
    { rank: '2', company: '우아한형제들', position: '콘텐츠 디자이너', daysLeft: '4일 남음', applicants: '192명 작성' },
    { rank: '3', company: 'LG CNS', position: 'UX', daysLeft: '3일 남음', applicants: '65명 작성' },
    { rank: '4', company: 'LG CNS', position: 'UX/UI', daysLeft: '12일 남음', applicants: '39명 작성' },
    { rank: '5', company: '펄어비스', position: '서비스 디자인 (웹기획)', daysLeft: '11일 남음', applicants: '28명 작성' },
  ];

  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[16px] items-start pb-[28px] pt-[24px] px-[16px] relative shrink-0 w-[360px]">
      <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[25px] relative shrink-0 text-[#333333] text-[18px] text-nowrap tracking-[0.27px] whitespace-pre">직무별 인기 공고</p>
      
      {/* Tabs */}
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0 overflow-x-auto">
        <div className="bg-[#fff6f0] box-border content-stretch flex flex-col gap-[10px] h-[34px] items-start px-0 py-[7.5px] relative rounded-[4px] shrink-0">
          <div aria-hidden="true" className="absolute border border-[#fed2ba] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="box-border content-stretch flex flex-col h-[19px] items-center justify-center px-[8px] py-0 relative shrink-0">
            <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[21px] text-[#555555] text-[14px] tracking-[0.14px] whitespace-pre">디자인</p>
          </div>
        </div>
        <div className="bg-white box-border content-stretch flex flex-col gap-[10px] h-[34px] items-start pb-[5px] pt-[7px] px-0 relative rounded-[4px] shrink-0">
          <div aria-hidden="true" className="absolute border border-[#eeeeee] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="box-border content-stretch flex flex-col h-[19px] items-center justify-center px-[8px] py-0 relative shrink-0">
            <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[21px] text-[#777777] text-[14px] tracking-[0.14px]">경영·사무</p>
          </div>
        </div>
        <div className="bg-white box-border content-stretch flex flex-col gap-[10px] h-[34px] items-start pb-[5px] pt-[7px] px-0 relative rounded-[4px] shrink-0">
          <div aria-hidden="true" className="absolute border border-[#eeeeee] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="box-border content-stretch flex flex-col h-[19px] items-center justify-center px-[8px] py-0 relative shrink-0">
            <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[21px] text-[#777777] text-[14px] tracking-[0.14px]">마케팅·광고·홍보</p>
          </div>
        </div>
      </div>

      {/* Job List */}
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        {jobs.map((job) => (
          <div key={job.rank} className="box-border content-stretch flex gap-[16px] items-start px-[16px] py-0 relative shrink-0">
            <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#999999] text-[16px] text-nowrap tracking-[0.24px] whitespace-pre">{job.rank}</p>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 text-[16px] text-nowrap whitespace-pre">
                <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#555555] tracking-[0.24px]">{job.company}</p>
                <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#333333] tracking-[0.16px]">{job.position}</p>
              </div>
              <div className="content-stretch flex font-['Pretendard_Variable:Regular',sans-serif] font-normal gap-[8px] items-center leading-[0] relative shrink-0 text-[#999999] text-[14px] text-nowrap tracking-[0.14px]">
                <p className="leading-[21px] text-nowrap whitespace-pre">{job.daysLeft}</p>
                <p className="leading-[21px] text-nowrap whitespace-pre">· {job.applicants}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Education Section Component
function EducationSection() {
  return (
    <div className="bg-white relative w-[360px]" data-name="edu">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-[32px] pt-[24px] relative w-full">
          {/* Header */}
          <div className="content-stretch flex gap-[60px] items-start relative shrink-0 px-[16px]" data-name="header">
            <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[25px] relative shrink-0 text-[#333333] text-[18px] text-nowrap tracking-[0.27px] whitespace-pre">직무 교육관 🧑‍💻</p>
          </div>
          
          {/* Banner - Horizontal Scroll Container */}
          <div className="relative w-full overflow-x-auto scrollbar-hide" data-name="banner">
            <div className="flex gap-[8px] items-start px-[16px] pb-[2px]">
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
          </div>
        </div>
      </div>
    </div>
  );
}

// Bottom Navigation
function BottomNav() {
  return (
    <div className="absolute bg-neutral-50 bottom-0 h-[56px] left-0 overflow-clip w-[360px]">
      <div className="absolute bg-neutral-50 content-stretch flex items-start justify-center left-0 top-0 w-[360px]">
        {/* Home */}
        <div className="basis-0 content-stretch flex flex-col gap-px grow h-[56px] items-center justify-center min-h-px min-w-px relative shrink-0">
          <div className="relative shrink-0 size-[24px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path clipRule="evenodd" d={svgPathsGnb.p3cb67b00} fill="var(--fill-0, #333333)" fillRule="evenodd" />
            </svg>
          </div>
          <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[17px] relative shrink-0 text-[#333333] text-[11px] text-center text-nowrap whitespace-pre">홈</p>
        </div>
        
        {/* 채용공고 */}
        <div className="basis-0 content-stretch flex flex-col gap-px grow h-[56px] items-center justify-center min-h-px min-w-px relative shrink-0">
          <div className="relative shrink-0 size-[24px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path d={svgPathsGnb.p3c483380} fill="var(--fill-0, #BBBBBB)" />
              <path d={svgPathsGnb.p2830b500} fill="var(--fill-0, #BBBBBB)" />
              <path d={svgPathsGnb.pb805380} fill="var(--fill-0, #BBBBBB)" />
              <path d={svgPathsGnb.p63ebf80} fill="var(--fill-0, #BBBBBB)" />
              <path d={svgPathsGnb.p1e780d00} fill="var(--fill-0, #BBBBBB)" />
              <path d={svgPathsGnb.p157edd00} fill="var(--fill-0, #BBBBBB)" />
            </svg>
          </div>
          <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[17px] relative shrink-0 text-[#bbbbbb] text-[11px] text-center text-nowrap whitespace-pre">채용공고</p>
        </div>
        
        {/* 자기소개서 */}
        <div className="basis-0 content-stretch flex flex-col gap-px grow h-[56px] items-center justify-center min-h-px min-w-px relative shrink-0">
          <div className="relative shrink-0 size-[24px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path d={svgPathsGnb.p67b9b00} fill="var(--fill-0, #BBBBBB)" />
              <path d={svgPathsGnb.p1ab95400} fill="var(--fill-0, #BBBBBB)" />
              <path d={svgPathsGnb.p11b94600} fill="var(--fill-0, #BBBBBB)" />
              <path clipRule="evenodd" d={svgPathsGnb.p149f4a00} fill="var(--fill-0, #BBBBBB)" fillRule="evenodd" />
            </svg>
          </div>
          <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[17px] relative shrink-0 text-[#bbbbbb] text-[11px] text-center text-nowrap whitespace-pre">자기소개서</p>
        </div>
        
        {/* 채팅 */}
        <div className="basis-0 content-stretch flex flex-col gap-px grow h-[56px] items-center justify-center min-h-px min-w-px relative shrink-0">
          <div className="relative shrink-0 size-[24px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path d={svgPathsGnb.p36489980} fill="var(--fill-0, #BBBBBB)" />
              <path d={svgPathsGnb.p2865fd80} fill="var(--fill-0, #BBBBBB)" />
              <path d={svgPathsGnb.p39cc3a00} fill="var(--fill-0, #BBBBBB)" />
              <path clipRule="evenodd" d={svgPathsGnb.p4b9a700} fill="var(--fill-0, #BBBBBB)" fillRule="evenodd" />
            </svg>
          </div>
          <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[17px] relative shrink-0 text-[#bbbbbb] text-[11px] text-center text-nowrap whitespace-pre">채팅</p>
        </div>
        
        {/* 데이터랩 */}
        <div className="basis-0 content-stretch flex flex-col gap-px grow h-[56px] items-center justify-center min-h-px min-w-px relative shrink-0">
          <div className="relative shrink-0 size-[24px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path clipRule="evenodd" d={svgPathsGnb.p390bd780} fill="var(--fill-0, #BBBBBB)" fillRule="evenodd" />
            </svg>
          </div>
          <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[17px] relative shrink-0 text-[#bbbbbb] text-[11px] text-center text-nowrap whitespace-pre">데이터랩</p>
        </div>
      </div>
      
      {/* Divider */}
      <div className="absolute bottom-full left-0 right-0 top-0">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1">
            <path d="M0 0.5H360" stroke="var(--stroke-0, #DDDDDD)" />
          </svg>
        </div>
      </div>
      
      {/* Indicator */}
      <div className="absolute left-[336px] size-[4px] top-[7px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #FF6813)" r="2" />
        </svg>
      </div>
    </div>
  );
}

export default function App() {
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);
  const [toastMessage, setToastMessage] = useState<string>('');
  const [showToast, setShowToast] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const toggleNotification = () => {
    const newState = !isNotificationEnabled;
    setIsNotificationEnabled(newState);
    
    // 토스트 메시지 표시
    if (newState) {
      setToastMessage('미션 알림이 켜졌습니다.');
      setShowToast(true);
    } else {
      setToastMessage('미션 알림이 취소되었습니다.');
      setShowToast(true);
    }
  };

  const missions: Mission[] = [
    {
      id: '1',
      title: '면접, 이것만은 알고 가자!',
      subtitle: '필수 면접 질문 200제',
      buttonText: 'PDF 받기',
      url: 'https://example.com/interview-guide'
    },
    {
      id: '2',
      title: '내 돈 내고 듣기는 부담스러운 교육',
      subtitle: '지원금 30초 확인',
      buttonText: '무료 진단',
      url: 'https://example.com/free-diagnosis'
    },
    {
      id: '3',
      title: '복잡한 국비지원 자격 진단',
      subtitle: '30초 확인하기',
      buttonText: '30초 확인',
      url: 'https://example.com/qualification-check'
    },
    {
      id: '4',
      title: '취업 성공 전략 가이드',
      subtitle: '실전 노하우 100선',
      buttonText: '바로 보기',
      url: 'https://example.com/success-guide'
    },
    {
      id: '5',
      title: '이력서 무료 첨삭 받기',
      subtitle: '전문가 1:1 피드백',
      buttonText: '신청하기',
      url: 'https://example.com/resume-review'
    }
  ];

  const CARDS_PER_PAGE = 3;
  const totalPages = Math.ceil(missions.length / CARDS_PER_PAGE);

  // 자동 롤링 기능
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalPages]);

  // 현재 페이지에 보여줄 미션들
  const getCurrentPageMissions = () => {
    const start = currentPage * CARDS_PER_PAGE;
    const end = start + CARDS_PER_PAGE;
    return missions.slice(start, end);
  };

  return (
    <div className="bg-neutral-100 flex items-center justify-center min-h-screen p-4">
      {/* Device Frame - 360x720 */}
      <div className="relative w-[376px] h-[736px] bg-neutral-100 overflow-hidden shadow-2xl rounded-[20px] border-[8px] border-gray-800">
        {/* Scrollable Content */}
        <div className="h-full overflow-y-auto pb-[56px]">
          <div className="content-stretch flex flex-col gap-[8px] items-center">
            {/* Top Sections from Figma */}
            <TopSections />

            {/* Section Popular */}
            <SectionPopular />
            
            {/* 취준 미션 섹션 */}
            <div className="bg-white box-border content-stretch flex flex-col gap-[16px] items-start pb-[32px] pt-[24px] px-[16px] relative shrink-0 w-[360px]">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="content-stretch flex gap-[60px] items-start relative shrink-0 w-full"
              >
                <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[25px] relative shrink-0 text-[#333333] text-[18px] text-nowrap tracking-[0.27px] whitespace-pre">
                  취준 미션을 수행해 보세요 🚩
                </p>
              </motion.div>

              {/* Mission Container */}
              <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative rounded-[8px] shrink-0 w-full">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative shrink-0 w-full"
                >
                  <div className="flex flex-row items-center size-full">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center pl-[4px] pr-[8px] py-0 relative w-full">
                      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#999999] text-[13px] text-nowrap tracking-[0.13px] whitespace-pre">
                        진행 중인 미션 ⚡️
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Mission Cards */}
                <div className="relative shrink-0 w-full h-[204px] overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentPage}
                      initial={{ x: 'calc(100% + 16px)' }}
                      animate={{ x: 0 }}
                      exit={{ x: 'calc(-100% - 16px)' }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                      className="w-full h-full"
                    >
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[6px] items-start relative w-full">
                        {getCurrentPageMissions().map((mission, index) => (
                          <MissionCard
                            key={mission.id}
                            mission={mission}
                            index={index}
                            onClick={() => setSelectedMission(mission)}
                          />
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Indicator */}
                <div className="flex justify-center items-center gap-[4px] py-[8px] shrink-0 w-full">
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <div
                      key={index}
                      className={`rounded-full transition-all duration-300 ${
                        index === currentPage
                          ? 'w-[4px] h-[4px] bg-black opacity-60'
                          : 'w-[4px] h-[4px] bg-black opacity-20'
                      }`}
                    />
                  ))}
                </div>

                {/* Notification Button */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="relative shrink-0 w-full"
                >
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[10px] items-end pb-[8px] pt-[4px] px-0 relative w-full">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={toggleNotification}
                      className={`h-[32px] relative rounded-[4px] shrink-0 w-full cursor-pointer transition-colors duration-300 ${
                        isNotificationEnabled 
                          ? 'bg-white' 
                          : 'bg-[#fff6f0]'
                      }`}
                    >
                      <div 
                        aria-hidden="true" 
                        className={`absolute border border-solid inset-0 pointer-events-none rounded-[4px] transition-colors duration-300 ${
                          isNotificationEnabled 
                            ? 'border-[#eeeeee]' 
                            : 'border-[#fed2ba]'
                        }`} 
                      />
                      <div className="flex flex-row items-center justify-center size-full">
                        <div className="box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[8px] py-[7px] relative w-full">
                          {isNotificationEnabled ? (
                            // 알림 취소 상태 - 비활성 아이콘
                            <div className="relative flex items-center justify-center shrink-0 w-[16px] h-[16px]">
                              <svg className="block w-[16px] h-[16px]" fill="none" viewBox="0 0 16 16">
                                <path d={svgPathsNotificationOff.p23a64f00} fill="#BBBBBB" />
                              </svg>
                            </div>
                          ) : (
                            // 알림기 상태 - 활성 아이콘
                            <div className="relative flex items-center justify-center shrink-0 w-[16px] h-[16px]">
                              <svg className="block w-[16px] h-[16px]" fill="none" viewBox="0 0 16 16">
                                <path d={svgPathsNotification.p2f9f3f0} fill="#FF6813" />
                              </svg>
                            </div>
                          )}
                          <div className={`flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-nowrap tracking-[0.12px] transition-colors duration-300 ${
                            isNotificationEnabled ? 'text-[#777777]' : 'text-[#ff6813]'
                          }`}>
                            <p className="leading-[18px] whitespace-pre">
                              {isNotificationEnabled ? '알림 취소하기 ' : '다음 미션 알림받기 '}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* AD Section */}
              <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="relative shrink-0 w-full"
                >
                  <div className="size-full">
                    <div className="box-border content-stretch flex flex-col gap-[2px] items-start px-[4px] py-0 relative w-full">
                      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#999999] text-[13px] text-nowrap tracking-[0.13px] whitespace-pre">
                        자소설 신청 혜택 · AD
                      </p>
                    </div>
                  </div>
                </motion.div>

                <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
                  <AdCard
                    icon={<GreenStarIcon />}
                    title="스파르타 상담 신청하고"
                    subtitle="IT 취업 족보 받기"
                    index={0}
                    onClick={() => setSelectedMission({ id: 'ad1', title: '스파르타 상담 신청', subtitle: 'IT 취업 족보 받기', buttonText: '신청하기', url: 'https://spartacodingclub.kr' })}
                  />
                  <AdCard
                    icon={<PurpleRedIcon />}
                    title="멋쟁이사자들 상담 신청하고"
                    subtitle="네이버페이 받기"
                    index={1}
                    onClick={() => setSelectedMission({ id: 'ad2', title: '멋쟁이사자들 상담 신청', subtitle: '네이버페이 받기', buttonText: '신청하기', url: 'https://likelion.net' })}
                  />
                  <AdCard
                    icon={
                      <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "24", "--transform-inner-height": "24" } as React.CSSProperties}>
                        <div className="flex-none rotate-[90deg]">
                          <YellowSparkleIcon />
                        </div>
                      </div>
                    }
                    title="ALL-IN-ONE! 합격패스"
                    subtitle="전액 지원받기"
                    index={2}
                    onClick={() => setSelectedMission({ id: 'ad3', title: 'ALL-IN-ONE! 합격패스', subtitle: '전액 지원받기', buttonText: '신청하기', url: 'https://example.com/all-in-one-pass' })}
                  />
                </div>
              </div>
            </div>

            {/* Education Section */}
            <EducationSection />
          </div>
        </div>

        {/* Bottom Navigation */}
        <BottomNav />

        {/* WebView Modal */}
        <AnimatePresence>
          {selectedMission && (
            <WebView
              url={selectedMission.url}
              onClose={() => setSelectedMission(null)}
            />
          )}
        </AnimatePresence>

        {/* Custom Toast */}
        <CustomToast
          message={toastMessage}
          isVisible={showToast}
          onClose={() => setShowToast(false)}
        />
      </div>
    </div>
  );
}